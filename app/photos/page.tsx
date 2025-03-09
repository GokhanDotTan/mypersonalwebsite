interface Photo {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  date: string
}

const photos: Photo[] = [
  {
    id: "1",
    title: "Doğa Manzarası",
    description: "Güneş batarken çekilmiş muhteşem bir doğa manzarası",
    imageUrl: "/photos/nature-1.jpg",
    category: "Doğa",
    date: "8 Mart 2024"
  },
  {
    id: "2",
    title: "Şehir Yaşamı",
    description: "Modern şehir yaşamından bir kesit",
    imageUrl: "/photos/city-1.jpg",
    category: "Şehir",
    date: "1 Mart 2024"
  },
  {
    id: "3",
    title: "Mimari Detaylar",
    description: "Tarihi bir yapının mimari detayları",
    imageUrl: "/photos/architecture-1.jpg",
    category: "Mimari",
    date: "20 Şubat 2024"
  },
  {
    id: "4",
    title: "Sokak Fotoğrafçılığı",
    description: "Günlük yaşamdan samimi bir an",
    imageUrl: "/photos/street-1.jpg",
    category: "Sokak",
    date: "15 Şubat 2024"
  },
  {
    id: "5",
    title: "Portre",
    description: "Karakteristik bir portre çalışması",
    imageUrl: "/photos/portrait-1.jpg",
    category: "Portre",
    date: "10 Şubat 2024"
  },
  {
    id: "6",
    title: "Minimalizm",
    description: "Minimal kompozisyon çalışması",
    imageUrl: "/photos/minimal-1.jpg",
    category: "Minimal",
    date: "5 Şubat 2024"
  }
]

export default function PhotosPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Fotoğraf Galerisi</h1>
      
      {/* Kategori Filtreleri */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
            Tümü
          </button>
          {Array.from(new Set(photos.map(photo => photo.category))).map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Fotoğraf Galerisi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <article key={photo.id} className="group">
            <div className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                [Fotoğraf]
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center text-white p-4">
                    <h2 className="text-xl font-semibold mb-2">{photo.title}</h2>
                    <p className="text-sm text-gray-300">{photo.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{photo.date}</span>
                <span className="text-sm text-gray-500">{photo.category}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 