import { Layers, Recycle, Globe } from 'lucide-react';

export default function Scalability() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: 'brightness(0.25)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/90"></div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">Scalability & Sustainability</h1>
          <div className="w-20 h-1 bg-yellow-600 mb-8"></div>
          <p className="text-2xl text-gray-200 leading-relaxed">
            Modular architecture and circular economy principles enable exponential growth while protecting orbital environments
          </p>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/73909/mars-mars-rover-space-travel-robot-73909.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Scalable Architecture</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <Layers className="w-12 h-12 text-yellow-600 mr-4" />
                <h3 className="text-3xl font-bold">Modular Design</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Each ORCA unit operates independently while contributing to a distributed tracking network. This architecture enables rapid scaling from pilot operations to fleet deployment without redesigning core systems.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Standardized satellite bus design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Plug-and-play sensor packages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Distributed AI processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Autonomous coordination protocols</span>
                </li>
              </ul>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg border border-gray-800"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}
            ></div>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Network Effects</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Adding each unit to the fleet creates exponential improvements in coverage and capability. More satellites mean better triangulation, faster threat detection, and reduced response times across all orbital zones.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-600 mb-2">3x</p>
                <p className="text-gray-400">Coverage Improvement per Unit</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-400 mb-2">50%</p>
                <p className="text-gray-400">Cost Reduction at Scale</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-500 mb-2">10x</p>
                <p className="text-gray-400">Data Processing Speed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-red-500 mb-2">99%</p>
                <p className="text-gray-400">Orbital Coverage (15 units)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Environmental Sustainability</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div
              className="h-96 bg-cover bg-center rounded-lg border border-gray-800"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}
            ></div>
            <div>
              <div className="flex items-center mb-6">
                <Recycle className="w-12 h-12 text-green-500 mr-4" />
                <h3 className="text-3xl font-bold">Circular Economy</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Environmental sustainability is core to our mission. Captured debris follows one of two pathways based on composition and orbital mechanics.
              </p>
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2 text-green-400">Controlled Deorbit</h4>
                  <p className="text-gray-400">
                    Non-recoverable debris is safely deorbited for atmospheric burnup, eliminating hazards without creating additional pollution.
                  </p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2 text-blue-400">Material Recovery</h4>
                  <p className="text-gray-400">
                    Valuable materials (aluminum, titanium, electronics) are processed for in-space manufacturing, reducing launch costs for future missions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Zero-Debris Operations</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Every ORCA mission follows strict protocols to prevent creating additional debris. Capture mechanisms are designed for gentle, controlled contact that prevents fragmentation.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-green-500 mb-2">0</p>
                <p className="text-gray-400">New Debris Fragments Created</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-500 mb-2">100%</p>
                <p className="text-gray-400">Controlled Disposal Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-500 mb-2">5000+</p>
                <p className="text-gray-400">Objects Removed by Year 10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Global Deployment</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Globe className="w-12 h-12 text-blue-400 mr-4" />
                <h3 className="text-3xl font-bold">International Operations</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                ORCA's scalability extends beyond technology to global partnerships. Ground stations on six continents provide continuous communication and control capability.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Strategic partnerships with national space agencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Distributed ground control network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>24/7 mission operations centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Regional service centers for rapid response</span>
                </li>
              </ul>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg border border-gray-800"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}
            ></div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2166722/pexels-photo-2166722.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Long-Term Vision</h2>
          <div className="w-20 h-1 bg-yellow-600 mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            By Year 10, ORCA aims to operate a fleet of 50+ units providing comprehensive debris management across all critical orbital zones. This scale enables proactive threat mitigation rather than reactive cleanup.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            The sustainable business model supports continuous innovation, with revenues funding next-generation technologies including active debris prevention systems and in-space manufacturing capabilities that transform orbital waste into valuable resources.
          </p>
        </div>
      </section>
    </div>
  );
}
