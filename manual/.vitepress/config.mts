import { defineConfig } from 'vitepress'
import sidebar from './sidebar.json'

// GitHub Pages (project page): a base precisa ser o caminho do repositório.
const BASE = '/marca-de-sangue-sistema-de-rpg/'
const URL_FICHA = 'https://andrewallacemf.github.io/marca-de-sangue-sistema-de-rpg/ficha/'

export default defineConfig({
  title: 'Marca de Sangue',
  description: 'Manual do sistema de RPG Marca de Sangue — regras, módulos e cenários.',
  lang: 'pt-BR',
  srcDir: 'conteudo',
  base: BASE,
  cleanUrls: true,
  ignoreDeadLinks: true,          // links para material fora do manual (notas, playtest)
  themeConfig: {
    search: { provider: 'local' },
    nav: [
      { text: 'Sistema-base', link: '/sistema-base/00-introducao' },
      { text: 'Módulos', link: '/modulos/' },
      { text: 'Cenários', link: '/cenarios/' },
      { text: 'Abrir a ficha ↗', link: URL_FICHA, target: '_self' },
    ],
    sidebar,
    outline: { level: [2, 3], label: 'Nesta página' },
    docFooter: { prev: 'Anterior', next: 'Próximo' },
    externalLinkIcon: true,
  },
})
