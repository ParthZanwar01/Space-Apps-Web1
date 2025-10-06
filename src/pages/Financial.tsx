import { DollarSign, TrendingUp, PieChart } from 'lucide-react';

export default function Financial() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: 'brightness(0.25)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/90"></div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">Financial Plan</h1>
          <div className="w-20 h-1 bg-blue-400 mb-8"></div>
          <p className="text-2xl text-gray-200 leading-relaxed">
            Sustainable revenue model combining government contracts, commercial partnerships, and direct debris removal services
          </p>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2166473/pexels-photo-2166473.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Funding Requirements</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <DollarSign className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Seed Round</h3>
              <p className="text-4xl font-bold text-blue-400 mb-4">$15M</p>
              <p className="text-gray-300 mb-4">Years 1-2</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• R&D and prototype development</li>
                <li>• Team expansion</li>
                <li>• Ground testing facilities</li>
                <li>• Initial regulatory approvals</li>
              </ul>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <DollarSign className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Series A</h3>
              <p className="text-4xl font-bold text-yellow-600 mb-4">$60M</p>
              <p className="text-gray-300 mb-4">Years 2-3</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• First demonstration satellite</li>
                <li>• Launch services</li>
                <li>• Ground control infrastructure</li>
                <li>• Commercial partnerships</li>
              </ul>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <DollarSign className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Series B</h3>
              <p className="text-4xl font-bold text-green-500 mb-4">$75M</p>
              <p className="text-gray-300 mb-4">Years 3-4</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Fleet expansion (5-15 units)</li>
                <li>• International operations</li>
                <li>• Advanced AI development</li>
                <li>• Market expansion</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-10 h-10 text-green-500 mr-4" />
              <div>
                <h3 className="text-3xl font-bold">Total Capital Required</h3>
                <p className="text-5xl font-bold text-green-500 mt-2">$150M</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg">
              Over 4 years to achieve full operational deployment and market leadership in orbital debris management
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Revenue Streams</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <PieChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Government Contracts</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Long-term agreements with space agencies (NASA, ESA, JAXA) for debris tracking and removal services.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Year 3 Revenue</span>
                  <span className="text-xl font-bold text-blue-400">$25M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Year 5 Revenue</span>
                  <span className="text-xl font-bold text-blue-400">$80M</span>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <PieChart className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Commercial Services</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Debris removal and collision avoidance services for satellite operators and constellation providers.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Year 3 Revenue</span>
                  <span className="text-xl font-bold text-yellow-600">$15M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Year 5 Revenue</span>
                  <span className="text-xl font-bold text-yellow-600">$60M</span>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <PieChart className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Insurance Partnerships</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Risk mitigation services for space insurance providers seeking to reduce collision-related claims.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Year 4 Revenue</span>
                  <span className="text-xl font-bold text-green-500">$10M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Year 5 Revenue</span>
                  <span className="text-xl font-bold text-green-500">$30M</span>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <PieChart className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Data & Analytics</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Orbital tracking data, collision probability reports, and space situational awareness subscriptions.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Year 3 Revenue</span>
                  <span className="text-xl font-bold text-red-500">$5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Year 5 Revenue</span>
                  <span className="text-xl font-bold text-red-500">$20M</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-lg border-2 border-green-500">
            <h3 className="text-3xl font-bold mb-4 text-center">Projected Year 5 Revenue</h3>
            <p className="text-6xl font-bold text-green-500 text-center">$190M</p>
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
          <h2 className="text-4xl font-bold mb-8">Financial Projections</h2>
          <div className="w-20 h-1 bg-blue-400 mb-8"></div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
            <p>
              ORCA achieves positive cash flow by Year 5 with gross margins reaching 65% as operational efficiency improves and fleet utilization increases. Break-even occurs in Year 4 with the expansion of commercial services.
            </p>
            <p>
              Operating expenses stabilize at 35% of revenue by Year 5, with primary costs including satellite maintenance, ground operations, and continued R&D for next-generation capabilities.
            </p>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Exit Strategy & Returns</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Multiple exit pathways exist for investors: acquisition by major aerospace contractors, merger with existing space services companies, or IPO following established market position.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Projected IRR of 35-45% over a 7-year horizon based on comparable space technology companies and the critical nature of debris management for the growing satellite industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
