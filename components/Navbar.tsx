import Link from "next/link"

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Ana Sayfa
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900">
              Projeler
            </Link>
            <Link href="/photos" className="text-gray-700 hover:text-gray-900">
              Fotoğraflar
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              Hakkımda
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 