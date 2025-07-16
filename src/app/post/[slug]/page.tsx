import { posts } from '@/lib/posts'
import { notFound } from 'next/navigation'

type Props = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: Props) {
    const post = posts.find((p) => p.slug === params.slug)

    if (!post) return notFound()

    return (
        <main style={{ padding: 20 }}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </main>
    )
}
