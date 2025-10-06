import { Calendar, CheckCircle, Clock } from 'lucide-react';

export default function Development() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: 'brightness(0.25)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/90"></div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">ORCA Development Plan</h1>
          <div className="w-20 h-1 bg-red-500 mb-8"></div>
          <p className="text-2xl text-gray-200 leading-relaxed">
            A systematic three-phase approach to deploying comprehensive orbital recycling and manufacturing infrastructure
          </p>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(/images/predictiveMaintainence.png)'
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-red-500 mr-4" />
                <h2 className="text-3xl font-bold">Phase 1: Proof-of-Concept (2025–2029, Est. Cost ~$5–10 M)</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                This initial phase focuses on R&D and early prototyping. We'll conduct lab demonstrations of debris capture technologies and microgravity experiments of our melting and printing processes. By around 2028, the goal is to launch a small "seed factory" CubeSat as an orbital demo.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-red-400">Key Milestones</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Lab demonstrations of debris capture technologies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Microgravity experiments on parabolic flights/ISS</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Launch "seed factory" CubeSat orbital demo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Validate core technology on small scale</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-red-400">Funding Sources</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• NASA SBIR grants</li>
                    <li>• ESA technology development programs</li>
                    <li>• Seed investments from early-stage investors</li>
                    <li>• Small contracts with agencies for demo missions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-blue-400 mr-4" />
                <h2 className="text-3xl font-bold">Phase 2: ORCA Pilot Hub Deployment (2030–2035, Est. Cost ~$100–250 M)</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Phase 2 is about full-scale implementation in LEO. We plan to launch the first full ORCA hub by around 2032, which will include the processing module, robotic arms, and all core systems. We will demonstrate end-to-end operations: capture actual orbital debris, refine the metal, and 3D-print a usable structure by roughly 2033.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Key Milestones</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Launch first full ORCA hub to LEO</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Deploy large tug satellites and micro-debris drones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Demonstrate first in-orbit 3D printing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Begin commercial service operations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Funding Sources</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Government contracts (NASA/DoD debris removal)</li>
                    <li>• ESA Zero Debris initiatives support</li>
                    <li>• Venture capital rounds (Series A/B)</li>
                    <li>• Strategic corporate partners</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border-l-4 border-yellow-600">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-yellow-600 mr-4" />
                <h2 className="text-3xl font-bold">Phase 3: Scaled Operations & Expansion (2036–2045, Est. Cost ~$300–500 M)</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Phase 3 is about expansion into an "orbital construction yard" era. We will enhance the original LEO hub with more modules, deploy a second hub in a different orbit (e.g., GEO), and develop new revenue models. The goal is to undertake large-scale construction projects like solar power satellites and establish a presence in lunar orbit.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-600">Key Milestones</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Enhance original LEO hub with more modules</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Deploy second hub in different orbit (GEO)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Develop new revenue models and joint ventures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Undertake large-scale construction projects</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-600">Funding Sources</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Public markets (IPO)</li>
                    <li>• Large private investment rounds</li>
                    <li>• Joint ventures with major aerospace companies</li>
                    <li>• Government contracts for large projects</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gray-900">
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Risk Management & Iterative Development</h2>
          <div className="w-20 h-1 bg-red-500 mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Each phase of ORCA's development includes rigorous contingency planning for technical challenges, regulatory delays, and market conditions. We employ an iterative development approach, allowing for continuous course corrections based on real-world testing results and stakeholder feedback. This ensures adaptability and resilience throughout the mission lifecycle.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Strategic partnerships with established aerospace contractors mitigate manufacturing and launch risks, while close collaboration with international space agencies ensures alignment with evolving regulatory frameworks and global space safety standards. Our proactive risk management strategy is integral to ORCA's long-term success and sustainability.
          </p>
        </div>
      </section>
    </div>
  );
}
