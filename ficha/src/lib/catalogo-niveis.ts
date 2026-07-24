// Progressão por nível das habilidades — ADAPTADOR sobre o catálogo oficial.
//
// A fonte é `contrato/catalogo.json` (campo `niveis` de cada habilidade),
// gerado pelo exportador do CONTRATO DE CONTEÚDO a partir das seções
// "Progressão" de sistema-base/listas/habilidades-base-*.md.
// NÃO transcreva dados aqui — ver contrato/README.md.
// Índice 0 = nível 1, índice 1 = nível 2, etc.

import catalogoJson from "../../../contrato/catalogo.json";

type JsonHabilidade = { nome: string; niveis: string[]; experimental: boolean };

const habilidades = (catalogoJson as unknown as { habilidades: JsonHabilidade[] }).habilidades;

export const HABILIDADES_NIVEIS: Record<string, string[]> = Object.fromEntries(
  habilidades
    .filter((h) => !h.experimental && h.niveis.length > 0)
    .map((h) => [h.nome, h.niveis])
);
