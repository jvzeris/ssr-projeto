export type Post = {
    slug: string
    title: string
    content: string
}

export const posts: Post[] = [
    {
        slug: 'nextjs-ssr',
        title: 'Como funciona o SSR no Next.js',
        content: `
# Como funciona o SSR no Next.js

Neste post, vamos entender como funciona o **Server-Side Rendering (SSR)** no Next.js.

## O que é SSR?

SSR é uma técnica onde a página é renderizada no servidor a cada requisição, gerando o HTML pronto para o navegador. Isso traz vários benefícios:

- **Melhor SEO:** buscadores conseguem ler o conteúdo diretamente.
- **Melhor performance:** o usuário vê o conteúdo mais rápido.
- **Conteúdo dinâmico:** páginas atualizadas a cada acesso.

## Como usar SSR no Next.js?

No Next.js, você pode criar componentes assíncronos que fazem requisições e renderizam no servidor. Exemplo:

\`\`\`tsx
export default async function Page() {
  const res = await fetch('https://api.exemplo.com/dados', { cache: 'no-store' })
  const data = await res.json()

  return (
    <div>
      <h1>{data.titulo}</h1>
      <p>{data.descricao}</p>
    </div>
  )
}
\`\`\`

O parâmetro \`{ cache: 'no-store' }\` garante que a requisição seja feita a cada acesso, ou seja, SSR real.

## Vantagens do SSR

- Conteúdo sempre atualizado
- Melhor indexação no Google
- Menor tempo para o usuário ver a página

---

Gostou? No próximo post, falaremos sobre como usar o GitHub no seu projeto!
`
    },
    {
        slug: 'github-dicas',
        title: 'Dicas para usar o GitHub no seu projeto',
        content: `
O GitHub é uma plataforma essencial para controlar versões e colaborar em projetos de software. Aqui vão algumas dicas para melhorar seu uso:

- **Faça commits pequenos e claros:** facilite a revisão e o entendimento do histórico.
- **Use branches:** crie ramificações para desenvolver funcionalidades separadas sem impactar o código principal.
- **Pull requests:** envie suas alterações para revisão antes de mesclar.
- **Issues:** organize tarefas, bugs e ideias.
- **GitHub Actions:** automatize testes, builds e deploys para ganhar eficiência.

Seguindo essas práticas, seu fluxo de trabalho será mais produtivo e profissional!
`
    }
]
