export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Hakkımda</h1>
      
      <div className="space-y-8">
        {/* Kişisel Bilgiler */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Merhaba, Ben Gokhantan! 👋</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Yazılım geliştirme konusunda tutkulu bir geliştiriciyim. Modern web teknolojileri ve
            yenilikçi çözümler üretme konusunda sürekli kendimi geliştirmeye çalışıyorum.
          </p>
        </section>

        {/* Yetenekler */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Yeteneklerim</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Frontend Geliştirme</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Backend Geliştirme</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Node.js, Express, PostgreSQL, MongoDB
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Araçlar & DevOps</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Git, Docker, AWS, CI/CD
              </p>
            </div>
          </div>
        </section>

        {/* Deneyim */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Deneyim</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="font-medium">Kıdemli Yazılım Geliştirici</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Teknoloji Şirketi A.Ş.</p>
              <p className="text-sm text-gray-500">2020 - Günümüz</p>
            </div>
            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="font-medium">Yazılım Geliştirici</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Web Çözümleri Ltd.</p>
              <p className="text-sm text-gray-500">2018 - 2020</p>
            </div>
          </div>
        </section>

        {/* Eğitim */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Eğitim</h2>
          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-medium">Bilgisayar Mühendisliği</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Örnek Üniversitesi</p>
            <p className="text-sm text-gray-500">2014 - 2018</p>
          </div>
        </section>

        {/* İlgi Alanları */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">İlgi Alanlarım</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
              Web Geliştirme
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
              Yapay Zeka
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
              Açık Kaynak
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
              UI/UX Tasarım
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}

