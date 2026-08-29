# olya.cc — site estático

Site institucional da **OLYA TECNOLOGIA LTDA**, reconstruído como HTML/CSS/JS
puro. **Não tem build**: é só subir a pasta.

## Como publicar

Copie o **conteúdo** desta pasta para a raiz do que é servido (não a pasta em si).

- **GitHub Pages** — mande estes arquivos para a branch `gh-pages` (ou para
  `/docs` na `main` e aponte o Pages para `/docs`). Nada mais a configurar.
- **Netlify / Vercel / Cloudflare Pages** — publish directory = esta pasta,
  build command = *(vazio)*.
- **Hospedagem tradicional (cPanel, FTP)** — jogue tudo em `public_html/`.

`404.html` já está no formato que GitHub Pages e Netlify reconhecem.

### Substituindo o app Vite atual

O repositório `olya-site-main` é um projeto Vite + React. Duas opções:

1. **Trocar de vez** (mais simples): apague `src/`, `index.html`,
   `package.json`, `vite.config.ts`, `tailwind.config.ts`, `postcss.config.js`,
   `tsconfig*.json`, `components.json`, `eslint.config.js`, `bun.lockb`,
   `package-lock.json` e `public/`, e coloque o conteúdo desta pasta na raiz.
   O deploy passa a ser estático, sem `npm install`.
2. **Conviver**: mantenha o app e coloque esta pasta como `/docs`, publicando o
   Pages a partir dela. Útil se você quiser comparar os dois lado a lado antes
   de decidir.

## Páginas

| Arquivo | Página |
| --- | --- |
| `index.html` | Início |
| `quem-somos.html` | Quem Somos (história, a marca, missão/visão/valores, atuação) |
| `produtos.html` | Produtos (braço robótico + kits) |
| `aplicacoes.html` | Aplicações educacionais (contextos, metodologias, STEAM) |
| `documentacao.html` | Documentação institucional (com modal de área restrita) |
| `suporte.html` | Suporte e pós-venda |
| `contato.html` | Contato + dados institucionais + formulário |
| `login.html` | Entrar |
| `esqueci-senha.html` | Recuperação de senha |
| `redefinir-senha.html` | Criar nova senha (com medidor de força) |
| `solicitar-acesso.html` | Solicitar acesso institucional |
| `area-cliente.html` | Painel da área do cliente |
| `404.html` | Página não encontrada |

## Funcionalidades

- **PT / EN** — botão no topo de toda página. Textos em `assets/i18n.js`, um
  dicionário com as duas línguas. O HTML já vem em português, então funciona
  mesmo com JavaScript desligado. A escolha fica salva no navegador.
- **Claro / escuro** — botão de lua/sol. Respeita a preferência do sistema na
  primeira visita e depois lembra a escolha.
- **Menu mobile** — abre abaixo de 1100px.
- **Formulários** — validam no navegador e mostram mensagem de sucesso.
  **Nada é enviado**: não há back-end. Para ligar de verdade, aponte o
  `action` do `<form>` para o seu serviço (Formspree, Netlify Forms, API
  própria) e remova o atributo `data-demo`.
- **Login** — as telas navegam entre si (`login` → `area-cliente`), mas não há
  autenticação. É maquete.

## Estrutura

```
assets/styles.css     todo o CSS, com os tokens da marca no topo (claro + escuro)
assets/i18n.js        dicionário PT/EN
assets/app.js         tema, idioma, menu, formulários, modal, filtro
assets/fonts/         Chaparral Pro (Regular, Italic, Bold, Bold Italic)
assets/img/           logos, barra de pixels, coluna robô, fotos, favicons
assets/img/social/    ícones de redes sociais da marca
```

Ícones de interface vêm do **Lucide via CDN** (unpkg). Se precisar funcionar
offline, baixe `lucide.min.js` para `assets/` e troque o `<script src>` no fim
de cada página.

## Identidade

Construído sobre o design system da oLyA, não sobre o visual anterior:

- **Cores** — ciano `#26A9E0` como primário digital, texto em tinta `#231F20`,
  fundo branco. Sem gradientes: o manual da marca é print-native e chapado.
- **Tipografia** — Roboto em títulos e interface, **Chaparral Pro** em texto
  corrido (as quatro variantes estão hospedadas em `assets/fonts/`).
- **Mobiliário de marca** — barra de pixels fechando o header e abrindo o
  rodapé, coluna de letras desconstruídas sangrando na borda, marca "Y" onde o
  logo completo não cabe.
- **Cantos** — 2 a 10px. Cápsula só em badge.
- **Movimento** — curto e seco (120–200ms), sem bounce.
- **Tagline** — "Apreender o presente, potencializar o futuro." / "Grasp the
  present, power the future."

## O que ainda falta

- **Fotos reais.** As três fotos de produto vieram do repositório atual. Os
  demais espaços usam essas mesmas imagens. Veja
  `assets/photos/README.md` no projeto do design system para a lista de slots.
- **Telefone.** Usei **+55 48 99677-4584** (o número dos dados oficiais). O
  site antigo mostrava (48) 93618-0086 no rodapé e no contato — confirme qual é
  o correto; está em `assets/i18n.js` e no rodapé de cada página.
- **E-mail de suporte.** `suporte@olya.cc` veio do site antigo. Confirme se
  existe ou troque por `contato@olya.cc`.
- **Documentos.** Os PDFs listados em `documentacao.html` são nomes e tamanhos
  de exemplo; ainda não há arquivo por trás. Suba os PDFs e aponte cada botão.
- **Back-end de formulário e login.**
