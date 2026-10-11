# Execução e hospedagem

## Executar no Replit

- Instale as dependências com `npm install`.
- Inicie a pré-visualização com `npm run dev` (porta 5000).
- Crie uma compilação de produção com `npm run build`; os ficheiros ficam em `dist/`.

## Hospedar no Render

O projeto é um site React/Vite estático, sem backend ou variáveis secretas. O ficheiro `render.yaml` configura o Render para publicar a pasta `dist/`.

1. Envie este projeto, incluindo `render.yaml` e `scripts/prepare-render-lock.mjs`, para o repositório GitHub ligado ao Render.
2. No Render, escolha **New > Blueprint** e selecione esse repositório.
3. O Render lê `render.yaml`, instala as dependências e publica o site estático. Não é necessário configurar um comando de início de servidor.

O ficheiro de dependências importado contém URLs do espelho privado do Replit. Durante a compilação no Render, `scripts/prepare-render-lock.mjs` converte apenas esses URLs para o registo público do npm; as versões e os hashes de integridade permanecem fixos. O `package-lock.json` guardado no projeto não é alterado por essa conversão. A versão do Node está definida para 24.21.0, compatível com a versão do Vite bloqueada no projeto.

O site só será publicado depois de criar o Blueprint na sua conta Render. Nenhuma conta ou implantação foi criada nesta alteração.
