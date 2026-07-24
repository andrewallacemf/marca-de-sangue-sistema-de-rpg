# Portal / Manual web (VitePress)

Site que hospeda, no mesmo endereço, o **manual do sistema** (sistema-base, módulos e
cenários) e a **ficha interativa**. Tudo é gerado automaticamente a partir do repositório —
a cada push, o GitHub Actions reconstrói e publica no GitHub Pages.

- **Manual:** https://andrewallacemf.github.io/marca-de-sangue-sistema-de-rpg/
- **Ficha:** https://andrewallacemf.github.io/marca-de-sangue-sistema-de-rpg/ficha/

## Como funciona

1. **`gerar-conteudo.py`** — preprocessador. Lê `sistema-base/`, `modulos/` e `cenarios/`,
   remove frontmatter e blocos de bastidor (reaproveita a limpeza do gerador de PDF em
   `playtest/geracao-pdf/gerar_manual_pdf.py`, então o site mostra a **versão limpa**, igual
   ao PDF), e escreve o resultado em `manual/conteudo/`. Também espelha `assets/` e gera
   `.vitepress/sidebar.json`. Exclui `variantes/` e pastas `_template-*`.
2. **VitePress** builda `conteudo/` em `.vitepress/dist/`. A ficha (build single-file) é
   copiada para `conteudo/public/ficha/` antes do build, então sai em `/ficha/`.
3. **Deploy** — `.github/workflows/deploy-ficha.yml` faz os dois builds e publica no Pages.

> Nada em `manual/conteudo/`, `.vitepress/sidebar.json` ou `.vitepress/dist/` é versionado —
> tudo é regenerado. Não edite esses arquivos à mão; edite o markdown de origem no repositório.

## Rodar localmente

```bash
cd manual
npm install
python gerar-conteudo.py                 # gera conteudo/ limpo
# (opcional) embutir a ficha:
#   cd ../ficha && npm install && npm run build && cd ../manual
#   mkdir -p conteudo/public/ficha && cp -r ../ficha/dist/. conteudo/public/ficha/
npm run dev                              # preview local (http://localhost:5173/...)
npm run build                            # build de produção -> .vitepress/dist
```
