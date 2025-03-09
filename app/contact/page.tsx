import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">İletişim</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* İletişim Bilgileri */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="w-6 h-6 mt-1 mr-4 text-blue-500" />
              <div>
                <h3 className="font-medium mb-1">E-posta</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  iletisim@gokhantan.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-6 h-6 mt-1 mr-4 text-blue-500" />
              <div>
                <h3 className="font-medium mb-1">Telefon</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +90 (555) 123 45 67
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mt-1 mr-4 text-blue-500" />
              <div>
                <h3 className="font-medium mb-1">Adres</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  İstanbul, Türkiye
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* İletişim Formu */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Mesaj Gönder</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Adınız
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                E-posta Adresiniz
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Konu
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Mesaj Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

