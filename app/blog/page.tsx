import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Modern Web Geliştirme Teknolojileri",
    excerpt: "Next.js, React ve TypeScript kullanarak modern web uygulamaları nasıl geliştirilir?",
    date: "8 Mart 2024",
    category: "Web Geliştirme"
  },
  {
    id: "2",
    title: "Yapay Zeka ve Makine Öğrenimi",
    excerpt: "Yapay zeka teknolojilerinin günümüzdeki kullanım alanları ve geleceği",
    date: "1 Mart 2024",
    category: "Yapay Zeka"
  },
  {
    id: "3",
    title: "UI/UX Tasarım Prensipleri",
    excerpt: "Kullanıcı deneyimini iyileştirmek için uygulanması gereken temel tasarım prensipleri",
    date: "20 Şubat 2024",
    category: "Tasarım"
  }
]

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Yazıları</h1>
      
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.id}`} className="hover:text-blue-500 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
                >
                  Devamını Oku
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

