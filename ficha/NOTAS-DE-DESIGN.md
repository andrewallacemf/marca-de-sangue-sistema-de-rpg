# Ficha — notas de design e lista de problemas (v0 → passe "bonito e robusto")

Consolidação da análise do protótipo v0.2 (preenchido com o Gunnar), juntando o que a IA
detectou e o que o André apontou. Serve de checklist para o passe de robustez.

## Bugs de layout

1. **[RESOLVIDO] Larguras invertidas (raiz).** O `cn` só concatenava classes, então
   `w-12`/`w-16`/`w-14` não venciam o `w-full` do `Input`. Efeito: campo "Item"
   (Equipamentos) e "Espaço/tipo" (Proteções) colapsavam (~18px) e os campos de número
   ficavam gigantes — o "primeiro campo inutilizável" que o André viu. **Correção:** `cn`
   agora usa `clsx` + `tailwind-merge`. (Afeta também Aptidões, guardas, etc.)
2. **[RESOLVIDO] Experiência & características.** Aptidões/Habilidades/Traços agora são
   irmãos: mesmo tamanho, em série (grade de 3), sob o rótulo "Características compradas".
   Exp base total/usada em linha própria.
3. **[RESOLVIDO] Aptidões.** Rótulo (Física/Ágil/Mental/Social) com largura fixa e as duas
   caixas (total/usado) do mesmo tamanho, alinhadas em grade — sem o vai-e-vem.
4. **[RESOLVIDO] Saúde — pares.** Layout em 2 colunas: Cabeça|Tronco, Braço direito|Braço
   esquerdo, Perna direita|Perna esquerda — pares conectados visualmente.

## Mecânica das habilidades (a implementar — CONFIRMAR)

5. **Habilidades contam por USOS por nível (regras vigentes).** Em vez de marcar "de que
   nível é", cada habilidade precisa de um **número de usos por nível** (ex.: 3 usos de
   Nv1, 2 usos de Nv2). Vale tanto na **grade rápida** quanto nos **cards detalhados**.
6. **Regras alternativas: só o nível.** Não há usos (limite é fadiga). A habilidade precisa
   apenas de um **seletor de nível (1–5)**. Grade rápida e cards mostram só o nível.
   → A UI de habilidades passa a depender de `rulesVersion`.
7. **Traços não têm níveis/usos.** Nos cards, quando tipo = Traço, esconder a área de
   níveis/usos.

## Impressão / A4 (a implementar)

8. **Preview A4 ≠ impressão real.** O `lg:` do Tailwind responde à largura da janela, não
   da folha; na impressão real vira coluna única. Precisa de um **layout de impressão
   dedicado** (grid fixo por A4, não dependente de breakpoint de viewport).
9. **Campos de uma linha cortam texto** (ex.: Cenário longo) — na impressão o `input` não
   quebra. Rever para campos que precisam de texto longo.
10. **Textareas cortam conteúdo na impressão** (Efeito, Requisitos, Anotações) — o que passa
    da altura some no papel. Na impressão, expandir para mostrar todo o conteúdo.
11. **Sem estrutura de página impressa:** cabeçalho por folha (nome/cenário), quebras
    lógicas, evitar cards partidos.
12. **Tinta:** variante de impressão mais econômica (menos fundos escuros).

## UX / conteúdo (a implementar)

13. **Fadiga:** rótulo quebra em 2 linhas; trilha de 50 quebra em 3 fileiras e é difícil ler
    o número. Rever para contador + trilha mais compacta.
14. **Duplicação grade × cards de habilidades:** decidir se os cards alimentam a grade
    automaticamente (fonte única) ou se seguem separados.
15. **Limites fixos:** 2 armas (tornar dinâmico? builds maiores). Equipamentos e cards já
    são dinâmicos.
16. **Sem aviso de alterações não salvas** e sem confirmação ao Carregar por cima.
17. **Mobile (validar):** barra de ferramentas, trilha de fadiga e fileiras de 10 células de
    saúde podem estourar em telas pequenas.

## Direção acordada

- Ordem: **corrigir conteúdo/layout/mecânica → impressão A4 de verdade → (opcional) trocar
  pelos componentes oficiais do shadcn/ui**.
- Duas versões de regra independentes; a ficha se adapta (fadiga e habilidades) conforme
  a versão escolhida/gravada no arquivo.
