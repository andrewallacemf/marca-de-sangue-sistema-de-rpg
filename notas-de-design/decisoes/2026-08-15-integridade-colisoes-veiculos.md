---
data: 2026-08-15
tipo: decisao
status: aprovada
tema: [veiculos, categorias, integridade, colisao, condicoes, cobertura, manual]
proposto-por: andre
---

# Categorias, integridade, colisões e cobertura de Veículos

## Contexto

Os valores de categoria e as cinco partes externas tinham sido criados para preencher lacunas do
Alpha do Colapso. O modelo também tratava colisão de forma assimétrica, criava dano ao arredondar o
transbordamento e concedia cobertura automática até a ocupantes de motos e postos expostos.

## Decisões

- Os valores atuais de Sem motor e A–E ficam oficiais.
- As partes são Frente, Traseira, Lateral esquerda, Lateral direita, Locomoção e Propulsor.
  Cenários podem usar nomes próprios sem alterar os efeitos.
- Parte externa zerada deixa de absorver dano. Locomoção ou Propulsor zerado impede acelerar e
  deixa o veículo Desgovernado; Propulsor zerado também desativa equipamentos dependentes dele.
- Cada veículo envolvido numa colisão sofre sua própria rolagem da matriz.
- Obstáculos fixos recebem do narrador uma categoria equivalente para servir como coluna da matriz.
- A velocidade de impacto é a diferença no mesmo sentido, a soma em sentidos opostos e a maior
  velocidade em cruzamentos laterais ou obstáculos. Toda colisão usa no mínimo 10 m/t.
- Cada 10 m/t além dos primeiros 10 acrescenta um dado do mesmo tipo ou +1 no dano fixo. Não há
  multiplicador frontal adicional.
- O dano atinge a parte voltada ao impacto e reduz a velocidade de cada veículo à metade.
- Transbordamento aos ocupantes é dividido sem criar pontos por arredondamento. A cobertura não se
  aplica, mas a proteção corporal funciona normalmente.
- Pessoa atropelada usa a linha Sem motor, recebe dano direto num membro e normalmente não causa
  dano de retorno.
- As condições recebem nomes mecânicos genéricos. O Colapso preserva termos automotivos como
  vocabulário próprio.
- Cada assento é fechado ou exposto. Apenas o fechado concede meia cobertura passiva; equipamentos
  expostos e partes zeradas podem suspender o benefício.

## Impacto

- As pendências de valores-base e cobertura ficam encerradas.
- Categorias e partes passam a `proposta: false` no contrato. Equipamentos, habilidades e traços
  continuam como proposta até suas próprias curadorias.
- O campo JSON `motor` é preservado como compatibilidade para o valor do Propulsor. A plataforma
  consome somente categorias e não exige schema ou migration; um seed futuro atualizará o estado.
- A ficha offline não possui conflito veicular e não ficou defasada.

## Confirmação

Aprovada por André em 15/08/2026.
