export type Post = {
    slug: string
    title: string
    content: string
}

export const posts: Post[] = [
    {
        slug: 'nextjs-ssr',
        title: 'Como funciona o SSR no Next.js',
        content: 'Neste post, explicamos como o Server-Side Rendering funciona com exemplos práticos...'
    },
    {
        slug: 'github-dicas',
        title: 'Dicas para usar o GitHub no seu projeto',
        content: 'Usar bem o GitHub pode melhorar seu fluxo de trabalho com commits limpos, branches organizadas...'
    }
]
