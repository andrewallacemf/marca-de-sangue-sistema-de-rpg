---
data: 2026-08-04
tipo: decisao
status: aprovada
tema: [saude, dano, membros, cura, protecoes]
proposto-por: andre
---

# Saúde simplificada e maior redutor de proteção

## Contexto

O modelo anterior usava dano superficial e profundo, embora ambos fossem armazenados como
um único valor curável. Isso criava regras adicionais de tratamento e deterioração sem uma
representação independente na ficha. Também havia divergência entre textos que proibiam
somar proteções e a implementação da plataforma, que somava redutores sobrepostos.

## Decisão

- O sistema usa somente **dano curável** e **dano permanente**.
- O preenchimento total de um membro representa sua incapacitação, não um tipo de dano
  chamado profundo.
- A deterioração automática por falta de tratamento deixa de existir.
- Personagens de jogador possuem 10 PV em cada um dos seis membros. Regras específicas de
  ameaças podem declarar outros valores.
- Um membro desabilitado impede apenas ações que dependem dele.
- Em defesa Física bem-sucedida, o dano é rolado, dividido por dois, reduzido pela maior
  proteção da região e limitado ao mínimo de 1.
- Redutores de dano sobrepostos não se somam: vale apenas o maior. Redutores de PA se somam.
- Cura improvisada custa 4 PA; Técnica em Tratar/Curar remove somente a desvantagem por falta
  de material.

## Consequências

Os textos oficiais, habilidades, cenários e a plataforma devem falar em dano curável. A
decisão de schema de 24/07/2026 continua válida quanto à separação entre os campos `dano` e
`permanente`, mas sua leitura em “superficial” e “profundo” foi superada por esta decisão.
O módulo de magia precisa recalibrar efeitos que usavam dano profundo como custo intermediário.
