import Link from 'next/link'

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
            {/* Bolhas visuais no fundo */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0">
                {/* Bolha azul no topo esquerdo */}
                <div className="absolute w-[400px] h-[400px] bg-blue-300 rounded-full -top-20 -left-20 blur-[120px]"></div>

                {/* Bolha roxa no fundo direito */}
                <div className="absolute w-[350px] h-[350px] bg-purple-300 rounded-full -bottom-20 -right-10 blur-[100px]"></div>
            </div>

            {/* Navbar */}
            <nav className="bg-gradient-to-r from-purple-300 to-blue-300 shadow-md relative z-10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-gray-800">SSR-Projeto</h1>
                    <ul className="flex space-x-6 text-gray-800 font-semibold">
                        <li>
                            <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-black transition-colors">Sobre</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-black transition-colors">Contato</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Conteúdo principal */}
            <main className="flex-grow max-w-3xl mx-auto px-6 py-10 sm:px-4 relative z-10">
                <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Contato</h2>

                <p className="mb-6 text-gray-700">
                    Quer falar com a gente? Seguem os contatos abaixo:
                </p>

                <ul className="text-gray-700 space-y-4">
                    <li>
                        <strong>João Oliveira:</strong>{' '}
                        <a href="mailto:jvzeris@gmail.com" className="text-blue-600 hover:underline">
                            jvzeris@gmail.com
                        </a>
                    </li>
                    <li>
                        <strong>Raquel Marafon:</strong>{' '}
                        <a href="mailto:raquelbmarafon@gmail.com" className="text-blue-600 hover:underline">
                            raquelbmarafon@gmail.com
                        </a>
                    </li>
                </ul>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-300 py-6 text-center text-gray-600 text-sm shadow-inner relative z-10">
                © 2025 SSR-Projeto. Todos os direitos reservados.
            </footer>
        </div>
    )
}
