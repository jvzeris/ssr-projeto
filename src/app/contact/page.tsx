import Link from 'next/link'

export default function Contact() {
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
                <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Contato</h2>

                <p className="mb-6 text-gray-700 leading-relaxed">
                    Quer falar com a gente? Seguem os contatos:
                </p>

                <ul className="text-gray-700 space-y-4">
                    <li>
                        <strong>João Oliveira</strong> —{' '}
                        <a
                            href="mailto:jvzeris@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            jvzeris@gmail.com
                        </a>
                    </li>
                    <li>
                        <strong>Raquel Marafon</strong> —{' '}
                        <a
                            href="mailto:raquelbmarafon@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            raquelbmarafon@gmail.com
                        </a>
                    </li>
                </ul>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
                © 2025 SSR-Projeto. Todos os direitos reservados.
            </footer>
        </div>
    )
}
