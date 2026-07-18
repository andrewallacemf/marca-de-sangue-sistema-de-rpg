import { useEffect, useRef, useState } from "react";
import {
  Save,
  FolderOpen,
  Printer,
  FilePlus2,
  Shield,
  Swords,
  HeartPulse,
  BatteryLow,
  BedDouble,
} from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Computed,
  Field,
  InlineComputed,
  InlineField,
  Input,
  Label,
  Textarea,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { EquipamentosSection } from "@/components/EquipamentosSection";
import { CaracteristicasSection } from "@/components/CaracteristicasSection";
import { ProtecoesSection } from "@/components/ProtecoesSection";
import { ArmasSection } from "@/components/ArmasSection";
import {
  expUsada,
  fichaVazia,
  inconsciente,
  LS_KEY,
  MEMBROS,
  descansar,
  migrarFicha,
  novoItem,
  paTotalComp,
  parseNum,
  penalidadeFadigaNum,
  PROP_KEYS,
  qtdAptidoesComp,
  qtdHabilidadesComp,
  qtdTracosComp,
  redArmaduraComp,
  SCHEMA_VERSION,
  type Ficha,
  type RulesVersion,
  type TotalUsado,
} from "@/lib/ficha";
import { PROP_INFO } from "@/lib/catalogo";

/* ============================ Componentes auxiliares ============================ */

function penalidadeFadiga(f: number, rv: RulesVersion): string {
  if (f >= 50) return "inconsciente";
  let p = 0;
  if (rv === "vigente") p = f >= 10 ? Math.floor((f - 10) / 5) + 1 : 0;
  else p = f > 10 ? Math.floor((f - 11) / 5) + 1 : 0;
  return p > 0 ? `−${p} PA` : "sem penalidade";
}

function DamageCell({ state, onClick }: { state: number; onClick: () => void }) {
  const styles = [
    "bg-transparent",
    "bg-accent/40",
    "bg-primary/60 text-primary-foreground",
    "bg-foreground text-background",
  ];
  const chars = ["", "／", "✕", "■"];
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-5 w-5 shrink-0 rounded-[3px] border border-input text-[10px] font-bold leading-none",
        "flex items-center justify-center transition-colors",
        styles[state]
      )}
      title={["vazio", "superficial", "profundo", "permanente"][state]}
    >
      {chars[state]}
    </button>
  );
}

function TotalUsadoRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: TotalUsado;
  onChange: (v: TotalUsado) => void;
}) {
  return (
    <div className="grid grid-cols-[4rem_1fr_auto_1fr] items-center gap-2">
      <span className="text-sm">{label}</span>
      <Input
        className="h-7 text-center"
        placeholder="tot."
        value={value.total}
        onChange={(e) => onChange({ ...value, total: e.target.value })}
      />
      <span className="text-center text-muted-foreground">/</span>
      <Input
        className="h-7 text-center"
        placeholder="usad."
        value={value.usado}
        onChange={(e) => onChange({ ...value, usado: e.target.value })}
      />
    </div>
  );
}

/* ============================ App ============================ */

