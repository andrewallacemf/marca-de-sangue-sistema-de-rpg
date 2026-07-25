---
data: 2026-07-25
pessoa: bianca
ferramenta: claude-cowork
objetivo: criar a regra de proteção do tripulante em veículos do Colapso reaproveitando a mecânica de Cobertura, com um campo de item que marca quais equipamentos expõem o personagem
arquivos-alterados:
  - cenarios/colapso/mecanicas-unicas/veiculos.md
  - cenarios/colapso/mecanicas-unicas/equipamentos-de-veiculo.md
  - INDICE.md
  - PENDENCIAS.md
---

# Sessão: cobertura do tripulante em veículos (Colapso)

## Prompts dados

> "Você vai editar a documentação do Marca de Sangue... leia os arquivos AGENTS.md e CONVENCOES.md
> na raiz e siga-os à risca. Não invente regras nem lore... Faça mudanças pequenas e me mostre o
> que pretende alterar antes de mexer em muitos arquivos. Ao final, crie o registro da sessão em
> registro-ia/..." (prompt padrão de início de sessão)

> "preciso criar uma mecânica variante de acerto a personagens durante conflitos em veículos em
> movimento. Nessa variante, todo teste de acerto que mira um personagem que está em um veículo em
> movimento é jogado com desvantagem, em qualquer parte do corpo." (ideia inicial)

> "Desconsidere que todo acerto em personagens tem desvantagem. Pensei melhor em otimizar e
> aproveitar mecânicas já existentes. Certos módulos de veículo fornecem meia cobertura. Fornecer
> ou não meia cobertura é uma das características do módulo... É necessária inclusive uma
> atualização nos itens, que agora deve ter um campo para dizer se fornece ou não meia cobertura.
> Ex.: fornecem — assentos, escudos, gancho; não fornecem — suporte para arma montada, aparato
> para invasão." (mudança de abordagem — a que foi implementada)

> Decisões de refinamento: o banco sozinho já dá cobertura e alguns módulos exigem exposição para
> operar; campo de item pela maneira que funcionam no veículo; sem precisar levantar guarda (só o
> benefício da meia cobertura em ~70% dos casos); campo na tabela de equipamentos-de-veiculo;
> aprovadas as sugestões da tabela; simplificar de três estados (Sim/Não/—) para binário Sim/Não;
> e adicionar aos Escudos o efeito de conceder meia cobertura a quem opera estação exposta.

## O que foi feito

Descartada a ideia inicial (desvantagem universal de acerto) em favor de reaproveitar a mecânica
de **Cobertura** já canônica no sistema-base — que inclusive já cita "veículos" como exemplo de
cobertura. Antes de editar, foi feita a **análise de impacto** (protocolo do AGENTS.md): mapeados
ataque mirado, cobertura, habilidades do cenário (Atirador de elite/montado, Atenção difusa, Golpe
extravagante), colisão e dano transbordado.

Em `veiculos.md`, nova seção **"Cobertura do tripulante"**: ocupar um espaço do veículo concede
**meia cobertura** (`+1d10` na defesa contra ataques à distância), passiva (sem guarda, não
cancelada pelo movimento). Só vale contra ataques à distância; corpo a corpo, colisão e dano
transbordado ignoram; Projéteis/Maestria em projéteis furam. Em `equipamentos-de-veiculo.md`,
adicionado o **campo Cobertura** (Sim/Não) às duas tabelas — "Não" só nas estações que expõem
(suporte de arma montada, aparato de invasão, âncora) — e o efeito extra dos **Escudos** (dão meia
cobertura a quem opera estação exposta). INDICE e PENDENCIAS atualizados.

## Decisões tomadas

- Abordagem final: **reaproveitar Cobertura** em vez de criar desvantagem nova de acerto.
- Meia cobertura do veículo é **passiva** (não exige guarda levantada e o movimento do veículo não
  a cancela). Escopo só **meia cobertura** por ora (sem posições de cobertura completa).
- Campo de item **binário Sim/Não**: Sim = mantém a cobertura do veículo; Não = expõe enquanto
  opera. Só expõem: suporte para arma montada, aparato para invasão, âncora.
- **Escudos** passam a conceder meia cobertura a quem opera uma estação exposta.
- `contrato/catalogo.json` não é afetado (equipamento de veículo não entra no catálogo).

## Pendências criadas

- 🧪 Cobertura do tripulante em veículo fica **em teste** — validar no playtest os valores e a
  estimativa de ~70% dos acertos com cobertura (linha adicionada no PENDENCIAS.md, seção Cenários).

## Observações

- No início da sessão o repositório estava **40 commits atrás** de origin/main; feito o pull
  (com stash de uma alteração de BOM em `01-conflito-fisico.md`) para trazer o conteúdo do Colapso.
- O INDICE indexou o termo **Cobertura** (com as referências do cenário); a indexação completa do
  restante do conteúdo de veículos do Colapso segue pendente (lacuna pré-existente da importação).
- Commit/push deixados para a Bianca (não commitado pela IA, conforme AGENTS.md).
