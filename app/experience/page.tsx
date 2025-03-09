export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Deneyimlerim</h1>
        <div className="max-w-3xl mx-auto">
          <div className="border-l-2 border-gray-700 pl-8 space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-white">Senior Developer</h3>
              <p className="text-primary mb-2">2020 - Present</p>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                sed erat molestie vehicula.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Web Developer</h3>
              <p className="text-primary mb-2">2018 - 2020</p>
              <p className="text-gray-300">
                Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse
                dictum feugiat nisl ut dapibus.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Junior Developer</h3>
              <p className="text-primary mb-2">2016 - 2018</p>
              <p className="text-gray-300">
                Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor
                lectus condimentum laoreet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

