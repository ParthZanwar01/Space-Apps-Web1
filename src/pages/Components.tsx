import { useState, useRef, useEffect } from 'react';
import { Zap, Settings, Grip, ArrowRight, ExternalLink } from 'lucide-react';

export default function Components() {
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

  const components = [
    {
      id: 1,
      title: "Debris Deposition from Satellite",
      subtitle: "Satellite Material Processing",
      description: "Automated system for depositing and positioning captured debris materials for processing. Ensures proper orientation and secure placement of various satellite components and materials.",
      image: "/images/bodydecant2.png",
      icon: Settings,
      color: "text-blue-400",
      features: [
        "Automated material positioning",
        "Multi-size component handling",
        "Secure debris placement",
        "Precision orientation control"
      ],
      applications: "Initial debris processing, material staging, component organization"
    },
    {
      id: 2,
      title: "Heat Decontamination",
      subtitle: "Thermal Cleaning System",
      description: "High-temperature processing system that removes contaminants, coatings, and impurities from captured debris materials through controlled thermal treatment.",
      image: "/images/heatcont2.png",
      icon: Zap,
      color: "text-red-400",
      features: [
        "High-temperature processing",
        "Contaminant removal",
        "Coating elimination",
        "Controlled thermal treatment"
      ],
      applications: "Material purification, surface cleaning, contaminant removal"
    },
    {
      id: 3,
      title: "Centrifuge Material Sorting",
      subtitle: "Automated Material Separation",
      description: "High-speed centrifugal system that separates materials by density and composition, enabling efficient sorting of mixed debris into pure material streams for recycling.",
      image: "/images/centri2.png",
      icon: Grip,
      color: "text-green-400",
      features: [
        "Density-based separation",
        "High-speed processing",
        "Automated material sorting",
        "Pure material streams"
      ],
      applications: "Material separation, density sorting, composition analysis"
    },
    {
      id: 4,
      title: "Slag/Waste Containment",
      subtitle: "Waste Management System",
      description: "Secure containment system for processing byproducts and non-recyclable materials, ensuring safe storage and disposal of waste products from the recycling process.",
      image: "/images/slag2.png",
      icon: Settings,
      color: "text-gray-400",
      features: [
        "Secure waste containment",
        "Safe disposal protocols",
        "Environmental protection",
        "Process byproduct management"
      ],
      applications: "Waste storage, byproduct containment, environmental safety"
    },
    {
      id: 5,
      title: "Wire Spool",
      subtitle: "Material Feed System",
      description: "Automated wire and material feeding system that supplies raw materials to the 3D printer, ensuring continuous operation and precise material delivery for manufacturing processes.",
      image: "/images/spool2.png",
      icon: Zap,
      color: "text-yellow-400",
      features: [
        "Automated material feeding",
        "Continuous operation",
        "Precise material delivery",
        "Wire and filament management"
      ],
      applications: "Material supply, continuous manufacturing, precision feeding"
    },
    {
      id: 6,
      title: "3D Printer",
      subtitle: "Additive Manufacturing",
      description: "Advanced 3D printing system that constructs new components and structures from recycled materials, enabling on-demand manufacturing of replacement parts and new infrastructure.",
      image: "/images/printer2.png",
      icon: Zap,
      color: "text-purple-400",
      features: [
        "Additive manufacturing",
        "Recycled material processing",
        "On-demand production",
        "Precision construction"
      ],
      applications: "Component manufacturing, structure construction, replacement parts"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: 'brightness(0.25)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/90"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">ORCA Components</h1>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-2xl text-gray-200 leading-relaxed mb-6 font-light max-w-4xl mx-auto">
            Advanced technologies powering the future of orbital recycling and construction
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Discover the cutting-edge systems that make ORCA the most advanced orbital manufacturing platform ever conceived.
          </p>
        </div>
      </section>

      {/* Components Grid */}
      <section className="relative py-20 px-4 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Technologies</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three revolutionary systems working in harmony to transform space debris into valuable orbital infrastructure
            </p>
          </div>

          <div className="space-y-24">
            {components.map((component, index) => {
              const IconComponent = component.icon;
              const isVisible = visibleItems.includes(index);
              
              return (
                <div
                  key={component.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`relative transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Component Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-5 rounded-lg"
                    style={{
                      backgroundImage: `url(${component.image})`
                    }}
                  ></div>
                  
                  <div className={`relative grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative group">
                        <img
                          src={component.image}
                          alt={component.title}
                          className={`w-full object-cover rounded-lg shadow-2xl group-hover:shadow-3xl transition-all duration-500 ${
                            component.id === 5 || component.id === 6 ? 'h-32' : component.id === 1 ? 'h-64' : 'h-96'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-white text-sm font-medium">{component.subtitle}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="flex items-center mb-4">
                        <IconComponent className={`w-8 h-8 ${component.color} mr-3`} />
                        <h3 className="text-3xl font-bold">{component.title}</h3>
                      </div>
                      
                      <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        {component.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-3 text-gray-200">Key Features</h4>
                        <ul className="space-y-2">
                          {component.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <ArrowRight className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Applications */}
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="text-lg font-semibold mb-2 text-gray-200 flex items-center">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Applications
                        </h4>
                        <p className="text-gray-400">{component.applications}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Integration Section */}
      <section className="relative py-20 px-4 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Integrated System Architecture</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            These three core technologies work together seamlessly to create a complete orbital recycling and manufacturing ecosystem, transforming space debris into valuable infrastructure through an integrated, automated process.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <Grip className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">1. Capture</h3>
              <p className="text-gray-400">Gecko grippers securely capture debris of all sizes and materials</p>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <Settings className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">2. Refine</h3>
              <p className="text-gray-400">EBCHM purifies captured materials into high-quality alloys</p>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">3. Construct</h3>
              <p className="text-gray-400">EBAM 3D prints new structures from refined materials</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
