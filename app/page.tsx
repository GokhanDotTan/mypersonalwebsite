import Link from "next/link"
import { ArrowRight, Code, Github, Instagram, Linkedin, Twitter, User, Briefcase, Image, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 bg-[url('/code-bg.png')] opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Merhaba, Ben <span className="text-blue-500">Gokhantan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Full Stack Geliştirici & Teknoloji Tutkunu
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Projelerimi Gör
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-medium transition-all"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Öne Çıkanlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/about" className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <User className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">Hakkımda</h3>
                <p className="text-gray-600 dark:text-gray-300">Deneyimlerim ve yeteneklerim hakkında detaylı bilgi.</p>
              </div>
            </Link>
            <Link href="/projects" className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Code className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">Projeler</h3>
                <p className="text-gray-600 dark:text-gray-300">Geliştirdiğim projeler ve katkıda bulunduğum çalışmalar.</p>
              </div>
            </Link>
            <Link href="/blog" className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Briefcase className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">Blog</h3>
                <p className="text-gray-600 dark:text-gray-300">Teknoloji ve yazılım üzerine yazılarım.</p>
              </div>
            </Link>
            <Link href="/photos" className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Image className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">Fotoğraflar</h3>
                <p className="text-gray-600 dark:text-gray-300">Fotoğraf koleksiyonum ve çalışmalarım.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Son Blog Yazıları</h2>
            <Link href="/blog" className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center">
              Tüm Yazılar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <article key={post} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>8 Mart 2024</span>
                    <span className="mx-2">•</span>
                    <span>5 dk okuma</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 hover:text-blue-500 transition-colors">
                    <Link href="/blog/1">Modern Web Geliştirme Teknolojileri</Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Next.js, React ve TypeScript kullanarak modern web uygulamaları nasıl geliştirilir?
                  </p>
                  <Link
                    href="/blog/1"
                    className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
                  >
                    Devamını Oku
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bir Projeniz mi Var?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Beraber çalışmak için iletişime geçin.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-500 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            İletişime Geç
          </Link>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Sosyal Medya</h2>
          <div className="flex justify-center space-x-8">
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-8 h-8" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-8 h-8" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-8 h-8" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

