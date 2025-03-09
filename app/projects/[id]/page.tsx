import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, Globe, Calendar, Users, FileCode, Youtube } from "lucide-react"

// Proje verileri (gerçek uygulamada bir API veya veritabanından gelecek)
const projectDetails: Record<string, {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  images: string[]
  videoUrl?: string
  githubUrl?: string
  liveUrl?: string
  timeline: Array<{
    date: string
    title: string
    description: string
  }>
  team: Array<{
    name: string
    role: string
  }>
}> = {
  "1": {
    title: "OptiSense - Akıllı Optik Sensör Sistemi",
    description: "Lazer teknolojisi ve yapay zeka kullanarak malzeme analizini gerçekleştiren kompakt bir optik sensör sistemi. Endüstriyel kalite kontrol ve bilimsel araştırmalar için geliştirildi.",
    longDescription: `
      OptiSense, endüstriyel üretim hatlarında ve bilimsel araştırmalarda kullanılmak üzere tasarlanmış yenilikçi bir optik sensör sistemidir. 
      Sistem, lazer teknolojisi ve yapay zeka algoritmalarını kullanarak malzemelerin yapısal özelliklerini gerçek zamanlı olarak analiz edebilmektedir.

      ## Özellikler
      - Yüksek hassasiyetli lazer ölçüm sistemi
      - Gerçek zamanlı veri analizi ve raporlama
      - Endüstriyel standartlara uygun tasarım
      - Modüler ve genişletilebilir yapı
      - Uzaktan izleme ve kontrol imkanı

      ## Teknik Detaylar
      - 1550nm dalga boyunda fiber lazer
      - 0.1 mikron hassasiyet
      - 100kHz örnekleme hızı
      - Çoklu sensör desteği
      - Web tabanlı kontrol arayüzü
    `,
    technologies: ["Python", "TensorFlow", "Arduino", "Laser Optics", "CAD Design"],
    category: "Optik & Elektronik",
    images: [
      "/projects/optisense/diagram.png",
      "/projects/optisense/interface.png",
      "/projects/optisense/hardware.png"
    ],
    videoUrl: "https://youtube.com/watch?v=demo",
    githubUrl: "https://github.com/username/optisense",
    timeline: [
      { date: "Ocak 2024", title: "Proje Başlangıcı", description: "Konsept tasarım ve fizibilite çalışmaları" },
      { date: "Şubat 2024", title: "Prototip Geliştirme", description: "İlk donanım prototipi ve yazılım geliştirme" },
      { date: "Mart 2024", title: "Test ve Optimizasyon", description: "Performans testleri ve iyileştirmeler" }
    ],
    team: [
      { name: "Gokhantan", role: "Proje Lideri & Fizik Mühendisi" },
      { name: "Ahmet Yılmaz", role: "Optik Sistemler Uzmanı" },
      { name: "Ayşe Demir", role: "Yazılım Geliştirici" }
    ]
  },
  "2": {
    title: "QuantumViz - Kuantum Sistemleri Görselleştirme",
    description: "Kuantum mekanik sistemlerini 3D olarak görselleştiren ve simüle eden web tabanlı bir platform. Öğrenciler ve araştırmacılar için eğitim aracı.",
    longDescription: `
      QuantumViz, kuantum mekaniğinin karmaşık kavramlarını görselleştirerek anlaşılır hale getiren yenilikçi bir eğitim ve araştırma platformudur.
      
      ## Özellikler
      - 3D kuantum sistem simülasyonları
      - İnteraktif deney ortamı
      - Gerçek zamanlı hesaplamalar
      - Çoklu kullanıcı desteği
      - Eğitim materyalleri entegrasyonu

      ## Teknik Detaylar
      - WebGL tabanlı 3D render motoru
      - Kuantum hesaplamaları için Python backend
      - Gerçek zamanlı veri akışı
      - Çevrimiçi işbirliği araçları
      - Eğitmen kontrol paneli
    `,
    technologies: ["React", "Three.js", "WebGL", "Node.js", "Python"],
    category: "Fizik & Yazılım",
    images: [
      "/projects/quantumviz/interface.png",
      "/projects/quantumviz/simulation.png",
      "/projects/quantumviz/collaboration.png"
    ],
    videoUrl: "https://youtube.com/watch?v=demo2",
    githubUrl: "https://github.com/username/quantumviz",
    liveUrl: "https://quantumviz-demo.com",
    timeline: [
      { date: "Aralık 2023", title: "Konsept Geliştirme", description: "Proje fikrinin olgunlaştırılması ve teknik araştırmalar" },
      { date: "Ocak 2024", title: "Prototip Geliştirme", description: "İlk simülasyon motorunun geliştirilmesi" },
      { date: "Şubat 2024", title: "Beta Sürüm", description: "Test kullanıcılarıyla ilk deneme sürümü" },
      { date: "Mart 2024", title: "Resmi Lansman", description: "Platformun eğitim kurumlarına sunulması" }
    ],
    team: [
      { name: "Gokhantan", role: "Fizik & Yazılım Geliştirici" },
      { name: "Dr. Mehmet Yıldız", role: "Kuantum Fizikçisi" },
      { name: "Zeynep Kaya", role: "UI/UX Tasarımcı" },
      { name: "Can Demir", role: "Frontend Geliştirici" }
    ]
  },
  "3": {
    title: "EcoEnergy - Yenilenebilir Enerji Monitörü",
    description: "Güneş panelleri ve rüzgar türbinleri için gerçek zamanlı verim analizi ve optimizasyon önerileri sunan IoT tabanlı sistem.",
    longDescription: `
      EcoEnergy, yenilenebilir enerji sistemlerinin verimliliğini artırmak için geliştirilmiş akıllı bir izleme ve optimizasyon platformudur.
      
      ## Özellikler
      - Gerçek zamanlı enerji üretim takibi
      - Hava durumu entegrasyonu
      - Yapay zeka destekli optimizasyon
      - Mobil uygulama desteği
      - Otomasyon senaryoları

      ## Teknik Detaylar
      - IoT sensör ağı
      - Bulut tabanlı veri analizi
      - Makine öğrenimi modelleri
      - REST API
      - Gerçek zamanlı bildirimler
    `,
    technologies: ["IoT", "React", "ESP32", "Machine Learning", "Solar Tech"],
    category: "Enerji & IoT",
    images: [
      "/projects/ecoenergy/dashboard.png",
      "/projects/ecoenergy/hardware.png",
      "/projects/ecoenergy/mobile.png"
    ],
    liveUrl: "https://ecoenergy-monitor.com",
    timeline: [
      { date: "Kasım 2023", title: "Proje Başlangıcı", description: "IoT sistem tasarımı ve planlama" },
      { date: "Aralık 2023", title: "Donanım Geliştirme", description: "Sensör sistemlerinin kurulumu" },
      { date: "Ocak 2024", title: "Yazılım Geliştirme", description: "Dashboard ve mobil uygulama geliştirme" },
      { date: "Şubat 2024", title: "Saha Testleri", description: "Pilot bölgede sistem testleri" }
    ],
    team: [
      { name: "Gokhantan", role: "Proje Yöneticisi & IoT Uzmanı" },
      { name: "Ali Yılmaz", role: "Elektronik Mühendisi" },
      { name: "Seda Demir", role: "Yazılım Geliştirici" },
      { name: "Burak Şahin", role: "Veri Bilimci" }
    ]
  }
  // Diğer projeler için benzer detaylar eklenebilir...
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectDetails[params.id]

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Geri Dönüş Linki */}
      <Link
        href="/projects"
        className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Tüm Projeler
      </Link>

      {/* Proje Başlığı */}
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      
      {/* Kategori ve Teknolojiler */}
      <div className="mb-8">
        <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100 rounded-full mr-2">
          {project.category}
        </span>
        <div className="mt-4 flex flex-wrap gap-2">
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

      {/* Proje Görselleri */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((image, index) => (
            <div key={index} className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                [Proje Görseli {index + 1}]
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video */}
      {project.videoUrl && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Youtube className="w-6 h-6 mr-2 text-red-500" />
            Proje Videosu
          </h2>
          <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              [Proje Videosu]
            </div>
          </div>
        </div>
      )}

      {/* Detaylı Açıklama */}
      <div className="prose dark:prose-invert max-w-none mb-12">
        <div className="whitespace-pre-wrap">{project.longDescription}</div>
      </div>

      {/* Zaman Çizelgesi */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Calendar className="w-6 h-6 mr-2 text-blue-500" />
          Proje Zaman Çizelgesi
        </h2>
        <div className="space-y-4">
          {project.timeline.map((item, index) => (
            <div key={index} className="flex">
              <div className="flex-none w-32 text-sm text-gray-500">{item.date}</div>
              <div className="flex-1 border-l-2 border-gray-200 pl-4 pb-4">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ekip */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Users className="w-6 h-6 mr-2 text-blue-500" />
          Proje Ekibi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.team.map((member, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <h3 className="font-medium">{member.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bağlantılar */}
      <div className="flex space-x-4">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          >
            <Github className="w-5 h-5 mr-2" />
            Kaynak Kodu Görüntüle
          </Link>
        )}
      </div>
    </div>
  )
} 