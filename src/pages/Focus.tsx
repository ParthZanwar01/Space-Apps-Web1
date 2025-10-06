import { Target, AlertTriangle, Shield } from 'lucide-react';

export default function Focus() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/ourFocusBg.png)',
            filter: 'brightness(0.25)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/90"></div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">Our Focus</h1>
          <div className="w-20 h-1 bg-blue-400 mb-8"></div>
          <p className="text-2xl text-gray-200 leading-relaxed">
            Strategic prioritization of high-risk debris in critical orbital zones to maximize safety impact
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
          <h2 className="text-4xl font-bold mb-12 text-center">Priority Targets</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border-l-4 border-red-500">
              <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Defunct Satellites</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Large, non-functional satellites pose the greatest collision risk due to their size and unpredictable behavior.
              </p>
              <div className="space-y-2 text-gray-400">
                <p><span className="text-red-500 font-bold">1,500+</span> defunct satellites in LEO</p>
                <p><span className="text-red-500 font-bold">500kg-8000kg</span> typical mass range</p>
                <p><span className="text-red-500 font-bold">High</span> fragmentation potential</p>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border-l-4 border-yellow-600">
              <AlertTriangle className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Rocket Bodies</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Spent upper stages contain residual fuel and pressurized systems that can explode, creating thousands of fragments.
              </p>
              <div className="space-y-2 text-gray-400">
                <p><span className="text-yellow-600 font-bold">2,000+</span> rocket bodies orbiting</p>
                <p><span className="text-yellow-600 font-bold">1-15 tons</span> typical mass</p>
                <p><span className="text-yellow-600 font-bold">Critical</span> explosion risk</p>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border-l-4 border-blue-400">
              <AlertTriangle className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Collision Fragments</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Debris from previous collisions travels at high velocities and is difficult to track accurately.
              </p>
              <div className="space-y-2 text-gray-400">
                <p><span className="text-blue-400 font-bold">30,000+</span> tracked fragments</p>
                <p><span className="text-blue-400 font-bold">10cm-1m</span> size range</p>
                <p><span className="text-blue-400 font-bold">28,000 km/h</span> typical velocity</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Risk Assessment Methodology</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              ORCA's AI-powered risk assessment evaluates multiple factors to prioritize removal targets, ensuring maximum safety impact per mission.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Target className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-gray-400">Collision Probability</p>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-gray-400">Object Mass & Size</p>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-gray-400">Orbital Density</p>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-gray-400">Strategic Value</p>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Critical Orbital Zones</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="w-12 h-12 text-blue-400 mr-4" />
                <h3 className="text-3xl font-bold">Protected Corridors</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                ORCA focuses on orbital altitudes with the highest concentration of active satellites and strategic importance for global infrastructure.
              </p>
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2 text-blue-400">LEO Communication Belt</h4>
                  <p className="text-gray-400 mb-2">Altitude: 400-600 km</p>
                  <p className="text-gray-400">Home to major satellite constellations (Starlink, OneWeb) providing global internet coverage</p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2 text-green-500">Earth Observation Zone</h4>
                  <p className="text-gray-400 mb-2">Altitude: 600-800 km</p>
                  <p className="text-gray-400">Critical for climate monitoring, disaster response, and scientific research satellites</p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2 text-yellow-600">Sun-Synchronous Orbit</h4>
                  <p className="text-gray-400 mb-2">Altitude: 700-800 km</p>
                  <p className="text-gray-400">Optimal for reconnaissance and Earth imaging with consistent lighting conditions</p>
                </div>
              </div>
            </div>
            <div
              className="h-[600px] bg-cover bg-center rounded-lg border border-gray-800"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}
            ></div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">ISS Protection Zone</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Special attention is given to the International Space Station orbital altitude (408 km), where debris poses direct risks to astronaut safety.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              ORCA maintains continuous monitoring of this zone, with priority protocols for rapid response to emerging threats within 50 km of the ISS orbital path.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Mission Selection Criteria</h2>
          <div className="w-20 h-1 bg-blue-400 mb-8"></div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
            <p>
              Each debris removal mission is carefully planned to maximize safety benefits while minimizing operational risks. Our selection algorithm evaluates hundreds of potential targets daily.
            </p>
            <p>
              Priority is given to objects that pose imminent collision threats to active satellites, particularly those supporting critical infrastructure like communications, navigation, and Earth observation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-red-500">High Priority</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Objects with collision probability &gt;1% within 7 days</li>
                <li>• Large debris (&gt;1 ton) in high-traffic orbits</li>
                <li>• Tumbling satellites with unpredictable trajectories</li>
                <li>• Rocket bodies with explosion risk</li>
              </ul>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Medium Priority</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Defunct satellites in moderate-density orbits</li>
                <li>• Collision fragments &gt;50cm in protected zones</li>
                <li>• Objects approaching high-value orbital corridors</li>
                <li>• Debris clusters from previous incidents</li>
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
          <h2 className="text-4xl font-bold mb-8">Impact Measurement</h2>
          <div className="w-20 h-1 bg-blue-400 mb-8"></div>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Success is measured not just by objects removed, but by the reduction in overall collision risk across protected orbital zones.
          </p>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-center">Projected Impact by Year 5</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-green-500 mb-3">-40%</p>
                <p className="text-gray-300">Collision Risk Reduction</p>
                <p className="text-gray-500 text-sm mt-2">in priority orbital zones</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-400 mb-3">500+</p>
                <p className="text-gray-300">High-Risk Objects Removed</p>
                <p className="text-gray-500 text-sm mt-2">preventing potential cascades</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-yellow-600 mb-3">$2B+</p>
                <p className="text-gray-300">Satellite Assets Protected</p>
                <p className="text-gray-500 text-sm mt-2">from collision damage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
