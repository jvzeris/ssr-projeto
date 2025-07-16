import ReactMarkdown from 'react-markdown'
import { posts, type Post } from '@/lib/posts'
import { notFound } from 'next/navigation'

type Props = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }))
}

export default function PostPage({ params }: Props) {
    const post = posts.find((p) => p.slug === params.slug)

    if (!post) return notFound()

    return (
        <main className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
            <article className="prose prose-lg">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
        </main>
    )
}
