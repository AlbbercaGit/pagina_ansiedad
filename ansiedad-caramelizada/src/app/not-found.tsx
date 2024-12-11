import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Página no encontrada</h2>
      <p className="text-xl mb-8">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
      <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Volver al inicio
      </Link>
    </div>
  )
}

