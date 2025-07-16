import Link from 'next/link'
import { posts } from '../lib/posts'
import { getNews, type NewsItem } from '../lib/news'

export default async function Home() {
  const news: NewsItem[] = await getNews()

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 bg-white min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-600" style={{ color: '#7A9CC6' }}>
        Blog de Tecnologia
      </h1>

      {/* Posts do Blog */}
      <section className="mb-12">
        <h2
          className="text-3xl font-semibold mb-5 border-b-2 pb-2"
          style={{ borderColor: '#A3BED8', color: '#5C7CBA' }}
        >
          Posts do Blog
        </h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/post/${post.slug}`}
                className="text-xl font-medium hover:underline"
                style={{ color: '#6388B8' }}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Notícias de Tecnologia */}
      <section>
        <h2
          className="text-3xl font-semibold mb-6 border-b-2 pb-2"
          style={{ borderColor: '#A3BED8', color: '#5C7CBA' }}
        >
          Notícias de Tecnologia
        </h2>
        <ul className="space-y-6">
          {news.map((item, idx) => (
            <li
              key={idx}
              className="p-5 rounded-md"
              style={{ backgroundColor: '#E8F0FE' }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:underline"
                style={{ color: '#466DAB' }}
              >
                {item.title}
              </a>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
