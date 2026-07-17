# 🔍 Revisão completa do sistema-base (12/07/2026)

*Auditoria de consistência de todo o `sistema-base/` após o ciclo de rebalanceamento
(PA, dano em dados, armaduras, fadiga, traços, terminologia). Feita por 3 varreduras
cruzando cada arquivo com o estado atual das regras.*

## Veredito geral

O **núcleo conceitual está consistente**. Todos os números-chave conferem: PA inicial 10,
teto de locomoção 7 m, piso 3, ataques 2/4/6, fadiga −1 a cada 5 / inconsciência 50,
traços técnica/maestria/aspecto (especialização extinta), aptidão = rerrolagem, armaduras
−1/−2/−3, descansos. Terminologia padronizada (narrador, combate/embate, PV, exp.,
desabilitado, espaço, Ágil). Nenhum resíduo de "7 PA", "mestre", "carta", redutor 1–12.

## Corrigido nesta revisão

1. **`conflitos/02-acoes-em-conflito.md`** — a lista de custos de ataque estava na escala
   ANTIGA (média 3, "duas mãos" 4, pesada 4, "ataque duplo leve 3"). Corrigida para
   **leve 2 / média 4 / pesada 6** (desarmado 1), pelo peso.
2. **`conflitos/04-conflito-social.md`** — "ignorando os redutores de armadura" (resíduo
   do sistema antigo). Reescrito: no embate social **não se aplica o redutor de `PA` da
   armadura** (o peso não atrapalha um debate).
3. **`conceitos/00-indice.md`** — "Manual básico" → **"Manual base"**.
4. **`listas/equipamentos-base.md`** — armas improvisadas estavam com dano incoerente
   (média = pesada = 1d4, contra o texto "dano fixo baixo"). Padronizadas em **2 / 3 / 4
   fixo** (contundentes), coerente com a regra escrita.
5. **`criacao-de-personagem/01-passo-a-passo.md`** — passo a passo não citava valores de
   partida. Adicionados **PA inicial 10**, **PV 60 (10 por membro)** e a escolha da
   **mão hábil**.

## Fica para o grupo (decisão) — já em PENDENCIAS

- **Habilidades de custo fixo de PA** (~25 mapeadas) — rebalancear proporcionalmente à
  nova escala (fila).
- **Efeitos sobre o dano da arma** agora que é dado: "metade do dano" (Atordoar,
  Encontrão, Quebrar guarda) e "dobra o dano" (Emboscador) — definir a convenção.
- **Ações complexas** ainda em modelo vazio (`acoes-em-combate.md`): 14 sem descrição +
  "Derrubar" sem entrada; ao preencher, o campo "uso com especialização" deve virar
  **técnica** (categoria extinta).
- **Armas ⚠️**: lança montada (perfurante pesada, caiu de 10 → 1d8) e "Mangual pesado…"
  (nome contundente sem a propriedade `CONT.`).
- **Duplicações nas listas de ação** (Agarrar/Levantar em básicas e complexas) e demais
  itens da varredura de 12/07 — reconciliar a seção "consistência e redação" do PENDENCIAS
  (vários já resolvidos pelas mudanças recentes).
- **Esmagar** (habilidade física) com progressão quebrada.
- Calibrar no **playtest**: durabilidade/preço das armaduras por peça; números do
  rebalanceamento.

## Observação

A **variante em playtest** (`variantes/habilidades-por-fadiga/`) ainda cita os números
antigos (inconsciência 40, piso 4) — é esperado (ela é uma proposta paralela), mas convém
marcar que, se promovida, precisa herdar os números atuais.
