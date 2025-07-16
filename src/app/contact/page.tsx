import Link from 'next/link'

export default function ContactPage() {
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
                <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-300 pb-2">Contato</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* João */}
                    <div className="flex items-center bg-white rounded-lg shadow-md p-6 space-x-4">
                        <img
                            src="https://avatars.githubusercontent.com/u/129817464?v=4"
                            alt="João Oliveira"
                            className="w-20 h-20 rounded-full border-2 border-blue-300"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">João Oliveira</h3>
                            <p className="text-sm text-gray-700">📧 jvzeris@gmail.com</p>
                            <p className="text-sm text-gray-700">🔗 <a href="https://github.com/jvzeris" className="text-blue-600 hover:underline" target="_blank">GitHub</a></p>
                            <p className="text-sm text-gray-700">📄 <a href="http://lattes.cnpq.br/7484388137749793" className="text-blue-600 hover:underline" target="_blank">Lattes</a></p>
                        </div>
                    </div>

                    {/* Raquel */}
                    <div className="flex items-center bg-white rounded-lg shadow-md p-6 space-x-4">
                        <img
                            src="https://avatars.githubusercontent.com/u/138199551?v=4"
                            alt="Raquel Marafon"
                            className="w-20 h-20 rounded-full border-2 border-purple-300"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Raquel Marafon</h3>
                            <p className="text-sm text-gray-700">📧 raquelbmarafon@gmail.com</p>
                            <p className="text-sm text-gray-700">🔗 <a href="https://github.com/raquelmarafon" className="text-blue-600 hover:underline" target="_blank">GitHub</a></p>
                            <p className="text-sm text-gray-700">📄 <a href="https://lattes.cnpq.br/1465022168062768" className="text-blue-600 hover:underline" target="_blank">Lattes</a></p>
                        </div>
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
