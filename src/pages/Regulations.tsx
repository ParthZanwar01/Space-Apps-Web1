import { Scale, Users, FileText } from 'lucide-react';

export default function Regulations() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920)',
            filter: 'brightness(0.25)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/90"></div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">Regulations and International Law</h1>
          <div className="w-20 h-1 bg-red-500 mb-8"></div>
          <p className="text-2xl text-gray-200 leading-relaxed">
            Full compliance with international space law frameworks and proactive engagement in policy development
          </p>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">International Treaty Compliance</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <Scale className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Outer Space Treaty (1967)</h3>
              <p className="text-gray-400 leading-relaxed">
                ORCA operations respect sovereignty principles, peaceful use requirements, and liability frameworks established by the foundational space law treaty.
              </p>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <FileText className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Liability Convention (1972)</h3>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive insurance and liability protocols address all phases of debris removal missions, from capture through disposal.
              </p>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <FileText className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Registration Convention (1975)</h3>
              <p className="text-gray-400 leading-relaxed">
                All ORCA spacecraft are properly registered with appropriate national authorities and UN Office for Outer Space Affairs.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Legal Framework</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our legal team works continuously with international space law experts to ensure all operations comply with existing treaties while contributing to the development of new frameworks for active debris removal. ORCA's approach sets industry standards for responsible space operations.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2166476/pexels-photo-2166476.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Regulatory Engagement</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center mb-6">
                <Users className="w-12 h-12 text-blue-400 mr-4" />
                <h3 className="text-3xl font-bold">International Cooperation</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                ORCA maintains active dialogue with the UN Committee on the Peaceful Uses of Outer Space (COPUOS) and participates in working groups developing guidelines for sustainable space activities.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>COPUOS working group participation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Inter-Agency Space Debris Coordination Committee (IADC) observer status</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Bilateral agreements with space agencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Industry standards development contributions</span>
                </li>
              </ul>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg border border-gray-800"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}
            ></div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">National Regulatory Compliance</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-400">United States</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• FCC licensing for RF operations</li>
                  <li>• FAA/AST launch licensing compliance</li>
                  <li>• NOAA remote sensing authorization</li>
                  <li>• Export control adherence (ITAR/EAR)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-400">European Union</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• ESA coordination for European operations</li>
                  <li>• National space agency approvals</li>
                  <li>• EU space surveillance cooperation</li>
                  <li>• GDPR compliance for data handling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Liability & Insurance</h2>
          <div className="w-20 h-1 bg-red-500 mb-8"></div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
            <p>
              Comprehensive insurance coverage addresses all mission phases including launch, on-orbit operations, debris capture, and disposal. Policies cover third-party liability, collision damage, and environmental impacts.
            </p>
            <p>
              Coverage limits exceed regulatory requirements, providing additional protection for clients and stakeholders. Our insurance partners specialize in space operations and understand the unique risks of active debris removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-red-500">Pre-Launch Coverage</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Manufacturing and testing phases</li>
                <li>• Transportation to launch site</li>
                <li>• Launch vehicle integration</li>
                <li>• Third-party liability protection</li>
              </ul>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-red-500">On-Orbit Operations</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Collision liability coverage</li>
                <li>• Mission failure insurance</li>
                <li>• Environmental protection</li>
                <li>• Business interruption coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Policy Development</h2>
          <div className="w-20 h-1 bg-red-500 mb-8"></div>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            As a pioneer in active debris removal, ORCA contributes to developing new legal frameworks and best practices. We work with policymakers to create sensible regulations that enable innovation while ensuring safety and accountability.
          </p>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Key Policy Positions</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">•</span>
                <span>Support for international debris removal guidelines that balance environmental protection with commercial viability</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">•</span>
                <span>Advocacy for clear liability frameworks that enable active debris removal without excessive legal risk</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">•</span>
                <span>Promotion of international cooperation mechanisms for cross-border debris removal operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">•</span>
                <span>Support for mandatory debris mitigation requirements for all new satellite launches</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
