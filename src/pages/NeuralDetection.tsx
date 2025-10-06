import { Brain, Network, Activity, Database } from 'lucide-react';

export default function NeuralDetection() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: 'brightness(0.25)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/90"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <Brain className="w-64 h-64 text-blue-400 opacity-80" />
            </div>
            <div className="order-1 md:order-2">
              <h1 className="text-6xl font-bold mb-6">Neural Detection System</h1>
              <div className="w-20 h-1 bg-blue-400 mb-6"></div>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                Our AI-powered neural network processes real-time satellite data to identify and classify space debris with unprecedented accuracy.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Machine learning algorithms continuously improve detection capabilities, enabling proactive threat assessment and intelligent mission planning.
              </p>
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
          <h2 className="text-4xl font-bold mb-12 text-center">AI Architecture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <Network className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Deep Learning Models</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Convolutional neural networks trained on millions of orbital observations achieve 99.7% accuracy in debris classification.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Object detection and segmentation</li>
                <li>• Size and composition estimation</li>
                <li>• Velocity and trajectory analysis</li>
                <li>• Collision probability modeling</li>
              </ul>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <Activity className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Real-Time Processing</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Edge computing architecture processes sensor data on-orbit, reducing latency from minutes to milliseconds.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Instant threat identification</li>
                <li>• Autonomous decision-making</li>
                <li>• Adaptive tracking algorithms</li>
                <li>• Predictive mission planning</li>
              </ul>
            </div>
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
          <h2 className="text-4xl font-bold mb-8">Training & Validation</h2>
          <div className="w-20 h-1 bg-blue-400 mb-8"></div>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Our neural networks are trained on comprehensive datasets combining historical tracking data, synthetic simulations, and real-world observations from multiple sensor modalities.
            </p>
            <p>
              Rigorous validation protocols test performance across diverse scenarios: varying lighting conditions, object sizes from 1cm to 10m, velocities up to 15 km/s, and orbital altitudes from 200-2000 km.
            </p>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 mt-8">
              <Database className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-blue-400 mb-2">99.7%</p>
                  <p className="text-gray-400">Detection Accuracy</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-500 mb-2">&lt;50ms</p>
                  <p className="text-gray-400">Processing Latency</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-600 mb-2">1cm</p>
                  <p className="text-gray-400">Minimum Object Size</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Continuous Learning</h2>
          <div className="w-20 h-1 bg-blue-400 mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            The system improves autonomously through reinforcement learning. Each successful debris capture provides new training data, refining detection algorithms and enhancing future mission success rates.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Federated learning across the ORCA fleet enables knowledge sharing between units without centralizing sensitive orbital data, accelerating capability development while maintaining operational security.
          </p>
        </div>
      </section>
    </div>
  );
}
