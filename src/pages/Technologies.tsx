import { Cpu, Rocket, Radio, Camera, Zap } from 'lucide-react';

export default function Technologies() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: 'brightness(0.25)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/90"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">ORCA Core Technologies</h1>
              <div className="w-20 h-1 bg-yellow-600 mb-6"></div>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                Revolutionary technologies enabling sustainable space operations through debris recycling and in-orbit manufacturing.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Three breakthrough systems working together to transform space debris into valuable resources: EBAM, EBCHM, and Gecko Grippers.
              </p>
            </div>
            <div className="flex justify-center">
              <Cpu className="w-64 h-64 text-yellow-600 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                <Cpu className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-3xl font-bold mb-4">EBAM - Electron Beam Additive Manufacturing</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Revolutionary 3D printing technology for large-scale space construction using recycled materials from space debris.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Build Volume: 2.5m diameter maximum structure</li>
                  <li>• Material Compatibility: Titanium, Aluminum, Nickel Alloys</li>
                  <li>• Deposition Rate: 5 kg/hour material processing</li>
                  <li>• Power Consumption: 10 kW operational requirement</li>
                </ul>
              </div>
              <div
                className="h-64 bg-cover bg-center rounded-lg border border-gray-800"
                style={{
                  backgroundImage: 'url(/images/ebam.png)'
                }}
              ></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div
                className="h-64 bg-cover bg-center rounded-lg border border-gray-800 order-2 md:order-1"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/2166729/pexels-photo-2166729.jpeg?auto=compress&cs=tinysrgb&w=800)'
                }}
              ></div>
              <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800 order-1 md:order-2">
                <Rocket className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-3xl font-bold mb-4">EBCHM - Electron Beam Cold-Hearth Melting</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Advanced refining process for purifying mixed-metal space debris into usable aerospace-grade alloys.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Melting Capacity: 10 kg/hour metal processing</li>
                    <li>• Purity Level: &gt;99.9% achievable metal purity</li>
                  <li>• Power Consumption: 15 kW operational requirement</li>
                  <li>• Operating Temperature: 1800-2500°C range</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                <Radio className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Gecko-Inspired Adhesive Grippers</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Non-destructive, reusable grippers for capturing small or irregularly shaped space debris using biomimetic technology.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Adhesive Force: 10 N/cm² maximum strength</li>
                    <li>• Operating Cycles: &gt;10,000 adhesion/release cycles</li>
                  <li>• Material Compatibility: Various metals, plastics, composites</li>
                  <li>• Operating Temperature: -100 to 150°C range</li>
                </ul>
              </div>
              <div
                className="h-64 bg-cover bg-center rounded-lg border border-gray-800"
                style={{
                  backgroundImage: 'url(/images/gecko.png)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Additional Systems</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <Camera className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Visual Processing</h3>
              <p className="text-gray-400">
                Advanced image processing pipelines handle data from multiple cameras operating in visible and near-infrared spectrums.
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <Zap className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Power Systems</h3>
              <p className="text-gray-400">
                High-efficiency solar arrays and advanced battery systems provide continuous operation through orbital day-night cycles.
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <img 
                src="/images/orcaLogo.png" 
                alt="ORCA Logo" 
                className="w-12 h-12 mb-4 object-contain"
              />
              <h3 className="text-xl font-bold mb-3">Communications</h3>
              <p className="text-gray-400">
                Secure, high-bandwidth communications enable real-time telemetry and remote operation from ground control stations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2166471/pexels-photo-2166471.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Integration & Testing</h2>
          <div className="w-20 h-1 bg-yellow-600 mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            All technologies undergo rigorous testing in simulated space environments, including thermal vacuum chambers, radiation exposure, and vibration testing to ensure reliability in the harsh conditions of low Earth orbit.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            System integration follows aerospace industry standards with redundancy built into critical components. Fault-tolerant designs ensure mission continuity even in the event of partial system failures.
          </p>
        </div>
      </section>
    </div>
  );
}
