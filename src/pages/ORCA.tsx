import { Satellite, Target, Zap, Shield } from 'lucide-react';

export default function ORCA() {
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

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">O.R.C.A.</h1>
              <div className="w-20 h-1 bg-red-500 mb-6"></div>
              <p className="text-2xl text-gray-200 leading-relaxed mb-6 font-light">
                Orbital Reconnaissance & Cleanup Architecture
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                An advanced system designed to detect, track, and remove space debris from low Earth orbit through innovative autonomous technologies.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our solution combines cutting-edge neural detection systems with precision cleanup capabilities to ensure the sustainability of space operations for future generations.
              </p>
            </div>
            <div className="flex justify-center">
              <Satellite className="w-64 h-64 text-red-500 opacity-80" />
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
          <h2 className="text-4xl font-bold mb-12 text-center">Key Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <Target className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Precision Tracking</h3>
              <p className="text-gray-400">
                Multi-sensor fusion provides centimeter-level accuracy in debris location and trajectory prediction.
              </p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <Zap className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Rapid Response</h3>
              <p className="text-gray-400">
                Autonomous systems react to collision threats within minutes, not hours or days.
              </p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Safe Operations</h3>
              <p className="text-gray-400">
                Collision avoidance protocols ensure no additional debris is created during cleanup missions.
              </p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <Satellite className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Scalable Fleet</h3>
              <p className="text-gray-400">
                Modular design allows deployment of multiple units for comprehensive orbital coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">The Problem We Solve</h2>
          <div className="w-20 h-1 bg-red-500 mb-8"></div>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Over 34,000 pieces of space debris larger than 10 cm orbit Earth at speeds exceeding 28,000 km/h. Each fragment poses a catastrophic collision risk to active satellites, space stations, and future missions.
            </p>
            <p>
              The Kessler Syndrome threatens to make entire orbital zones unusable for generations. As satellite constellations grow exponentially, the debris problem accelerates without intervention.
            </p>
            <p>
              ORCA provides the solution: an automated, scalable system that removes debris before collisions occur, protecting trillions of dollars in space infrastructure and ensuring continued access to orbit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
