'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '@/imagens/logo.png'
import mascote from '@/imagens/mascote.png'

export default function ContactPage() {
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

            {/* Conteúdo */}
            <main className="flex-grow max-w-4xl mx-auto px-6 py-12 sm:px-4 space-y-10 relative z-10">
                <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-300 pb-2">
                    Contato
                </h2>

                <div className="flex flex-col space-y-10">
                    {/* João */}
                    <div className="flex items-center bg-white rounded-lg shadow-md p-6 border-2 border-transparent transition-transform duration-300 hover:scale-105 hover:border-blue-400">
                        <img
                            src="https://avatars.githubusercontent.com/u/129817464?v=4"
                            alt="João Oliveira"
                            className="w-40 h-40 rounded-full border-4 border-blue-300 mr-8 flex-shrink-0"
                        />
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">João Oliveira</h3>
                            <p className="text-base text-gray-700 mb-1">
                                📧{' '}
                                <a href="mailto:jvzeris@gmail.com" className="text-blue-600 hover:underline">
                                    jvzeris@gmail.com
                                </a>
                            </p>
                            <p className="text-base text-gray-700 mb-1">
                                🔗{' '}
                                <a
                                    href="https://github.com/jvzeris"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    GitHub
                                </a>
                            </p>
                            <p className="text-base text-gray-700">
                                📄{' '}
                                <a
                                    href="http://lattes.cnpq.br/7484388137749793"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Lattes
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Raquel */}
                    <div className="flex items-center bg-white rounded-lg shadow-md p-6 border-2 border-transparent transition-transform duration-300 hover:scale-105 hover:border-purple-400">
                        <img
                            src="https://avatars.githubusercontent.com/u/138199551?v=4"
                            alt="Raquel Marafon"
                            className="w-40 h-40 rounded-full border-4 border-purple-300 mr-8 flex-shrink-0"
                        />
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Raquel Marafon</h3>
                            <p className="text-base text-gray-700 mb-1">
                                📧{' '}
                                <a href="mailto:raquelbmarafon@gmail.com" className="text-blue-600 hover:underline">
                                    raquelbmarafon@gmail.com
                                </a>
                            </p>
                            <p className="text-base text-gray-700 mb-1">
                                🔗{' '}
                                <a
                                    href="https://github.com/raquelmarafon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    GitHub
                                </a>
                            </p>
                            <p className="text-base text-gray-700">
                                📄{' '}
                                <a
                                    href="https://lattes.cnpq.br/1465022168062768"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Lattes
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
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
