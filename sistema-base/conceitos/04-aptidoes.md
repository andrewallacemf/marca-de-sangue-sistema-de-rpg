---
titulo: Aptidões
tipo: regra
cenario: base
status: revisao
tags: [aptidoes, atributos, rerolagem, desempate, recuperacao]
atualizado-em: 2026-07-11
---

# Aptidões

Aptidões são recursos consumíveis ligados a um [Atributo](02-atributos.md) (**`Físico`**, **`Ágil`**, **`Mental`** e **`Social`**), que podem ser utilizados em qualquer ação relacionada ao atributo da aptidão. Ao gastar uma aptidão, o jogador escolhe **re-rolar o dado do teste ou o dado do contrateste**, **depois de saber o resultado** — uma nova chance de obter um resultado mais favorável. Aptidões não concedem vantagem nem desvantagem: não alteram a quantidade de dados rolados.

> ✅ Decidido em 11/07/2026: a mecânica oficial da aptidão é a re-rolagem (ver [notas-de-design/decisoes/2026-07-11-ajustes-pos-lote-1.md](../../notas-de-design/decisoes/2026-07-11-ajustes-pos-lote-1.md)).

Além disso, cada Cenário pode ter Aptidões específicas aplicáveis somente à jogabilidade daquele Cenário.

O jogador pode utilizar quantas aptidões quiser se estiverem disponíveis, respeitando o atributo relacionado a ação.

Aptidões são acumulativas, você pode comprar quantas aptidões quiser consultando a “Lista de aptidões base” na seção “Recursos básicos do sistema” e a lista de aptidões específicas do cenário escolhido.

## Dinâmica de mesa

Ao resolver um teste, o narrador **anuncia primeiro se houve sucesso ou falha, antes de narrar os efeitos**. Essa é a janela para o jogador decidir se gasta uma aptidão para re-rolar o dado do teste ou o dado do contrateste. Encerradas as re-rolagens, o narrador narra o desfecho.

## Qual valor fica valendo (resultado mantido)

Ao gastar uma aptidão para re-rolar — o próprio dado **ou** o do oponente — **fica valendo o valor que beneficia quem usou a aptidão**, entre o valor anterior e o novo:

- *Meu teste marcou **5**; gasto uma aptidão e re-rolo meu dado: sai **3** → continuo com o **5**.*
- *Meu teste marcou **5**; re-rolo meu dado: sai **8** → fico com o **8**.*
- *O oponente tem **6**; gasto uma aptidão para re-rolar o dado **dele**: sai **8** → mantém o **6** (o valor que me beneficia); sai **3** → fica valendo o **3**.*

O outro lado pode responder gastando as próprias aptidões, o que pode formar uma **fila de re-rolagens alternadas** entre os dois lados — é aceito e intencional: cada resposta consome recursos e faz parte da estratégia.

**Dever do narrador:** na janela de re-rolagem, avisar o jogador de qual opção é mais vantajosa (ex.: "melhor re-rolar o seu dado do que o do oponente") — o jogo não exige que os jogadores dominem esta regra de cor.

> **Nunca para dano:** a re-rolagem vale **apenas** para dados de **teste e contrateste** — **nunca** para dados de dano.

> ✅ Decidido em 11/07/2026 (ver [notas-de-design/decisoes/2026-07-11-revisao-testes-aptidoes-fadiga.md](../../notas-de-design/decisoes/2026-07-11-revisao-testes-aptidoes-fadiga.md)). A cadeia de [desempate](#aptidões-e-desempate) já registrada permanece válida.

## Aptidões e desempate

O uso de aptidões altera a regra de [desempate](01-testes-e-contratestes.md#desempate) entre teste e contrateste:

1. **Padrão:** o empate favorece **quem realiza o contrateste**.
2. Se alguém usou aptidão para re-rolar e o resultado ficou empatado, o desempate favorece **quem usou a aptidão**.
3. Se os dois lados usaram aptidões, favorece **quem usou mais**.
4. Se as quantidades forem iguais, volta ao padrão: **o contrateste vence**.

## Aptidões dentro e fora de conflito

A regra é a **mesma dentro e fora de conflito**: sempre que houver rolagem de dados, é possível gastar quantas aptidões o jogador quiser — contanto que estejam disponíveis — em um teste de uma ação ou habilidade relacionados ao atributo daquela aptidão. Não há gasto de [pontos de ação](07-pontos-de-acao.md) (**`PA`**) para usar aptidões.

> ✅ Decidido em 11/07/2026: deixou de existir o **sucesso automático** fora de batalha e o limite de uma aptidão por teste. Fora de batalha também se rolam os dados, e a aptidão funciona igual: re-rolagem após o resultado (ver [notas-de-design/decisoes/2026-07-11-ajustes-pos-lote-1.md](../../notas-de-design/decisoes/2026-07-11-ajustes-pos-lote-1.md)).

Exemplo (em batalha): o personagem usou a habilidade “Atordoar”, que retira Pontos de Ação do oponente. Após o teste e contrateste, o narrador anuncia que o resultado seria uma falha. Assim, o jogador decide gastar uma aptidão do tipo **`Físico`** para re-rolar um dos dados envolvidos no teste ou no contrateste.

Exemplo (fora de batalha): para passar por um lugar proibido, o personagem tenta convencer o guarda de que há um perigo em outro lugar que demanda sua presença. O narrador anuncia que o teste **`Social`** falhou; como as consequências seriam graves, o jogador gasta uma aptidão **`Social`** e re-rola o dado do seu teste em busca de um resultado melhor.

## Recuperando aptidões

Ao consumir a aptidão, é necessário um descanso ou outra indicação de recuperação de características para poder utilizá-la novamente.

Por padrão, um descanso longo recupera todas as aptidões consumidas.

### Recuperando aptidões em combate

Existem habilidades para recuperar características suas e de outros personagens, assim como existem habilidades para descartá-las. O narrador também pode decretar outras formas de recuperar características durante um combate.

> ⚠️ A DEFINIR: há uma variante pendente de decisão sobre esta regra — ver [notas-de-design/variantes-pendentes.md](../../notas-de-design/variantes-pendentes.md) (item 3, frequência de uso das aptidões — em investigação).
