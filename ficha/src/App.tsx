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
} from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Field,
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
  fichaVazia,
  LS_KEY,
  MEMBROS,
  migrarFicha,
  SCHEMA_VERSION,
  type Ficha,
  type RulesVersion,
  type TotalUsado,
} from "@/lib/ficha";

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

  const habCards = ficha.caracteristicas.filter((c) => c.tipo === "Habilidade" && c.nome.trim());

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
          <div className="print-header">
            <span className="ph-nome">{ficha.info.nome || "Personagem sem nome"}</span>
            <span className="ph-marca">
              Marca de Sangue · Ficha {rulesVersion === "vigente" ? "(regras vigentes)" : "(regras alternativas)"}
            </span>
          </div>
          <div className="sheet-grid grid grid-cols-1 gap-3 lg:grid-cols-3">
            {/* Informações */}
            <Card className="col-full lg:col-span-2">
              <CardHeader>
                <CardTitle>Informações</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Field label="Nome do personagem" className="col-span-2">
                  <Input value={ficha.info.nome} onChange={(e) => update("info", { ...ficha.info, nome: e.target.value })} />
                </Field>
                <Field label="Jogador">
                  <Input value={ficha.info.jogador} onChange={(e) => update("info", { ...ficha.info, jogador: e.target.value })} />
                </Field>
                <Field label="Cenário">
                  <Input value={ficha.info.cenario} onChange={(e) => update("info", { ...ficha.info, cenario: e.target.value })} />
                </Field>
                <Field label="Última sessão" className="col-span-2 sm:col-span-1">
                  <Input value={ficha.info.ultimaSessao} onChange={(e) => update("info", { ...ficha.info, ultimaSessao: e.target.value })} />
                </Field>
              </CardContent>
            </Card>

            {/* Experiência */}
            <Card>
              <CardHeader>
                <CardTitle>Experiência & características</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2">
                  <Field label="Exp. base — total">
                    <Input value={ficha.exp.baseTotal} onChange={(e) => update("exp", { ...ficha.exp, baseTotal: e.target.value })} />
                  </Field>
                  <Field label="Exp. base — usada">
                    <Input value={ficha.exp.baseUsada} onChange={(e) => update("exp", { ...ficha.exp, baseUsada: e.target.value })} />
                  </Field>
                </div>
                <div>
                  <Label className="mb-1 block">Características compradas</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Field label="Aptidões">
                      <Input value={ficha.exp.qtdAptidoes} onChange={(e) => update("exp", { ...ficha.exp, qtdAptidoes: e.target.value })} />
                    </Field>
                    <Field label="Habilidades">
                      <Input value={ficha.exp.qtdHabilidades} onChange={(e) => update("exp", { ...ficha.exp, qtdHabilidades: e.target.value })} />
                    </Field>
                    <Field label="Traços">
                      <Input value={ficha.exp.qtdTracos} onChange={(e) => update("exp", { ...ficha.exp, qtdTracos: e.target.value })} />
                    </Field>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aptidões */}
            <Card>
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
            <Card>
              <CardHeader>
                <CardTitle>Pontos de ação (P.A.)</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-2">
                <Field label="PA base">
                  <Input className="text-center" value={ficha.pa.base} onChange={(e) => update("pa", { ...ficha.pa, base: e.target.value })} />
                </Field>
                <Field label="Red. armadura">
                  <Input className="text-center" value={ficha.pa.redArmadura} onChange={(e) => update("pa", { ...ficha.pa, redArmadura: e.target.value })} />
                </Field>
                <Field label="Red. por dano">
                  <Input className="text-center" value={ficha.pa.redDano} onChange={(e) => update("pa", { ...ficha.pa, redDano: e.target.value })} />
                </Field>
                <Field label="Red. carga">
                  <Input className="text-center" value={ficha.pa.redCarga} onChange={(e) => update("pa", { ...ficha.pa, redCarga: e.target.value })} />
                </Field>
                <Field label="Outros modif.">
                  <Input className="text-center" value={ficha.pa.outros} onChange={(e) => update("pa", { ...ficha.pa, outros: e.target.value })} />
                </Field>
                <Field label="PA TOTAL">
                  <Input className="text-center font-semibold" value={ficha.pa.total} onChange={(e) => update("pa", { ...ficha.pa, total: e.target.value })} />
                </Field>
              </CardContent>
            </Card>

            {/* Guardas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4" /> Guardas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label>Guardas levantadas</Label>
                <div className="mt-1 flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="no-print"
                    onClick={() => update("guardas", String(Math.max(0, (parseInt(ficha.guardas, 10) || 0) - 1)))}
                  >
                    −
                  </Button>
                  <Input
                    className="w-16 text-center text-lg font-semibold"
                    inputMode="numeric"
                    value={ficha.guardas}
                    onChange={(e) => update("guardas", e.target.value)}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="no-print"
                    onClick={() => update("guardas", String((parseInt(ficha.guardas, 10) || 0) + 1))}
                  >
                    +
                  </Button>
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  Abaixe conforme recebe ataques, até chegar a zero.
                </p>
              </CardContent>
            </Card>

            {/* Habilidades — referência rápida (resumo automático dos cards) */}
            <Card className="col-full lg:col-span-3">
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
            <ArmasSection armas={ficha.armas} setArmas={(v) => update("armas", v)} />

            {/* Proteções (dinâmicas, com regiões cobertas) */}
            <ProtecoesSection protecoes={ficha.protecoes} setProtecoes={(v) => update("protecoes", v)} />

            {/* Saúde */}
            <Card className="col-full lg:col-span-3">
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
                    <span className="flex items-center gap-1.5 text-sm font-medium">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-accent text-[10px] font-bold text-accent-foreground">
                        {m.d6}
                      </span>
                      {m.label}
                    </span>
                    <div className="flex gap-0.5">
                      {ficha.saude[m.key].map((st, ci) => (
                        <DamageCell
                          key={ci}
                          state={st}
                          onClick={() => {
                            const saude = { ...ficha.saude };
                            const arr = [...saude[m.key]];
                            arr[ci] = (arr[ci] + 1) % 4;
                            saude[m.key] = arr;
                            update("saude", saude);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Fadiga — destaque, perto da Saúde */}
            <Card className="col-full lg:col-span-3">
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
                  <button
                    type="button"
                    className="no-print ml-auto rounded-md border px-2 py-1 text-xs text-muted-foreground hover:bg-secondary"
                    onClick={() => update("fadiga", 0)}
                  >
                    zerar (descanso)
                  </button>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {[0, 1, 2, 3, 4].map((dec) => (
                    <div key={dec} className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-1">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((a) => {
                          const n = dec * 10 + a + 1;
                          const filled = n <= ficha.fadiga;
                          return (
                            <span key={a} className="flex">
                              {a === 5 && <span className="w-2" />}
                              <button
                                type="button"
                                onClick={() => update("fadiga", ficha.fadiga === n ? n - 1 : n)}
                                title={`${n}`}
                                className={cn(
                                  "h-6 w-6 rounded-[3px] border text-[9px] leading-none",
                                  filled ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-secondary",
                                  n % 5 === 0 && "border-accent"
                                )}
                              />
                            </span>
                          );
                        })}
                      </div>
                      <span className="text-[11px] font-semibold text-muted-foreground">{dec * 10 + 10}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Equipamentos / carga / tesouro */}
            <EquipamentosSection
              equipamentos={ficha.equipamentos}
              setEquipamentos={(v) => update("equipamentos", v)}
              carga={ficha.carga}
              setCarga={(v) => update("carga", v)}
              tesouro={ficha.tesouro}
              setTesouro={(v) => update("tesouro", v)}
            />

            {/* Anotações */}
            <Card className="col-full lg:col-span-1">
              <CardHeader>
                <CardTitle>Anotações</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea className="min-h-[160px]" value={ficha.anotacoes} onChange={(e) => update("anotacoes", e.target.value)} />
              </CardContent>
            </Card>

            {/* Habilidades & traços detalhados */}
            <CaracteristicasSection
              itens={ficha.caracteristicas}
              setItens={(v) => update("caracteristicas", v)}
              rulesVersion={rulesVersion}
            />
          </div>

          <p className="mt-4 text-center text-[11px] text-muted-foreground">
            Marca de Sangue — ficha v0.6 ({rulesVersion === "vigente" ? "regras vigentes" : "regras alternativas"}).
            Os dados ficam só no seu navegador; use “Salvar” para baixar um arquivo e “Carregar” para retomá-lo.
          </p>
        </div>
      </main>
    </div>
  );
}
