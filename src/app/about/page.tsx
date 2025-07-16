import Link from 'next/link'

export default function About() {
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
                <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Sobre o Projeto</h2>

                <p className="mb-6 text-gray-700 leading-relaxed">
                    Este projeto foi desenvolvido por <strong>João Oliveira</strong> e <strong>Raquel Marafon</strong>.
                    Nosso objetivo é criar um blog de tecnologia moderno, usando SSR com Next.js para garantir performance e SEO excelentes.
                </p>

                <section>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b border-blue-300 pb-2">
                        Contatos
                    </h3>

                    {/* João Oliveira */}
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-900">João Oliveira</h4>
                        <ul className="text-gray-700">
                            <li>
                                Email:{' '}
                                <a
                                    href="mailto:jvzeris@gmail.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    jvzeris@gmail.com
                                </a>
                            </li>
                            <li>
                                GitHub:{' '}
                                <a
                                    href="https://github.com/jvzeris/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    github.com/jvzeris
                                </a>
                            </li>
                            <li>
                                Lattes:{' '}
                                <a
                                    href="http://lattes.cnpq.br/7484388137749793"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    http://lattes.cnpq.br/7484388137749793
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Raquel Marafon */}
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900">Raquel Marafon</h4>
                        <ul className="text-gray-700">
                            <li>
                                Email:{' '}
                                <a
                                    href="mailto:raquelbmarafon@gmail.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    raquelbmarafon@gmail.com
                                </a>
                            </li>
                            <li>
                                GitHub:{' '}
                                <a
                                    href="https://github.com/raquelmarafon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    github.com/raquelmarafon
                                </a>
                            </li>
                            <li>
                                Lattes:{' '}
                                <a
                                    href="https://lattes.cnpq.br/1465022168062768"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    https://lattes.cnpq.br/1465022168062768
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
                © 2025 SSR-Projeto. Todos os direitos reservados.
            </footer>
        </div>
    )
}
