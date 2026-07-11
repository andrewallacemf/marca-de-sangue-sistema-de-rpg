# ✅ 08 — Boas práticas e cuidados

*Uma lista curta de hábitos que fazem o projeto funcionar liso para todo mundo.*

---

## Os hábitos que evitam 90% dos problemas

1. **PUXE no começo, SUBA no fim.** A regra de ouro. Nunca comece sem dar Pull; nunca
   termine o dia com trabalho grande sem dar Push.
2. **Avise o grupo o que vai mexer.** "Vou editar X." Coordenação social simples resolve
   o que a ferramenta sozinha não resolve enquanto somos poucos.
3. **Um assunto por arquivo, arquivos pequenos.** Reduz conflito, melhora a leitura e
   facilita a vida da IA.
4. **Commits pequenos, com frase clara.** `adiciona criatura Golem de sucata`, não
   `mudanças`. O histórico é a memória do projeto.
5. **Confira antes de subir.** Dê sempre aquela olhada na aba Changes. É rápido e pega
   enganos.

## Cuidados de conteúdo

- **Siga as [convenções](../CONVENCOES.md).** Nomes de arquivo sem acento/maiúscula,
  frontmatter completo, cenários referenciando o base em vez de copiar.
- **Não invente para preencher.** Se falta uma decisão de regra ou de lore, marque
  `> ⚠️ A DEFINIR:` e leve ao grupo. Um buraco sinalizado é melhor que um "puxadinho"
  que ninguém combinou.
- **Atualize `atualizado-em` e `status`.** Ajuda todo mundo a saber o que está maduro e
  o que ainda é rascunho.
- **Mudou algo `estavel`? Avise.** Regras já em uso nas mesas afetam partidas em
  andamento. Trate com mais cuidado e comunicação.

## Cuidados técnicos

- **Não baixe o projeto como `.zip` pelo site para trabalhar.** Sempre use a pasta
  **clonada**. O zip perde a ligação com a nuvem.
- **Não coloque imagens pesadas direto no repositório** sem ler
  [assets/README.md](../assets/README.md).
- **Não commite lixo do sistema** (`.DS_Store`, caches). Na dúvida, não commite e pergunte.
- **Nunca coloque senhas, tokens ou dados pessoais** nos arquivos.
- **Não renomeie/mova pastas grandes por conta própria.** Isso mexe em muitos links de uma
  vez e costuma gerar conflito. Combine com o grupo antes.

## Ritmo de equipe (sugestões)

- Definam **um "guardião do Git"** para destravar casos difíceis
  (ver [problemas comuns](07-problemas-comuns.md)).
- Combinem um **canal único** (um grupo de mensagens) para os avisos de "vou mexer / subi".
- De vez em quando, façam uma **revisão conjunta**: passar os `rascunho` para `revisao` e
  os `revisao` para `estavel`.

## Checklist rápido para colar ao lado do monitor

```
[ ] Puxei as novidades (Pull) antes de começar?
[ ] Avisei o grupo o que vou mexer?
[ ] Segui as convenções (nome do arquivo, frontmatter)?
[ ] Conferi na aba Changes o que mudou?
[ ] Escrevi uma frase clara no commit?
[ ] Dei Push no final?
[ ] Avisei que terminei?
```

---

Voltar para o **[índice dos manuais](README.md)** ou para o **[COMECE-AQUI](../COMECE-AQUI.md)**.
