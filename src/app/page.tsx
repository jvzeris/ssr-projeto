import Link from 'next/link'
import { posts } from '../lib/posts'
import { getNews, type NewsItem } from '../lib/news'

export default async function Home() {
  const news: NewsItem[] = await getNews()

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog de Tecnologia</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Posts do Blog</h2>
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/post/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Notícias de Tecnologia</h2>
        <ul className="space-y-4">
          {news.map((item, idx) => (
            <li key={idx}>
              <a href={item.url} target="_blank" className="text-lg font-medium text-blue-700 hover:underline">
                {item.title}
              </a>
              <p className="text-gray-700">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
