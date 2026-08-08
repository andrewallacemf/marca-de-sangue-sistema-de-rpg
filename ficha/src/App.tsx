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
  HelpCircle,
  BookOpen,
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
  cellsFromSaude,
  statusMembro,
  totalMembro,
  aplicarDano,
  curarDano,
  removerPermanente,
  expUsada,
  fadigaMaxima,
  fichaVazia,
  inconsciente,
  LS_KEY,
  MEMBROS,
  descansar,
  migrarFicha,
  novoItem,
  paArmaPrincipal,
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
  type TotalUsado,
} from "@/lib/ficha";
import { PROP_INFO } from "@/lib/catalogo";

/* ============================ Componentes auxiliares ============================ */

function penalidadeFadiga(f: Ficha): string {
  if (inconsciente(f)) return "inconsciente";
  const p = penalidadeFadigaNum(f.fadiga);
  return p > 0 ? `−${p} PA` : "sem penalidade";
}

function DamageCell({
  state,
  onClick,
  onDoubleClick,
}: {
  state: number;
  onClick?: () => void;
  onDoubleClick?: () => void;
}) {
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
      onDoubleClick={onDoubleClick}
      // célula ■ não tem onClick; Enter/Space abrem a mesma confirmação do
      // clique duplo (senão a remoção fica inacessível por teclado)
      onKeyDown={
        state === 3 && onDoubleClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onDoubleClick();
              }
            }
          : undefined
      }
      className={cn(
        "h-5 w-5 shrink-0 rounded-[3px] border border-input text-[10px] font-bold leading-none",
        "flex items-center justify-center transition-colors",
        styles[state]
      )}
      title={
        state === 3
          ? "permanente — clique duplo (ou Enter) remove, com confirmação"
          : ["vazio", "superficial", "profundo", "permanente"][state]
      }
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
  const [ficha, setFicha] = useState<Ficha>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // `rulesVersion` de saves antigos é ignorado — a regra atual é única
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
        JSON.stringify({ app: "marca-de-sangue-ficha", schemaVersion: SCHEMA_VERSION, data: ficha })
      );
    } catch {
      /* ignora */
    }
  }, [ficha]);

  function update<K extends keyof Ficha>(key: K, value: Ficha[K]) {
    setFicha((f) => ({ ...f, [key]: value }));
  }

  const [ajuda, setAjuda] = useState(false);

  function salvar() {
    const payload = {
      app: "marca-de-sangue-ficha",
      schemaVersion: SCHEMA_VERSION,
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
        // arquivos antigos podem trazer `rulesVersion` — a leitura tolera e ignora
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
    if (confirm("Descanso: recupera todas as aptidões e zera a fadiga. Continuar?")) {
      setFicha((f) => descansar(f));
    }
  }

  const habCards = ficha.caracteristicas.filter((c) => c.tipo === "Habilidade" && c.nome.trim());

  // valores calculados automaticamente (campos travados)
  const expUsadaCalc = expUsada(ficha);
  const expTotalNum = parseNum(ficha.exp.baseTotal);
  const expExcedida = expTotalNum > 0 && expUsadaCalc > expTotalNum;
  const paTotalCalc = paTotalComp(ficha);
  const redArmaduraCalc = redArmaduraComp(ficha);
  const redFadigaCalc = penalidadeFadigaNum(ficha.fadiga);
  const fadigaMax = fadigaMaxima(ficha);
  const inconsc = inconsciente(ficha);

  // maestrias que o personagem possui (por traço comprado), para indicar nas armas
  const maestriasSet = new Set(
    ficha.caracteristicas.filter((c) => c.nome.trim()).map((c) => c.nome.trim().toLowerCase())
  );
  const temMaestria = (p: (typeof PROP_KEYS)[number]) => {
    const m = PROP_INFO[p].maestria;
    return m ? maestriasSet.has(m.toLowerCase()) : false;
  };
  const paArma = paArmaPrincipal(ficha);
  const usarFadiga = (qtd: number) =>
    setFicha((f) => ({
      ...f,
      fadiga: Math.min(fadigaMaxima(f), f.fadiga + Math.max(0, Math.round(qtd))),
    }));
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
      <span className="ph-marca">Marca de Sangue · Ficha</span>
    </div>
  );

  return (
    <div className={cn("min-h-screen pb-16", a4 && "a4-preview bg-muted")}>
      <header className="no-print sticky top-0 z-10 border-b bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-2">
          <span className="mr-1 text-sm font-semibold tracking-wide text-primary">
            Marca de Sangue <span className="text-muted-foreground">· Ficha</span>
          </span>
          <div className="ml-auto flex flex-wrap items-center gap-1.5">
            <Button variant="outline" size="sm" asChild title="Abrir o manual do sistema">
              <a href="https://andrewallacemf.github.io/marca-de-sangue-sistema-de-rpg/" target="_self">
                <BookOpen className="h-3.5 w-3.5" /> Manual
              </a>
            </Button>
            <Button variant="outline" size="sm" onClick={() => setAjuda(true)} title="Como usar a ficha">
              <HelpCircle className="h-3.5 w-3.5" /> Como usar
            </Button>
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
            <Button variant="outline" size="sm" onClick={descanso} title="Recupera as aptidões e zera a fadiga">
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

      {ajuda && (
        <div
          className="no-print fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4"
          onClick={() => setAjuda(false)}
        >
          <div
            className="my-8 w-full max-w-2xl rounded-lg border bg-card p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-primary">Como usar a ficha</h2>
              <Button variant="outline" size="sm" onClick={() => setAjuda(false)}>Fechar</Button>
            </div>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                A ficha é <strong>digital e offline</strong>: você preenche os campos e os cálculos
                (PA, saúde, experiência) saem sozinhos. <strong>Os dados ficam só no seu navegador</strong> —
                para guardar o personagem, use <strong>Salvar</strong>.
              </p>
              <div>
                <p className="font-semibold">Os botões do topo</p>
                <ul className="ml-4 list-disc space-y-1">
                  <li><strong>Salvar</strong> — baixa um arquivo <code>.mds.json</code>: esse arquivo <em>é</em> o seu personagem. Guarde-o (Drive, pen-drive…).</li>
                  <li><strong>Carregar</strong> — abre um <code>.mds.json</code> salvo antes, para continuar de onde parou.</li>
                  <li><strong>Nova</strong> — começa uma ficha em branco.</li>
                  <li><strong>Descanso</strong> — recupera as aptidões e zera a fadiga.</li>
                  <li><strong>A4 / Imprimir</strong> — visão e impressão em papel.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Durante o jogo</p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Marque o <strong>dano</strong> clicando nos quadradinhos de cada membro; a <strong>fadiga</strong> acompanha o dano.</li>
                  <li>Risque as <strong>aptidões</strong> conforme gasta; usar <strong>habilidade</strong> soma fadiga (botão “Usar” no card); o <strong>Descanso</strong> recupera.</li>
                  <li>Escreva armas e itens no campo próprio — ao escolher do catálogo, o dano/PA vêm preenchidos.</li>
                </ul>
              </div>
              <p className="rounded-md bg-muted p-2">
                💾 <strong>Salve com frequência.</strong> Não há salvamento automático nem “desfazer”:
                o que vale é o último arquivo <code>.mds.json</code> que você baixou.
              </p>
            </div>
          </div>
        </div>
      )}

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
                    title="penalidade automática pela fadiga acumulada (−1 PA a cada 10 de fadiga)"
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
                    resumo automático dos cards (nível)
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
                    clique soma dano (gera 1 fadiga/ponto); − cura só o dano comum. Enche (10) → profundo/incapacitado ✕; além → permanente ■, que não sai com cura — clique duplo em ■ remove (com confirmação). O nº é o d6 do ataque descuidado.
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {MEMBROS.map((m) => {
                  const saude = ficha.saude[m.key];
                  const cells = cellsFromSaude(saude);
                  const status = statusMembro(saude);
                  const removerComConfirmacao = () => {
                    if (
                      confirm(
                        `Remover 1 dano permanente de ${m.label}? Dano permanente não volta por meios convencionais — use só para corrigir marcação errada ou por efeito extraordinário do cenário.`
                      )
                    ) {
                      setFicha((f) => removerPermanente(f, m.key));
                    }
                  };
                  return (
                    <div key={m.key} className="flex flex-col gap-1 rounded-md border p-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-medium">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent text-[10px] font-bold text-accent-foreground">
                            {m.d6}
                          </span>
                          {m.label}
                        </span>
                        <span className="flex items-center gap-1">
                          {status && (
                            <span
                              className={cn(
                                "text-[9px] font-semibold uppercase",
                                saude.permanente >= 10
                                  ? "text-destructive"
                                  : totalMembro(saude) >= 10
                                    ? "text-primary"
                                    : "text-muted-foreground"
                              )}
                            >
                              {status}
                            </span>
                          )}
                          <button
                            type="button"
                            className="no-print flex h-5 w-5 items-center justify-center rounded border text-xs text-muted-foreground hover:bg-secondary"
                            title="Curar 1 (não remove permanente nem fadiga)"
                            onClick={() => setFicha((f) => curarDano(f, m.key))}
                          >
                            −
                          </button>
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-0.5">
                        {cells.map((st, ci) => (
                          <DamageCell
                            key={ci}
                            state={st}
                            onClick={st === 3 ? undefined : () => setFicha((f) => aplicarDano(f, m.key))}
                            onDoubleClick={st === 3 ? removerComConfirmacao : undefined}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Fadiga — destaque, perto da Saúde */}
            <Card className="area-fad">
              <CardHeader>
                <CardTitle className="flex items-center gap-1.5">
                  <BatteryLow className="h-4 w-4" /> Fadiga
                  <span className="ml-2 text-[11px] font-normal normal-case text-muted-foreground">
                    −1 PA a cada 10; máximo = total de PV (permanentes reduzem); no máximo = inconsciente
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="text-3xl font-bold leading-none text-primary">{ficha.fadiga}</span>
                  <span className="text-sm text-muted-foreground">
                    / {fadigaMax} · {penalidadeFadiga(ficha)}
                  </span>
                  <span className="no-print ml-auto text-[11px] text-muted-foreground">
                    zera no “Descanso” (topo)
                  </span>
                </div>
                {/* 6 fileiras de 10 (60 casas), separação a cada 5 e rótulo no fim da fileira;
                    casas acima do máximo atual (permanentes reduzem) ficam riscadas/desabilitadas */}
                <div className="flex flex-col gap-1">
                  {[0, 1, 2, 3, 4, 5].map((linha) => (
                    <div key={linha} className="flex items-center gap-1">
                      {Array.from({ length: 10 }, (_, k) => linha * 10 + k + 1).map((n) => {
                        const filled = n <= ficha.fadiga;
                        const indisponivel = n > fadigaMax;
                        return (
                          <button
                            key={n}
                            type="button"
                            disabled={indisponivel}
                            onClick={() => update("fadiga", ficha.fadiga === n ? n - 1 : n)}
                            title={indisponivel ? `${n} — acima do máximo atual (${fadigaMax})` : `${n}`}
                            className={cn(
                              "flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] text-[8px] leading-none",
                              n % 5 === 0 && n % 10 !== 0 && "mr-1.5",
                              indisponivel
                                ? "cursor-not-allowed border-dashed text-muted-foreground/50 opacity-40"
                                : filled
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-transparent hover:bg-secondary",
                              "border border-input"
                            )}
                          >
                            {indisponivel ? "✕" : ""}
                          </button>
                        );
                      })}
                      <span className="ml-0.5 w-5 text-right font-mono text-[9px] text-muted-foreground">
                        {(linha + 1) * 10}
                      </span>
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
              paArma={paArma}
              onUsarFadiga={usarFadiga}
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
            Marca de Sangue — ficha v0.17.
            Os dados ficam só no seu navegador; use “Salvar” para baixar um arquivo e “Carregar” para retomá-lo.
          </p>
        </div>
      </main>
    </div>
  );
}
