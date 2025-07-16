import Link from 'next/link'
import { posts } from '../lib/posts'
import { getNews, type NewsItem } from '../lib/news'

export default async function Home() {
  const news: NewsItem[] = await getNews()

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-300 shadow-sm">
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
      <main className="flex-grow max-w-7xl mx-auto px-6 py-10 sm:px-4 space-y-14">
        {/* Posts do Blog */}
        <section>
          <h2 className="text-3xl font-extrabold mb-6 text-gray-900 border-b-4 border-blue-300 pb-2">
            Posts do Blog
          </h2>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/post/${post.slug}`}
                  className="block p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-900 hover:text-blue-500"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Notícias de Tecnologia */}
        <section>
          <h2 className="text-3xl font-extrabold mb-6 text-gray-900 border-b-4 border-blue-300 pb-2">
            Notícias de Tecnologia
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {news.map((item, idx) => (
              <li
                key={idx}
                className="p-5 rounded-md bg-white border border-gray-200 hover:border-blue-300 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-900 hover:text-blue-500 transition-colors duration-200"
                >
                  {item.title}
                </a>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 py-6 text-center text-gray-600 text-sm shadow-inner">
        © 2025 SSR-Projeto. Todos os direitos reservados.
      </footer>
    </div>
  )
}
