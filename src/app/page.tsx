import Link from 'next/link'
import { posts } from '../lib/posts'
import { getNews, type NewsItem } from '../lib/news'

export default async function Home() {
  const news: NewsItem[] = await getNews()

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">SSR-Projeto</h1>
          <ul className="flex space-x-6 text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition-colors duration-200">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition-colors duration-200">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex-grow max-w-3xl mx-auto px-6 py-10 sm:px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900">
          Blog de Tecnologia
        </h2>

        {/* Posts do Blog */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-5 border-b-2 border-blue-300 pb-2 text-gray-700">
            Posts do Blog
          </h3>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/post/${post.slug}`}
                  className="text-lg font-medium text-gray-900 hover:text-blue-500 transition-colors duration-200"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Notícias de Tecnologia */}
        <section>
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-blue-300 pb-2 text-gray-700">
            Notícias de Tecnologia
          </h3>
          <ul className="space-y-6">
            {news.map((item, idx) => (
              <li
                key={idx}
                className="p-5 rounded-md bg-gray-50 border border-gray-200 hover:border-blue-300 transition-colors duration-200"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-900 hover:text-blue-500 transition-colors duration-200"
                >
                  {item.title}
                </a>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
        © 2025 SSR-Projeto. Todos os direitos reservados.
      </footer>
    </div>
  )
}
