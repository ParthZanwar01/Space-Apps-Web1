import { Sparkles, Factory, Network, Rocket } from 'lucide-react';

export default function Future() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/longTermVisionBg.png)',
            filter: 'brightness(0.25)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/90"></div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">Future</h1>
          <div className="w-20 h-1 bg-yellow-600 mb-8"></div>
          <p className="text-2xl text-gray-200 leading-relaxed">
            From debris removal to comprehensive orbital traffic management and in-space manufacturing
          </p>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Next Decade Vision (2025-2035)</h2>

          <div className="space-y-12">
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              {/* Traffic Management Background */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-5 rounded-lg"
                style={{
                  backgroundImage: 'url(/images/trafficManagement.png)'
                }}
              ></div>
              <div>
                <div className="flex items-center mb-6">
                  <Network className="w-12 h-12 text-blue-400 mr-4" />
                  <h3 className="text-3xl font-bold">Orbital Traffic Management</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  ORCA evolves beyond debris removal to become a comprehensive orbital traffic control system, coordinating movements across thousands of active satellites.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Real-time collision prediction for entire satellite constellations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Autonomous coordination of avoidance maneuvers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Optimal path planning for new launches and orbital transfers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>AI-driven traffic flow optimization</span>
                  </li>
                </ul>
              </div>
              <div
                className="h-96 bg-cover bg-center rounded-lg border border-gray-800"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800)'
                }}
              ></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className="h-96 bg-cover bg-center rounded-lg border border-gray-800 order-2 md:order-1"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/2166729/pexels-photo-2166729.jpeg?auto=compress&cs=tinysrgb&w=800)'
                }}
              ></div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <Sparkles className="w-12 h-12 text-yellow-600 mr-4" />
                  <h3 className="text-3xl font-bold">Predictive Maintenance</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Advanced AI monitors satellite health across entire fleets, predicting failures before they occur and preventing new debris creation.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Early detection of satellite anomalies and malfunctions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Proactive deorbiting recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Battery and propulsion system health monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Collision risk assessment for failing satellites</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">In-Space Manufacturing Revolution</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center mb-6">
                <Factory className="w-12 h-12 text-green-500 mr-4" />
                <h3 className="text-3xl font-bold">Debris as Resource</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Transform the debris problem into a resource opportunity. Captured objects become raw material for orbital manufacturing operations.
              </p>
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2 text-green-400">Material Recovery</h4>
                  <p className="text-gray-400">
                    Extract and process aluminum, titanium, and electronics from defunct satellites for reuse in orbit
                  </p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2 text-blue-400">On-Orbit Assembly</h4>
                  <p className="text-gray-400">
                    Build new satellite components and structures from recovered materials, eliminating launch costs
                  </p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2 text-yellow-600">Propellant Production</h4>
                  <p className="text-gray-400">
                    Process materials for use as reaction mass in electric propulsion systems
                  </p>
                </div>
              </div>
            </div>
            <div
              className="h-[600px] bg-cover bg-center rounded-lg border border-gray-800"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}
            ></div>
          </div>

          <div className="bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Economic Impact of Space Manufacturing</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-green-500 mb-3">-80%</p>
                <p className="text-gray-300">Launch Cost Reduction</p>
                <p className="text-gray-500 text-sm mt-2">for satellite components</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-400 mb-3">$50B</p>
                <p className="text-gray-300">Market Value by 2035</p>
                <p className="text-gray-500 text-sm mt-2">orbital manufacturing industry</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-yellow-600 mb-3">100%</p>
                <p className="text-gray-300">Resource Circularity</p>
                <p className="text-gray-500 text-sm mt-2">sustainable space economy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Beyond Low Earth Orbit</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="h-96 bg-cover bg-center rounded-lg border border-gray-800"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}
            ></div>
            <div>
              <div className="flex items-center mb-6">
                <Rocket className="w-12 h-12 text-red-500 mr-4" />
                <h3 className="text-3xl font-bold">Deep Space Applications</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                ORCA technology extends to lunar orbit, GEO, and cislunar space as humanity's presence beyond Earth expands.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Lunar orbit debris monitoring for Artemis missions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>GEO satellite servicing and end-of-life disposal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Cislunar space traffic management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Deep space mission support infrastructure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Long-Term Vision (2035-2050)</h2>
          <div className="w-20 h-1 bg-yellow-600 mb-8"></div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
            <p>
              By 2050, ORCA aims to establish a truly sustainable space ecosystem where debris is no longer a growing threat but a managed resource. Every object in orbit is tracked, every collision prevented, and every defunct satellite recovered for reuse.
            </p>
            <p>
              This vision requires global cooperation, advanced autonomous systems, and a fundamental shift in how we think about space operations. ORCA leads this transformation, demonstrating that economic growth and environmental responsibility can coexist in orbital operations.
            </p>
            <p>
              The ultimate goal: enable humanity's permanent presence beyond Earth by ensuring orbital space remains accessible, safe, and sustainable for generations to come.
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border-2 border-yellow-600">
            <h3 className="text-3xl font-bold mb-6 text-center">Mission Statement for 2050</h3>
            <p className="text-2xl text-gray-200 leading-relaxed text-center italic">
              "Create a self-sustaining orbital infrastructure where space debris becomes a resource, not a threat, enabling humanity's expansion across the solar system."
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2166722/pexels-photo-2166722.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technology Roadmap</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border-t-4 border-blue-400">
              <h3 className="text-2xl font-bold mb-4">2025-2030</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Advanced AI detection systems</li>
                <li>• Autonomous capture mechanisms</li>
                <li>• Fleet coordination protocols</li>
                <li>• Initial material processing</li>
                <li>• LEO traffic management</li>
              </ul>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border-t-4 border-yellow-600">
              <h3 className="text-2xl font-bold mb-4">2030-2040</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• On-orbit manufacturing facilities</li>
                <li>• Lunar orbit operations</li>
                <li>• GEO servicing capabilities</li>
                <li>• Advanced recycling systems</li>
                <li>• Cislunar traffic control</li>
              </ul>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4">2040-2050</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Fully autonomous operations</li>
                <li>• Deep space capabilities</li>
                <li>• Complete resource circularity</li>
                <li>• Mars orbit preparation</li>
                <li>• Interplanetary coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
