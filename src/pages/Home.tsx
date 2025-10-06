export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-24 pb-32 px-4 overflow-hidden min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: 'brightness(0.3)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-gray-900"></div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
              Orbital Recycling and Construction Array
              <br />
              Technologies
            </h1>
            <div className="w-24 h-1 bg-yellow-600 mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              Orbital Recycling & Capture Apparatus - Transforming space debris into valuable resources through revolutionary in-orbit manufacturing
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mt-6">
              Pioneering sustainable space operations through debris recycling, metal refinement, and 3D printing in orbit
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-center">ORCA Mission Overview</h2>
          <div className="w-24 h-1 bg-red-500 mb-12 mx-auto"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Capture</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced gecko-inspired adhesive grippers and specialized drones capture space debris of all sizes, from micro-particles to large defunct satellites, using non-destructive methods.
              </p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Refine</h3>
              <p className="text-gray-300 leading-relaxed">
                  Electron Beam Cold-Hearth Melting (EBCHM) technology purifies mixed-metal space debris into high-quality alloys, achieving &gt;99.9% purity for aerospace-grade materials.
              </p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">Manufacture</h3>
              <p className="text-gray-300 leading-relaxed">
                Electron Beam Additive Manufacturing (EBAM) 3D prints large structures in orbit using recycled materials, creating space infrastructure at 5x lower cost than Earth launches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
