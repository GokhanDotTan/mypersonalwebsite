import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    { id: 1, title: "Project 1", description: "Web Development" },
    { id: 2, title: "Project 2", description: "Mobile App" },
    { id: 3, title: "Project 3", description: "UI/UX Design" },
    { id: 4, title: "Project 4", description: "E-commerce" },
    { id: 5, title: "Project 5", description: "Dashboard" },
    { id: 6, title: "Project 6", description: "Landing Page" },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Portfolyo</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link href={`/portfolio/${project.id}`} key={project.id}>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=Project+${project.id}`}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

