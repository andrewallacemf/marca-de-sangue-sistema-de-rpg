// Progressão por nível das habilidades base (regras vigentes).
// Extraído das seções "Progressão" de sistema-base/listas/habilidades-base-*.md.
// Índice 0 = nível 1, índice 1 = nível 2, etc. Transcrição fiel (resumida quando muito longa).

export const HABILIDADES_NIVEIS: Record<string, string[]> = {
  // --- Físico ---
  "Ataques múltiplos & médios": [
    "Muda de alvo 1 vez no turno sem desvantagem.",
    "Muda de alvo 2 vezes no turno sem desvantagem.",
    "Muda de alvo 3 vezes no turno sem desvantagem.",
    "Muda de alvo 4 vezes no turno sem desvantagem.",
  ],
  "Ataques múltiplos & pesados": [
    "Muda de alvo 1 vez no turno sem desvantagem.",
    "Muda de alvo 2 vezes no turno sem desvantagem.",
    "Muda de alvo 3 vezes no turno sem desvantagem.",
  ],
  "Atordoar": [
    "Oponente perde 1 PA até um descanso curto.",
    "Oponente perde 2 PA até um descanso curto.",
    "Oponente perde 3 PA até um descanso curto.",
    "Oponente perde 4 PA até um descanso curto.",
    "Oponente perde 5 PA até um descanso curto.",
  ],
  "Desarmar leve": [
    "Derruba a arma a 1 metro de distância.",
    "Derruba a arma a 2 metros de distância.",
    "Derruba a arma a 3 metros de distância.",
  ],
  "Desarmar pesado": [
    "Derruba a arma a 2 metros de distância.",
    "Derruba a arma a 4 metros de distância.",
    "Derruba a arma a 6 metros de distância.",
  ],
  "Encontrão": [
    "Empurra o oponente 2 metros.",
    "Empurra o oponente 3 metros.",
    "Empurra o oponente 4 metros.",
    "Empurra o oponente 5 metros.",
    "Empurra o oponente 6 metros.",
  ],
  "Esmagar": [
    "Causa 1 ponto de dano.",
    "Causa 2 pontos de dano.",
    "Causa 3 pontos de dano.",
    "Causa 4 pontos de dano.",
    "Causa 5 pontos de dano.",
  ],
  "Investida": [
    "Avança 1 metro na direção do oponente.",
    "Avança 2 metros na direção do oponente.",
    "Avança 3 metros na direção do oponente.",
    "Avança 4 metros na direção do oponente.",
  ],
  "Quebrar guarda": [
    "Força o oponente a gastar 1 guarda.",
    "Força o oponente a gastar 2 guardas.",
    "Força o oponente a gastar 3 guardas.",
  ],

  // --- Ágil ---
  "Alcance à distância": [
    "Aumenta a área de alcance ideal da arma em 1 metro.",
    "Aumenta a área de alcance ideal da arma em 2 metros.",
    "Aumenta a área de alcance ideal da arma em 3 metros.",
    "Aumenta a área de alcance ideal da arma em 4 metros.",
    "Aumenta a área de alcance ideal da arma em 5 metros.",
  ],
  "Alcance corpo a corpo": [
    "Custo de PA: 3 PA + PA da arma.",
    "Custo de PA: 2 PA + PA da arma.",
    "Custo de PA: 1 PA + PA da arma.",
    "Custo de PA: PA da arma.",
  ],
  "Arremesso improvisado": [
    "Arremessa 1 arma/objeto como arma de arremesso neste turno.",
    "Arremessa até 2 armas/objetos como armas de arremesso neste turno.",
    "Arremessa até 3 armas/objetos como armas de arremesso neste turno.",
    "Arremessa até 4 armas/objetos como armas de arremesso neste turno.",
    "Arremessa até 5 armas/objetos como armas de arremesso neste turno.",
  ],
  "Arremessos concentrados": [
    "Ataca o mesmo alvo 2 vezes no turno sem desvantagem.",
    "Ataca o mesmo alvo 3 vezes no turno sem desvantagem.",
    "Ataca o mesmo alvo 4 vezes no turno sem desvantagem.",
    "Ataca o mesmo alvo 5 vezes no turno sem desvantagem.",
  ],
  "Ataques à distância concentrados": [
    "Ataca o mesmo alvo 2 vezes no turno sem desvantagem.",
    "Ataca o mesmo alvo 3 vezes no turno sem desvantagem.",
    "Ataca o mesmo alvo 4 vezes no turno sem desvantagem.",
    "Ataca o mesmo alvo 5 vezes no turno sem desvantagem.",
  ],
  "Ataques múltiplos & leves": [
    "Muda de alvo 1 vez no turno sem desvantagem.",
    "Muda de alvo 2 vezes no turno sem desvantagem.",
    "Muda de alvo 3 vezes no turno sem desvantagem.",
    "Muda de alvo 4 vezes no turno sem desvantagem.",
    "Muda de alvo 5 vezes no turno sem desvantagem.",
  ],
  "Disparada": [
    "Avança até 6 metros.",
    "Avança até 7 metros.",
    "Avança até 8 metros.",
    "Avança até 9 metros.",
    "Avança até 10 metros.",
  ],
  "Golpe surpresa": [
    "Causa 1d4 de dano extra.",
    "Causa 1d6 de dano extra.",
    "Causa 1d8 de dano extra.",
    "Causa 1d10 de dano extra.",
  ],

  // --- Mental ---
  "Analisar fraquezas": [
    "Vê o dano recebido em 1 parte do corpo.",
    "Vê o dano recebido em 2 partes do corpo.",
    "Vê o dano recebido em 3 partes do corpo.",
    "Vê o dano recebido em 4 partes do corpo.",
    "Vê o dano recebido em 5 partes do corpo.",
    "Vê o dano recebido em 6 partes do corpo.",
  ],
  "Auto cura": [
    "Rola 1d4 de cura de dano superficial.",
    "Rola 1d6 de cura de dano superficial.",
    "Rola 1d8 de cura de dano superficial.",
    "Rola 1d10 de cura de dano superficial.",
    "Rola 1d12 de cura de dano superficial.",
  ],
  "Auto tratamento": [
    "Rola 1d4 de tratamento de dano profundo.",
    "Rola 2d4 de tratamento de dano profundo.",
    "Rola 3d4 de tratamento de dano profundo.",
    "Rola 3d6 de tratamento de dano profundo.",
  ],
  "Confundir inimigo": [
    "Afeta até 1 oponente.",
    "Afeta até 2 oponentes.",
    "Afeta até 3 oponentes.",
    "Afeta até 4 oponentes.",
  ],
  "Consumir": [
    "Consome até 1 habilidade ou desativa uma habilidade por 1 turno.",
    "Consome até 2 habilidades ou desativa uma habilidade por 2 turnos.",
    "Consome até 3 habilidades ou desativa uma habilidade por 3 turnos.",
  ],
  "Criar armadilha": [
    "Causa 1 ponto de dano.",
    "Causa 2 pontos de dano.",
    "Causa 3 pontos de dano.",
    "Causa 4 pontos de dano.",
    "Causa 5 pontos de dano.",
    "Causa 6 pontos de dano.",
  ],
  "Intimidação generalizada": [
    "Afeta até 1 oponente.",
    "Afeta até 2 oponentes.",
    "Afeta até 3 oponentes.",
    "Afeta até 4 oponentes.",
  ],
  "Recompor": [
    "Recupera até 2 aptidões.",
    "Recupera até 3 aptidões.",
    "Recupera até 4 aptidões.",
  ],
  "Urro de Intimidação": [
    "Atrasa o turno do oponente em 1 posição.",
    "Atrasa o turno do oponente em 2 posições.",
    "Atrasa o turno do oponente em 3 posições.",
    "Atrasa o turno do oponente em 4 posições.",
    "Atrasa o turno do oponente em 5 posições.",
  ],

  // --- Social ---
  "Desorientar": [
    "Oponente perde 2 PA em seu próximo turno.",
    "Oponente perde 4 PA em seu próximo turno.",
    "Oponente perde 6 PA em seu próximo turno.",
    "Oponente perde 8 PA em seu próximo turno.",
    "Oponente perde 10 PA em seu próximo turno.",
  ],
  "Animar": [
    "Recupera até 2 aptidões.",
    "Recupera até 3 aptidões.",
    "Recupera até 4 aptidões.",
    "Recupera até 5 aptidões.",
  ],
  "Brado de guerra": [
    "Afeta até 1 aliado.",
    "Afeta até 2 aliados.",
    "Afeta até 3 aliados.",
    "Afeta até 4 aliados.",
    "Afeta até 5 aliados.",
    "Afeta até 6 aliados.",
  ],
  "Comandar": [
    "Transfere até 2 PA.",
    "Transfere até 3 PA.",
    "Transfere até 4 PA.",
    "Transfere até 5 PA.",
    "Transfere até 6 PA.",
    "Transfere até 7 PA.",
    "Transfere até 8 PA.",
    "Transfere até 9 PA.",
    "Transfere até 10 PA.",
  ],
  "Cura especializada": [
    "Rola 1d4 de cura de dano superficial.",
    "Rola 1d6 de cura de dano superficial.",
    "Rola 1d8 de cura de dano superficial.",
    "Rola 1d10 de cura de dano superficial.",
    "Rola 1d12 de cura de dano superficial.",
  ],
  "Grito de alerta": [
    "Afeta até 1 aliado.",
    "Afeta até 2 aliados.",
    "Afeta até 3 aliados.",
    "Afeta até 4 aliados.",
    "Afeta até 5 aliados.",
    "Afeta até 6 aliados.",
  ],
  "Revigorar": [
    "Reativa habilidades de até nível 1.",
    "Reativa habilidades de até nível 2.",
    "Reativa habilidades de até nível 3.",
    "Reativa habilidades de até nível 4.",
    "Reativa habilidades de até nível 5.",
  ],
  "Revitalizar": [
    "Trata/cura 1 ponto de dano profundo/superficial.",
    "Trata/cura 2 pontos de dano profundo/superficial.",
    "Trata/cura 3 pontos de dano profundo/superficial.",
    "Trata/cura 4 pontos de dano profundo/superficial.",
    "Trata/cura 5 pontos de dano profundo/superficial.",
  ],
  "Tratamento especializado": [
    "Rola 1d4 de tratamento de dano profundo.",
    "Rola 2d4 de tratamento de dano profundo.",
    "Rola 3d4 de tratamento de dano profundo.",
    "Rola 3d6 de tratamento de dano profundo.",
  ],
};
