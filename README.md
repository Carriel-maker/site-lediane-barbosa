# Site — Lediane Barbosa Arquitetura + Interiores

Landing page responsiva criada para o escritório Lediane Barbosa, com portfólio,
serviços, apresentação profissional, método de trabalho e contato direto.

## Rodar no Claude Code

Requisitos: Node.js 22 ou superior e pnpm.

```bash
pnpm install
pnpm dev
```

Depois, abra a URL informada no terminal (normalmente `http://localhost:5173`).

Para validar a versão de produção:

```bash
pnpm build
```

## Onde editar

- `app/page.tsx`: conteúdo e estrutura da página
- `app/globals.css`: identidade visual, responsividade e animações
- `app/layout.tsx`: título e descrição usados por buscadores
- `public/assets`: logo, retratos e imagens dos projetos

## Contatos configurados

- WhatsApp: (92) 99150-7276
- E-mail: lediane@lbarquitetura.com.br
- Instagram: @ledianebarbosaarquitetura

O movimento da abertura é uma transição automática entre os dois projetos,
com zoom suave e alternativa estática para usuários que desativam animações.

A identidade visual utiliza verde profundo, bege e dourado. A área de projetos
funciona como uma esteira contínua de painéis verticais. O movimento pausa quando
o visitante posiciona o mouse sobre a faixa e cada foto revela sua classificação
e seu título no hover. No celular, as informações permanecem visíveis.
