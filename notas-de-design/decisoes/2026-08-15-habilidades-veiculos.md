---
data: 2026-08-15
tipo: decisao
status: aprovada
tema: [veiculos, habilidades, pa, fadiga, progressao, contrato]
proposto-por: andre
---

# Habilidades de Veículos

## Contexto

As 19 habilidades herdadas do Alpha usavam custos anteriores ao orçamento de 10 PA, reduções de
até 10 PA e nomes ligados a automóveis. Co-piloto criava PA, algumas entradas cobravam um adicional
acima do padrão das habilidades de ataque e Carburador furado dependia da ficção do Colapso.

## Decisões

- As 19 entradas do módulo são oficiais e usam o modelo vigente: cada nível custa novamente o
  custo-base, portanto o total investido é custo-base × nível atual; cada ativação paga o custo
  total em PA e a mesma quantidade de fadiga; reduções têm piso de 1 PA.
- Habilidades não podem ser combinadas na mesma ação, inclusive quando o bônus foi concedido por
  outra habilidade.
- Nomes e efeitos passam a funcionar com qualquer veículo. Cenários podem oferecer nomes próprios
  sem duplicar entradas no catálogo.
- Investida, Invasor, Arrancada e Impulso formam o grupo Ágil; Mira em movimento, Ataque
  estabilizado, Curva fechada, Atingir locomoção, Golpe de passagem e Tomar os controles, o Físico.
- Controles improvisados, Desmontar em combate, Reparo emergencial, Reparação avançada, Recuo
  controlado e Sabotar formam o grupo Mental; Coordenar ataque, Distrair condutor e Coordenar
  manobra, o Social.
- Co-piloto deixa de transferir/criar PA e vira Coordenar manobra. Sabotar passa de Social para
  Mental. Carburador furado volta ao Colapso, onde combustível e fumaça são pressupostos.
- Marcha à ré entra na ação básica: é iniciada a partir de 0 m/t e fica limitada a 10 m/t sem
  Recuo controlado; inverter novamente o sentido exige parar.

## Impacto

- As habilidades passam a `proposta: false` no contrato. Os traços continuam em curadoria.
- A plataforma atualmente ignora `veiculos.habilidades`. Publicação estruturada exigirá análise de
  persistência, seed, router, custos variáveis e compatibilidade dos nomes anteriores; nenhum schema,
  migration, seed ou banco foi alterado nesta decisão.
- Carburador furado fica no conteúdo do Colapso e não entra no catálogo genérico de Veículos.

## Confirmação

Aprovada por André em 15/08/2026.
