# 🖼️ Assets (imagens, mapas, arquivos grandes)

Arquivos grandes (imagens de alta resolução, mapas, PDFs pesados) **incham o repositório**
e deixam o Pull/Push lento para todo mundo. Regras:

## Preferível: linkar, não hospedar
Sempre que possível, mantenha a imagem em outro serviço (Google Drive, Figma, etc.) e
apenas **coloque o link** no arquivo Markdown. O repositório fica leve.

## Se precisar guardar a imagem aqui
- Use imagens **otimizadas/comprimidas** (evite arquivos de dezenas de MB).
- Organize por cenário: `assets/<cenario>/nome-da-imagem.png`.
- Para muitos arquivos binários grandes, considere ativar **Git LFS** (peça ao guardião
  do Git). Sem LFS, cada versão de cada imagem fica guardada para sempre e o projeto cresce
  rápido.

## O que NÃO fazer
- Não jogue a pasta inteira de artes brutas do projeto aqui.
- Não versione arquivos temporários de edição (`.psd` gigantes, exports intermediários).
