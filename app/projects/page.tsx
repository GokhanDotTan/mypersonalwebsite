import Link from "next/link"
import { Github, Globe, Cpu, Lightbulb, Atom, Eye, Rocket, Microscope, ArrowRight } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  category: string
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "OptiSense - Akıllı Optik Sensör Sistemi",
    description: "Lazer teknolojisi ve yapay zeka kullanarak malzeme analizini gerçekleştiren kompakt bir optik sensör sistemi. Endüstriyel kalite kontrol ve bilimsel araştırmalar için geliştirildi.",
    technologies: ["Python", "TensorFlow", "Arduino", "Laser Optics", "CAD Design"],
    category: "Optik & Elektronik",
    imageUrl: "/projects/optisense.jpg",
    githubUrl: "https://github.com/username/optisense"
  },
  {
    id: "2",
    title: "QuantumViz - Kuantum Sistemleri Görselleştirme",
    description: "Kuantum mekanik sistemlerini 3D olarak görselleştiren ve simüle eden web tabanlı bir platform. Öğrenciler ve araştırmacılar için eğitim aracı.",
    technologies: ["React", "Three.js", "WebGL", "Node.js", "Python"],
    category: "Fizik & Yazılım",
    imageUrl: "/projects/quantumviz.jpg",
    githubUrl: "https://github.com/username/quantumviz",
    liveUrl: "https://quantumviz-demo.com"
  },
  {
    id: "3",
    title: "EcoEnergy - Yenilenebilir Enerji Monitörü",
    description: "Güneş panelleri ve rüzgar türbinleri için gerçek zamanlı verim analizi ve optimizasyon önerileri sunan IoT tabanlı sistem.",
    technologies: ["IoT", "React", "ESP32", "Machine Learning", "Solar Tech"],
    category: "Enerji & IoT",
    imageUrl: "/projects/ecoenergy.jpg",
    liveUrl: "https://ecoenergy-monitor.com"
  },
  {
    id: "4",
    title: "NanoLab - Malzeme Analiz Platformu",
    description: "Nanoteknoloji ve malzeme bilimi araştırmaları için veri analizi ve görselleştirme platformu. Deneysel verilerin otomatik işlenmesi ve raporlanması.",
    technologies: ["Python", "Electron", "SQL", "Data Analysis", "Material Science"],
    category: "Bilimsel Yazılım",
    imageUrl: "/projects/nanolab.jpg",
    githubUrl: "https://github.com/username/nanolab"
  },
  {
    id: "5",
    title: "SmartScope - Dijital Mikroskop Sistemi",
    description: "Yapay zeka destekli görüntü işleme ve otomatik analiz özellikleri olan açık kaynaklı dijital mikroskop projesi.",
    technologies: ["Computer Vision", "Raspberry Pi", "3D Printing", "OpenCV", "AI"],
    category: "Optik & Yapay Zeka",
    imageUrl: "/projects/smartscope.jpg",
    githubUrl: "https://github.com/username/smartscope"
  },
  {
    id: "6",
    title: "PhysicsEngine - Fizik Simülasyon Motoru",
    description: "Gerçek zamanlı fizik simülasyonları için geliştirilen yüksek performanslı motor. Eğitim ve araştırma amaçlı kullanım için tasarlandı.",
    technologies: ["C++", "OpenGL", "CUDA", "Physics", "Parallel Computing"],
    category: "Fizik & Yazılım",
    imageUrl: "/projects/physicsengine.jpg",
    githubUrl: "https://github.com/username/physicsengine",
    liveUrl: "https://physics-engine-demo.com"
  }
]

const categories = Array.from(new Set(projects.map(project => project.category)))

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Projeler</h1>
      
      {/* Kategori Filtreleri */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Proje Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.id} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video relative bg-gray-100 dark:bg-gray-700 p-4">
              <div className="absolute inset-0 flex items-center justify-center">
                {project.category.includes('Optik') && <Eye className="w-12 h-12 text-blue-500" />}
                {project.category.includes('Fizik') && <Atom className="w-12 h-12 text-purple-500" />}
                {project.category.includes('Enerji') && <Lightbulb className="w-12 h-12 text-yellow-500" />}
                {project.category.includes('Bilimsel') && <Microscope className="w-12 h-12 text-green-500" />}
                {!project.category.match(/Optik|Fizik|Enerji|Bilimsel/) && <Rocket className="w-12 h-12 text-red-500" />}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <Link href={`/projects/${project.id}`} className="block group">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h2>
              </Link>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white inline-flex items-center"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Kaynak Kod
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white inline-flex items-center"
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="text-blue-500 hover:text-blue-600 inline-flex items-center text-sm font-medium"
                >
                  Detaylar
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 