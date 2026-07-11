# ⚠️ 06 — Quando dá conflito

*Primeira coisa: respire. Conflito não quebra nada e não apaga trabalho. É só uma pergunta
que o sistema te faz.*

---

## O que é um conflito

Um conflito acontece quando **duas pessoas mudaram exatamente o mesmo trecho do mesmo
arquivo** sem uma ter visto a mudança da outra. Na hora de juntar, o sistema não sabe qual
das duas versões vale — então ele **para e pergunta para você**.

Ou seja: conflito não é erro seu nem defeito. É o sistema sendo cuidadoso para não
descartar o trabalho de ninguém.

## Quando ele aparece

Normalmente no momento do **Pull** ou do **Push**: você tenta baixar/enviar e o GitHub
Desktop avisa que há conflito em um ou mais arquivos.

## Como resolver (passo a passo)

1. **Não entre em pânico e não feche nada.** O GitHub Desktop vai listar os arquivos em
   conflito.
2. Clique em **Open in editor** (ou abra o arquivo no seu editor). Dentro dele, o trecho
   conflitante estará marcado assim:

   ```
   <<<<<<< HEAD
   (a versão que ESTAVA na sua cópia)
   =======
   (a versão que veio da nuvem, de outra pessoa)
   >>>>>>> origin/main
   ```

3. **Decida o texto final.** Você vai apagar as linhas de marcação
   (`<<<<<<<`, `=======`, `>>>>>>>`) e deixar **só o conteúdo correto**. Você pode:
   - ficar com a sua versão, **ou**
   - ficar com a versão da nuvem, **ou**
   - **combinar as duas** num texto que faça sentido (o mais comum).
4. Salve o arquivo. Repita para cada arquivo em conflito.
5. Volte ao GitHub Desktop. Quando não houver mais marcações, ele libera o botão
   **Commit merge**. Clique.
6. **Push origin** para subir a resolução.
7. Avise no grupo que resolveu, para a outra pessoa puxar a versão final.

> **Regra de ouro do conflito:** as três linhas de marcação (`<<<`, `===`, `>>>`)
> **sempre** somem no final. Se sobrou alguma, o conflito não foi resolvido.

## Exemplo rápido

Antes (em conflito):
```
<<<<<<< HEAD
A magia custa 3 de energia.
=======
A magia custa 5 de energia.
>>>>>>> origin/main
```

Você conversa com a pessoa, decidem que é 4, e deixa:
```
A magia custa 4 de energia.
```
Salva, commit merge, push. Pronto.

## Como quase nunca ter conflitos

- **Puxe antes de começar** (sempre). A maioria dos conflitos nasce de trabalhar sobre
  versão velha.
- **Avise o grupo** o que vai mexer. Se ninguém mexe no mesmo arquivo ao mesmo tempo, não
  há conflito.
- **Arquivos pequenos.** Um assunto por arquivo. Quanto menor e mais específico, menor a
  chance de duas pessoas cruzarem no mesmo ponto.
- **Suba com frequência.** Trabalho parado por dias na sua máquina é o maior gerador de
  conflito.

## Se travou de vez

Se você se enrolou no meio de um conflito e quer só recomeçar do zero **sem ter subido nada
ainda**, chame o "guardião do Git" da equipe (uma pessoa combinada para destravar esses
casos). Nada foi perdido — dá para voltar a um estado limpo. Veja também o
[manual de problemas comuns](07-problemas-comuns.md).

---

**Próximo:** [Problemas comuns →](07-problemas-comuns.md)