export default function App() {
  const [rulesVersion, setRulesVersion] = useState<RulesVersion>("vigente");
  const [ficha, setFicha] = useState<Ficha>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.rulesVersion) setTimeout(() => setRulesVersion(parsed.rulesVersion), 0);
        if (parsed?.data) return migrarFicha(parsed.data);
      }
    } catch {
      /* ignora */
    }
    return fichaVazia();
  });
  const [a4, setA4] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem(
        LS_KEY,
        JSON.stringify({ app: "marca-de-sangue-ficha", schemaVersion: SCHEMA_VERSION, rulesVersion, data: ficha })
      );
    } catch {
      /* ignora */
    }
  }, [ficha, rulesVersion]);

  function update<K extends keyof Ficha>(key: K, value: Ficha[K]) {
    setFicha((f) => ({ ...f, [key]: value }));
  }

  function salvar() {
    const payload = {
      app: "marca-de-sangue-ficha",
      schemaVersion: SCHEMA_VERSION,
      rulesVersion,
      salvoEm: new Date().toISOString(),
      data: ficha,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const nome = (ficha.info.nome || "personagem").replace(/[^\p{L}\p{N}_-]+/gu, "_");
    a.href = url;
    a.download = `${nome}.mds.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function carregar(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (parsed?.rulesVersion === "alternativa" || parsed?.rulesVersion === "vigente") {
          setRulesVersion(parsed.rulesVersion);
        }
        if (parsed?.data) setFicha(migrarFicha(parsed.data));
      } catch {
        alert("Não consegui ler esse arquivo de ficha.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  function novo() {
    if (confirm("Começar uma ficha nova? As alterações não salvas serão perdidas.")) {
      setFicha(fichaVazia());
    }
  }

  function descanso() {
    if (
      confirm(
        "Descanso: recupera todas as aptidões, devolve todos os usos de habilidades e zera a fadiga. Continuar?"
      )
    ) {
      setFicha((f) => descansar(f));
    }
  }

  const habCards = ficha.caracteristicas.filter((c) => c.tipo === "Habilidade" && c.nome.trim());

  // valores calculados automaticamente (campos travados)
  const expUsadaCalc = expUsada(ficha, rulesVersion);
  const expTotalNum = parseNum(ficha.exp.baseTotal);
  const expExcedida = expTotalNum > 0 && expUsadaCalc > expTotalNum;
  const paTotalCalc = paTotalComp(ficha, rulesVersion);
  const redArmaduraCalc = redArmaduraComp(ficha);
  const redFadigaCalc = penalidadeFadigaNum(ficha.fadiga, rulesVersion);
  const inconsc = inconsciente(ficha);

  // maestrias que o personagem possui (por traço comprado), para indicar nas armas
  const maestriasSet = new Set(
    ficha.caracteristicas.filter((c) => c.nome.trim()).map((c) => c.nome.trim().toLowerCase())
  );
  const temMaestria = (p: (typeof PROP_KEYS)[number]) => {
    const m = PROP_INFO[p].maestria;
    return m ? maestriasSet.has(m.toLowerCase()) : false;
  };
  const adicionarAoInventario = (nome: string) => {
    if (!nome.trim()) return;
    setFicha((f) => ({
      ...f,
      equipamentos: [...f.equipamentos, { ...novoItem(), equipado: true, item: nome.trim(), qtd: "1" }],
    }));
  };

  const printHeader = (
    <div className="print-header col-full">
      <span className="ph-nome">{ficha.info.nome || "Personagem sem nome"}</span>
      <span className="ph-marca">
        Marca de Sangue · Ficha {rulesVersion === "vigente" ? "(regras vigentes)" : "(regras alternativas)"}
      </span>
    </div>
  );

  return (
    <div className={cn("min-h-screen pb-16", a4 && "a4-preview bg-muted")}>
      <header className="no-print sticky top-0 z-10 border-b bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-2">
          <span className="mr-1 text-sm font-semibold tracking-wide text-primary">
            Marca de Sangue <span className="text-muted-foreground">· Ficha</span>
          </span>
          <div className="ml-2 flex items-center gap-1 rounded-md border p-0.5">
            {(["vigente", "alternativa"] as RulesVersion[]).map((v) => (
              <button
                key={v}
                onClick={() => setRulesVersion(v)}
                className={cn(
                  "rounded px-2 py-1 text-xs font-medium",
                  rulesVersion === v ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                )}
              >
                {v === "vigente" ? "Regras vigentes" : "Regras alternativas"}
              </button>
            ))}
          </div>
          <div className="ml-auto flex flex-wrap items-center gap-1.5">
            <Button variant="outline" size="sm" onClick={novo}>
              <FilePlus2 className="h-3.5 w-3.5" /> Nova
            </Button>
            <Button variant="outline" size="sm" onClick={() => fileRef.current?.click()}>
              <FolderOpen className="h-3.5 w-3.5" /> Carregar
            </Button>
            <input ref={fileRef} type="file" accept=".json,application/json" className="hidden" onChange={carregar} />
            <Button size="sm" onClick={salvar}>
              <Save className="h-3.5 w-3.5" /> Salvar
            </Button>
            <Button variant="outline" size="sm" onClick={descanso} title="Recupera aptidões, usos de habilidades e zera a fadiga">
              <BedDouble className="h-3.5 w-3.5" /> Descanso
            </Button>
            <Button variant={a4 ? "default" : "outline"} size="sm" onClick={() => setA4((s) => !s)}>
              A4
            </Button>
            <Button variant="secondary" size="sm" onClick={() => window.print()}>
              <Printer className="h-3.5 w-3.5" /> Imprimir
            </Button>
          </div>
        </div>
      </header>

      <main className={cn("mx-auto max-w-6xl px-4 py-4", a4 && "px-0")}>
        <div className={cn(a4 && "sheet")}>
          {printHeader}
          <div className="grid-p1">
            {/* Informações */}
            <Card className="area-info">
              <CardHeader>
                <CardTitle>Informações</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Field label="Nome do personagem">
                  <Input value={ficha.info.nome} onChange={(e) => update("info", { ...ficha.info, nome: e.target.value })} />
                </Field>
                <div className="grid grid-cols-3 gap-2">
                  <Field label="Jogador">
                    <Input value={ficha.info.jogador} onChange={(e) => update("info", { ...ficha.info, jogador: e.target.value })} />
                  </Field>
                  <Field label="Cenário">
                    <Input value={ficha.info.cenario} onChange={(e) => update("info", { ...ficha.info, cenario: e.target.value })} />
                  </Field>
                  <Field label="Última sessão">
                    <Input value={ficha.info.ultimaSessao} onChange={(e) => update("info", { ...ficha.info, ultimaSessao: e.target.value })} />
                  </Field>
                </div>
              </CardContent>
            </Card>

            {/* Experiência */}
            <Card className="area-exp">
              <CardHeader>
                <CardTitle>Experiência & características</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div>
                  <Label className="mb-1 block">Experiência base</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <InlineField label="Total" value={ficha.exp.baseTotal} onChange={(e) => update("exp", { ...ficha.exp, baseTotal: e.target.value })} />
                    <InlineComputed
                      label="Usada"
                      value={expUsadaCalc}
                      alerta={expExcedida}
                      title={
                        expExcedida
                          ? `Acima do total (${expTotalNum}). Reveja aptidões, características e PA.`
                          : "Soma automática: aptidões + características + PA comprado."
                      }
                    />
                  </div>
                  {expExcedida && (
                    <p className="mt-1 text-[11px] text-destructive">
                      Passou {expUsadaCalc - expTotalNum} exp do total.
                    </p>
                  )}
                </div>
                <div>
                  <Label className="mb-1 block">Características compradas</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <InlineComputed label="Apt." value={qtdAptidoesComp(ficha)} />
                    <InlineComputed label="Hab." value={qtdHabilidadesComp(ficha)} />
                    <InlineComputed label="Traç." value={qtdTracosComp(ficha)} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aptidões */}
            <Card className="area-apt">
              <CardHeader>
                <CardTitle>Aptidões (total / usado)</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-1.5">
                {([
                  ["fisica", "Física"],
                  ["agil", "Ágil"],
                  ["mental", "Mental"],
                  ["social", "Social"],
                ] as const).map(([k, label]) => (
                  <TotalUsadoRow
                    key={k}
                    label={label}
                    value={ficha.aptidoes[k]}
                    onChange={(v) => update("aptidoes", { ...ficha.aptidoes, [k]: v })}
                  />
                ))}
              </CardContent>
            </Card>

            {/* PA */}
            <Card className="area-pa">
              <CardHeader>
                <CardTitle>Pontos de ação (P.A.)</CardTitle>
              </CardHeader>
              <CardContent className="pa-grid grid grid-cols-3 gap-2">
                <Field label="PA base">
                  <Input className="text-center" value={ficha.pa.base} onChange={(e) => update("pa", { ...ficha.pa, base: e.target.value })} />
                </Field>
                <Field label="Red. armadura">
                  <Computed
                    value={redArmaduraCalc ? `−${redArmaduraCalc}` : "0"}
                    title="soma dos redutores de PA das proteções equipadas (com região marcada)"
                  />
                </Field>
                <Field label="Red. fadiga">
                  <Computed
                    value={inconsc ? "inconsc." : redFadigaCalc ? `−${redFadigaCalc}` : "0"}
                    alerta={inconsc}
                    title="penalidade automática pela fadiga acumulada (−1 a cada 5 a partir de 10)"
                  />
                </Field>
                <Field label="Red. carga">
                  <Input className="text-center" value={ficha.pa.redCarga} onChange={(e) => update("pa", { ...ficha.pa, redCarga: e.target.value })} />
                </Field>
                <Field label="Outros modif.">
                  <Input className="text-center" value={ficha.pa.outros} onChange={(e) => update("pa", { ...ficha.pa, outros: e.target.value })} />
                </Field>
                <Field label="PA TOTAL">
                  <Computed
                    value={inconsc ? "0" : paTotalCalc}
                    alerta={inconsc}
                    title="base − red. armadura − red. fadiga − red. carga + outros (piso de 3 PA)"
                    className="text-base"
                  />
                </Field>
              </CardContent>
            </Card>

            {/* Habilidades — referência rápida (resumo automático dos cards) */}
            <Card className="area-hab">
              <CardHeader>
                <CardTitle className="flex items-center gap-1.5">
                  <Swords className="h-4 w-4" /> Habilidades — referência rápida
                  <span className="ml-2 text-[11px] font-normal normal-case text-muted-foreground">
                    {rulesVersion === "vigente"
                      ? "resumo automático dos cards (usos por nível)"
                      : "resumo automático dos cards (nível)"}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-1">
                {habCards.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Adicione habilidades nos cards de “Habilidades &amp; traços” — elas aparecem aqui automaticamente.
                  </p>
                ) : (
                  <>
                    <div className="flex items-center gap-2 pb-1 text-[11px] uppercase text-muted-foreground">
                      <span className="flex-1">Nome</span>
                      <span className="flex w-40 justify-between px-1">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <span key={n} className="w-6 text-center">
                            Nv{n}
                          </span>
                        ))}
                      </span>
                    </div>
                    {habCards.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 border-t pt-1 first:border-0 first:pt-0">
                        <span className="flex-1 truncate text-sm">{h.nome}</span>
                        <div className="flex w-40 justify-between px-1">
                          {[0, 1, 2, 3, 4].map((ni) => {
                            if (rulesVersion === "vigente") {
                              const u = h.usosPorNivel[ni] || 0;
                              return (
                                <span
                                  key={ni}
                                  className={cn(
                                    "w-6 text-center text-sm",
                                    u ? "font-semibold text-primary" : "text-muted-foreground/40"
                                  )}
                                >
                                  {u || "·"}
                                </span>
                              );
                            }
                            const on = h.nivel === ni + 1;
                            return (
                              <span
                                key={ni}
                                className={cn("w-6 text-center", on ? "font-bold text-primary" : "text-muted-foreground/40")}
                              >
                                {on ? "●" : "·"}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </CardContent>
            </Card>

            {/* Armas (seção full-width, duas lado a lado) */}
            <ArmasSection
              className="area-armas"
              armas={ficha.armas}
              setArmas={(v) => update("armas", v)}
              temMaestria={temMaestria}
              onAddItem={adicionarAoInventario}
            />

            {/* Proteções (dinâmicas, com regiões cobertas) + guardas */}
            <ProtecoesSection
              className="area-prot"
              protecoes={ficha.protecoes}
              setProtecoes={(v) => update("protecoes", v)}
              guardas={ficha.guardas}
              setGuardas={(v) => update("guardas", v)}
              onAddItem={adicionarAoInventario}
            />

            {/* Saúde */}
            <Card className="area-saude">
              <CardHeader>
                <CardTitle className="flex items-center gap-1.5">
                  <HeartPulse className="h-4 w-4" /> Saúde — 60 PV (10 por membro)
                  <span className="ml-2 text-[11px] font-normal normal-case text-muted-foreground">
                    clique para marcar: 1× superficial ／ · 2× profundo ✕ · 3× permanente ■ · o nº é o d6 do ataque descuidado
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {MEMBROS.map((m) => (
                  <div key={m.key} className="flex items-center justify-between gap-2 rounded-md border p-2">
                    <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-medium">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent text-[10px] font-bold text-accent-foreground">
                        {m.d6}
                      </span>
                      {m.label}
                    </span>
                    <div className="flex shrink-0 gap-0.5">
                      {ficha.saude[m.key].map((st, ci) => (
                        <DamageCell
                          key={ci}
                          state={st}
                          onClick={() =>
                            setFicha((f) => {
                              const prev = f.saude[m.key][ci];
                              const next = (prev + 1) % 4;
                              const saude = { ...f.saude, [m.key]: f.saude[m.key].map((v, j) => (j === ci ? next : v)) };
                              // entrar em dano superficial (0 → 1) gera 1 de fadiga (não é removida ao curar)
                              const fadiga = prev === 0 && next === 1 ? Math.min(50, f.fadiga + 1) : f.fadiga;
                              return { ...f, saude, fadiga };
                            })
                          }
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Fadiga — destaque, perto da Saúde */}
            <Card className="area-fad">
              <CardHeader>
                <CardTitle className="flex items-center gap-1.5">
                  <BatteryLow className="h-4 w-4" /> Fadiga
                  <span className="ml-2 text-[11px] font-normal normal-case text-muted-foreground">
                    {rulesVersion === "alternativa"
                      ? "livre até 10; −1 PA a cada 5 acima; 50 = inconsciente"
                      : "−1 PA a cada 5 a partir de 10; 50 = inconsciente"}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="text-3xl font-bold leading-none text-primary">{ficha.fadiga}</span>
                  <span className="text-sm text-muted-foreground">
                    / 50 · {penalidadeFadiga(ficha.fadiga, rulesVersion)}
                  </span>
                  <span className="no-print ml-auto text-[11px] text-muted-foreground">
                    zera no “Descanso” (topo)
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  {[0, 1].map((linha) => (
                    <div key={linha} className="flex flex-wrap gap-1">
                      {Array.from({ length: 25 }, (_, k) => linha * 25 + k + 1).map((n) => {
                        const filled = n <= ficha.fadiga;
                        return (
                          <button
                            key={n}
                            type="button"
                            onClick={() => update("fadiga", ficha.fadiga === n ? n - 1 : n)}
                            title={`${n}`}
                            className={cn(
                              "h-5 w-5 rounded-[3px] text-[8px] leading-none",
                              filled ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-secondary",
                              n % 10 === 0 ? "border-2 border-accent" : "border border-input"
                            )}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          {/* ---- Página 2: equipamentos + anotações ---- */}
          <div className="page-break-before sheet-grid grid grid-cols-1 gap-3 lg:grid-cols-3">
            {printHeader}
            {/* Equipamentos / carga / tesouro */}
            <EquipamentosSection
              equipamentos={ficha.equipamentos}
              setEquipamentos={(v) => update("equipamentos", v)}
              carga={ficha.carga}
              setCarga={(v) => update("carga", v)}
              tesouro={ficha.tesouro}
              setTesouro={(v) => update("tesouro", v)}
            />

            {/* Anotações — acompanha a altura da coluna de equipamentos; rola se exceder */}
            <Card className="col-full flex flex-col lg:col-span-1">
              <CardHeader>
                <CardTitle>Anotações</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <Textarea
                  autoGrow={false}
                  className="min-h-[160px] flex-1"
                  value={ficha.anotacoes}
                  onChange={(e) => update("anotacoes", e.target.value)}
                />
              </CardContent>
            </Card>

          </div>

          {/* ---- Página 3: habilidades & traços detalhados ---- */}
          <div className="page-break-before sheet-grid grid grid-cols-1 gap-3 lg:grid-cols-3">
            {printHeader}
            <CaracteristicasSection
              itens={ficha.caracteristicas}
              setItens={(v) => update("caracteristicas", v)}
              rulesVersion={rulesVersion}
            />

            {/* Glossário de propriedades de armas */}
            <Card className="col-full lg:col-span-3">
              <CardHeader>
                <CardTitle>Propriedades de armas — referência</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {PROP_KEYS.map((p) => {
                    const info = PROP_INFO[p];
                    return (
                      <p key={p} className="text-[12px] leading-snug">
                        <span className="font-semibold text-primary">{p}</span>{" "}
                        <span className="font-medium">· {info.nome}:</span> {info.efeito}{" "}
                        <span className="text-muted-foreground">
                          {info.maestria ? `(requer ${info.maestria})` : "(não exige maestria)"}
                        </span>
                      </p>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="no-print mt-4 text-center text-[11px] text-muted-foreground">
            Marca de Sangue — ficha v0.13 ({rulesVersion === "vigente" ? "regras vigentes" : "regras alternativas"}).
            Os dados ficam só no seu navegador; use “Salvar” para baixar um arquivo e “Carregar” para retomá-lo.
          </p>
        </div>
      </main>
    </div>
  );
}
