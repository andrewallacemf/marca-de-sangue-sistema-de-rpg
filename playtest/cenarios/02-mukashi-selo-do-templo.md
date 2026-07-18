# Cenário 2 — O Selo do Templo

**Ambientação:** Mukashi (fantasia medieval japonesa) · **Fichas:** 30 exp · **Jogadores:** 4 · **Missão:** pegar algo e sair

> ♻️ **Fichas rebalanceadas (playtest 1 → custo escalonado).** Carregue os `.mds.json`
> (`fichas-salvas/`); os blocos em prosa abaixo são referência e podem diferir.
> ⚙️ **Regras novas:** sair do engajamento provoca AoO (desengajar 1 PA + 1/inimigo);
> todo dano gera 1 fadiga/ponto; membro enche em 10 → profundo. **HP de minion:** fraco 10 ·
> médio 20 · forte 30 (dano total). Sentinelas = **médio (20)**; Capitão = **forte (30)**.

## Situação (para o narrador)

O **Selo de Jade** foi roubado do clã e está guardado no santuário de um templo de
montanha. O grupo entra à noite, pega o selo e sai — de preferência sem acordar toda a
guarnição. Aqui a malha serve para **posicionamento e furtividade**, não (só) para
combate: linhas de visão, aproximação pelas costas e emboscadas.

## A malha

Templo de **12 × 10 espaços**, dividido em quatro áreas ligadas por portas (1 espaço de
largura cada):

```
[ENTRADA]───corredor───[SALA DOS SINOS]
    │                        │
[JARDIM]──────────────[SANTUÁRIO: ★ Selo]───[SAÍDA DOS FUNDOS]
```

- **Guardas patrulham** (posições e rotas abaixo). Cada guarda tem **frente e costas**
  (3 espaços de cada, na malha hexagonal): só percebe quem está na sua frente/alcance.
- **Terreno:** o Jardim tem lago (terreno difícil) e moitas (dá para se esconder). A Sala
  dos Sinos tem um **gongo** — se um combate estourar ali, sobe o alarme.

## Alarme

Use um marcador de **0 a 4**. Sobe 1 cada vez que um guarda vê um infiltrado e sobrevive
ao turno, ou se o gongo toca. Ao chegar a **4**, **todos os guardas restantes convergem
para o santuário** — vira corrida para a saída.

## Inimigos

- 3 **Sentinelas** — PA 10 · naginata curta (média, perfurante 1d6, 4 PA) · patrulham
  Entrada, Sala dos Sinos e Jardim (uma cada).
- 1 **Capitão da Guarda** — PA 10 · katana (média, cortante 1d8 / perfurante 1d6,
  versátil, 4 PA) · peitoral leve (−1) · fica no Santuário, ao lado do selo.

**Tática:** guardas isolados são presa fácil para emboscada pelas costas. Se o alarme
subir, eles se agrupam — e aí o grupo precisa decidir entre lutar ou correr para a saída
dos fundos com o selo.

## Objetivo

- **Vitória:** pegar o Selo de Jade (no santuário) e sair pela saída dos fundos com ele.
- **Vitória superior (bônus de teste):** sair com o alarme em 2 ou menos.
- **Derrota:** todos os personagens incapacitados, ou o Capitão fugir do templo com o selo.

## Dica de teste

Veja se **esconder-se**, posicionamento (costas) e as habilidades de emboscada
(Emboscador, Golpe surpresa) recompensam o planejamento. Meça se derrubar um guarda de
uma vez, pelas costas, é possível e satisfatório.

---

## Ficha 1 — KAEDE, a Shinobi

*Sombra. Elimina guardas isolados com um golpe.*

- **Mão hábil:** direita · **PA por turno:** **10** · **PV:** 60 (10 por membro)
- **Armas:** Kunai (leve · cortante/perfurante `1d4` · arremesso · 2 PA) · Shuriken (leve · arremesso `1d4`)
- **Proteção:** nenhuma (furtividade)

**Características (30 exp):**

