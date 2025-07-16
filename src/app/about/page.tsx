import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 to-blue-100 relative overflow-hidden">
            {/* Navbar */}
            <nav className="bg-gradient-to-r from-purple-300 to-sky-300 shadow-md relative z-10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-gray-800">SSR-Projeto</h1>
                    <ul className="flex space-x-6 text-gray-800 font-semibold">
                        <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-black transition-colors">Sobre</Link></li>
                        <li><Link href="/contact" className="hover:text-black transition-colors">Contato</Link></li>
                    </ul>
                </div>
            </nav>

            {/* Conteúdo */}
            <main className="flex-grow max-w-4xl mx-auto px-6 py-12 sm:px-4 space-y-10 relative z-10">
                <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-purple-300 pb-2">Sobre o Projeto</h2>

                <p className="text-gray-800 text-lg leading-relaxed">
                    Este é um projeto de blog com Server-Side Rendering (SSR) desenvolvido em Next.js. Ele busca integrar posts manuais e notícias automáticas de tecnologia, com foco em performance, organização e aprendizado prático.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-300 pb-2">Desenvolvedores</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* João */}
                    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                        <img
                            src="https://avatars.githubusercontent.com/u/129817464?v=4"
                            alt="João Oliveira"
                            className="w-32 h-32 rounded-full border-4 border-blue-300 mb-4"
                        />
                        <h4 className="text-xl font-semibold text-gray-800">João Oliveira</h4>
                        <p className="text-sm text-gray-700">Email: <a href="mailto:jvzeris@gmail.com" className="text-blue-600 hover:underline">jvzeris@gmail.com</a></p>
                        <p className="text-sm text-gray-700">GitHub: <a href="https://github.com/jvzeris" target="_blank" className="text-blue-600 hover:underline">github.com/jvzeris</a></p>
                        <p className="text-sm text-gray-700">Lattes: <a href="http://lattes.cnpq.br/7484388137749793" target="_blank" className="text-blue-600 hover:underline">Ver currículo</a></p>
                    </div>

                    {/* Raquel */}
                    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                        <img
                            src="https://avatars.githubusercontent.com/u/138199551?v=4"
                            alt="Raquel Marafon"
                            className="w-32 h-32 rounded-full border-4 border-purple-300 mb-4"
                        />
                        <h4 className="text-xl font-semibold text-gray-800">Raquel Marafon</h4>
                        <p className="text-sm text-gray-700">Email: <a href="mailto:raquelbmarafon@gmail.com" className="text-blue-600 hover:underline">raquelbmarafon@gmail.com</a></p>
                        <p className="text-sm text-gray-700">GitHub: <a href="https://github.com/raquelmarafon" target="_blank" className="text-blue-600 hover:underline">github.com/raquelmarafon</a></p>
                        <p className="text-sm text-gray-700">Lattes: <a href="https://lattes.cnpq.br/1465022168062768" target="_blank" className="text-blue-600 hover:underline">Ver currículo</a></p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-300 py-6 text-center text-gray-600 text-sm shadow-inner relative z-10">
                © 2025 SSR-Projeto. Todos os direitos reservados.
            </footer>
        </div>
    )
}
