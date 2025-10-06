import { Target, Zap, Shield, Rocket, Calendar, Wrench, Network } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-6">Orbital Recycling and Construction Array</h1>
            <div className="w-20 h-1 bg-red-500 mb-6"></div>
            <p className="text-2xl text-gray-200 leading-relaxed mb-6 font-light">
              Advanced orbital system for debris recycling and space construction
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              An advanced orbital system designed to recycle space debris and construct new infrastructure in orbit through innovative manufacturing technologies.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our solution combines debris capture, metal refinement, and 3D printing capabilities to transform space waste into valuable construction materials for sustainable orbital operations.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <img 
              src="/images/satellite.png" 
              alt="ORCA Satellite 3D Model" 
              className="w-[7500px] h-[7500px] md:w-[10500px] md:h-[10500px] lg:w-[12000px] lg:h-[12000px] xl:w-[13500px] xl:h-[13500px] object-contain"
              style={{ maxWidth: 'none', width: 'auto', height: 'auto' }}
            />
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
              <h3 className="text-xl font-bold mb-3">Debris Capture</h3>
              <p className="text-gray-400">
                Advanced gecko-inspired grippers and autonomous drones capture space debris of all sizes for recycling.
              </p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <Zap className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Metal Refinement</h3>
              <p className="text-gray-400">
                Electron Beam Cold-Hearth Melting purifies captured debris into high-quality aerospace alloys.
              </p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">3D Construction</h3>
              <p className="text-gray-400">
                Electron Beam Additive Manufacturing creates large structures in orbit using recycled materials.
              </p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <img 
                src="/images/orcaLogo.png" 
                alt="ORCA Logo" 
                className="w-16 h-16 mb-4 object-contain"
              />
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
              Over 34,000 pieces of space debris larger than 10 cm orbit Earth, representing both a collision threat and a massive untapped resource. Traditional debris removal simply deorbits materials, wasting valuable metals and construction materials.
            </p>
            <p>
              The growing space economy requires massive infrastructure in orbit, but launching materials from Earth is extremely expensive and unsustainable. Meanwhile, space debris contains high-quality metals that could be recycled into new structures.
            </p>
            <p>
              ORCA provides the solution: an orbital recycling and construction array that captures debris, refines the materials, and 3D prints new infrastructure in space, creating a sustainable circular economy in orbit.
            </p>
          </div>
        </div>
      </section>

      {/* Development Timeline Section */}
      <TimelineSection />
    </div>
  );
}

// Timeline Component with Scroll Animations
function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      year: "Late 2020s",
      title: "Small-scale demonstrations of key technologies",
      description: "Initial proof-of-concept demonstrations of debris capture, metal refinement, and 3D printing capabilities in controlled environments.",
      icon: Rocket,
      color: "text-blue-400"
    },
    {
      year: "2035",
      title: "First ORCA hub operational",
      description: "Break-even point achieved with improved regulatory access for debris remediation ventures. First fully operational ORCA hub begins commercial operations.",
      icon: Calendar,
      color: "text-green-400"
    },
    {
      year: "Late 2030s",
      title: "Autonomous operations and large-scale construction",
      description: "Implementation of autonomous self-repair routines and execution of large-scale construction projects using recycled orbital materials.",
      icon: Wrench,
      color: "text-yellow-400"
    },
    {
      year: "2040s",
      title: "Network of orbital recycling yards",
      description: "Establishment of a comprehensive network of orbital recycling yards providing sustainable infrastructure development across multiple orbital regions.",
      icon: Network,
      color: "text-purple-400"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      ></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">ORCA Development Roadmap</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our strategic timeline for transforming space debris into valuable orbital infrastructure
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 via-yellow-500 to-purple-500 rounded-full"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              const isVisible = visibleItems.includes(index);
              
              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`relative flex items-center transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900 z-10 flex items-center justify-center">
                    <IconComponent className={`w-6 h-6 ${item.color}`} />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                      <div className="flex items-center mb-3">
                        <IconComponent className={`w-6 h-6 ${item.color} mr-3`} />
                        <span className="text-2xl font-bold text-white">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-100">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