- Técnica em Esconder-se (1) · Técnica em Realizar truques (1) · Técnica em Saltar (1)
- Maestria em armas cortantes (1)
- Emboscador (4) — pelas costas, escondido, arma leve: **dobra o dano total**
- Golpe surpresa — nível 3 (6) — **+1d8** de dano extra ao atacar escondido
- Ataques múltiplos & leves — nível 2 (2)
- Saltador (3) — salta até 10 m
- Aptidão Ágil ×9 (9) · Aptidão Física ×2 (2)

**Como jogar:** você é a faca no escuro. Aproxime-se de um guarda **pelas costas** e
escondida: **Emboscador** dobra o dano e **Golpe surpresa** soma +1d8 — o suficiente para
derrubar uma sentinela num golpe. Use Saltar para vencer muros e o lago. Não seja vista:
seu forte é o primeiro golpe.

---

## Ficha 2 — TAKESHI, o Ronin

*Espadachim versátil. Resolve o que a furtividade não resolveu.*

- **Mão hábil:** direita · **PA por turno:** **9** (10 −1 peitoral) · **PV:** 60 (10 por membro)
- **Armas:** Katana (média · cortante `1d8` / perfurante `1d6` · versátil, +`1d4` a duas mãos · longo alcance 1–2 m · 4 PA)
- **Proteção:** Peitoral leve (−1 dano no tronco)

**Características (30 exp):**

- Maestria em armas cortantes (1) · Maestria em armas perfurantes (1) · Maestria em armas versáteis (1) · Maestria em armaduras leves (1)
- Ataques múltiplos & médios — nível 2 (4)
- Investida — nível 2 (6)
- Reativo (4) — ataque de oportunidade quando o alvo sai do alcance
- Lépido (3) — recua 1 m após acertar (arma de longo alcance)
- Técnica em Ponderar (1)
- Aptidão Física ×8 (8)

**Como jogar:** a katana a duas mãos ganha +1d4; **alterne cortante/perfurante** conforme
a defesa do alvo (maestria nos dois). **Investida** fura o engajamento do Capitão.
**Lépido** deixa você bater e recuar 1 m — ótimo para não ficar cercado. Quando o plano
furtivo falha, você segura a linha.

---

## Ficha 3 — HARUKO, a Curandeira

*Suporte de sombra: mantém o time inteiro e acelera a shinobi.*

- **Mão hábil:** direita · **PA por turno:** **10** · **PV:** 60 (10 por membro)
- **Armas:** Bastão médio (média · contundente `2d4` · versátil · 4 PA)
- **Proteção:** nenhuma

**Características (30 exp):**

- Técnica em Tratar/Curar (3) · Técnica em Ponderar (1)
- Cura especializada — nível 2 (6)
- Animar — nível 1 (2) — recupera aptidões de um aliado adjacente
- Brado de guerra — nível 2 (6) — vantagem no próximo ataque de até 2 aliados
- Comandar — nível 2 (4) — transfere até 3 PA a um aliado
- Aptidão Social ×6 (6) · Aptidão Mental ×2 (2)

**Como jogar:** fique atrás. **Comandar** dá PA à Kaede para ela agir mais numa janela
crítica; **Brado de guerra** garante o acerto do golpe de emboscada. Cure fora e dentro do
combate. **Animar** recarrega as aptidões da shinobi entre as eliminações.

---

## Ficha 4 — JIRO, o Arqueiro Yumi

*Olhos e cobertura à distância.*

- **Mão hábil:** direita · **PA por turno:** **10** · **PV:** 60 (10 por membro)
- **Armas:** Arco composto (média · 4 PA · alcance 7–10 m · flecha ponta de ferro `1d4`) · Adaga (reserva)
- **Proteção:** nenhuma

**Características (30 exp):**

- Maestria em projéteis (1)
- Ataques à distância concentrados — nível 3 (6)
- Alcance à distância — nível 2 (4)
- Técnica em Esconder-se (1) · Técnica em Investigar/Observar (1)
- Analisar fraquezas — nível 2 (2)
- Aptidão Ágil ×12 (12) · Aptidão Mental ×3 (3)

**Como jogar:** posicione-se com linha de visão para os corredores. **Projéteis** ignora
barreiras — você atira por aberturas e portas. **Analisar fraquezas** revela onde o alvo
já está ferido para você mirar. Fique escondido; sua flecha é o plano B quando um guarda
escapa da Kaede.
