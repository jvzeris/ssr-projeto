// src/pages.tsx

import Link from 'next/link'
import Image from 'next/image'
import logo from '@/imagens/logo.png'
import mascote from '@/imagens/mascote.png'
import { posts } from '../lib/posts'
import { getNews, type NewsItem } from '../lib/news'

export default async function Pages() {
  const news: NewsItem[] = await getNews()

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 to-blue-100 relative overflow-hidden">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-purple-300 to-sky-300 shadow-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src={logo}
              alt="Logo do projeto"
              width={80}
              height={80}
              className="rounded"
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Tech-News</h1>
          </div>
          <ul className="flex space-x-6 text-gray-800 font-semibold text-lg">
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-10 sm:px-4 space-y-14 relative z-10">
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

      {/* Mascote fixo no canto inferior direito */}
      <div className="fixed bottom-6 right-6 z-0 w-64 h-64 drop-shadow-lg">
        <Image
          src={mascote}
          alt="Mascote Tech-News"
          width={256}
          height={256}
          className="object-contain"
          priority
        />
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 py-6 text-center text-gray-600 text-sm shadow-inner relative z-10">
        © 2025 SSR-Projeto. Todos os direitos reservados.
      </footer>
    </div>
  )
}
