import React from 'react';
import { Lightbulb, Shield, Cpu, Database } from 'lucide-react';

const Patents = () => {
  const patents = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Biometric Authentication Device for Cybersecurity Applications",
      description: "A novel biometric authentication device designed to enhance cybersecurity by integrating advanced biometric techniques to secure sensitive data and systems."
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-600" />,
      title: "Sensor Stimulated Touch Responsive Frame",
      description: "An innovative frame that transforms non-touchscreen laptops into touch-responsive devices, using sensor-based stimulation technology."
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: "Machine Vision-Based IoT-Enabled Pest Identification Drone",
      description: "A smart drone system utilizing machine vision and IoT technologies to detect pests in agricultural fields, with data processed and analyzed on a cloud computing platform."
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "ML-Trained IoT Water Quality Monitoring",
      description: "Groundwater monitoring poles embedded with IoT sensors and machine learning algorithms to assess water quality and provide real-time analytics via cloud integration."
    }
  ];

  return (
    <section id="patents" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Patents</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {patents.map((patent, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {patent.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{patent.title}</h3>
              <p className="text-gray-600">{patent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;