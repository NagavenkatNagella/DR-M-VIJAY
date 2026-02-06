import { Lightbulb, Shield, Cpu, Database, Monitor, Plane } from 'lucide-react';

const Patents = () => {
  const grantedPatents = [
    {
      icon: <Cpu className="w-12 h-12 text-blue-600" />,
      title: "Wind-Powered Wireless Charging System for Electric Vehicles",
      details: "Granted Patent"
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "System for Automated Medication Dispensing and Tracking",
      details: "Granted Patent"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Biometric Authentication Device for Cybersecurity Applications",
      details: "Granted Patent / Application: 411262-001"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: "Navigation System for Visually Challenged",
      details: "Indian Patent Publication"
    },
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "Sensor Stimulated Touch Responsive Frame for Non-Touch Screen Laptops",
      details: "Patent Application: 202341011612"
    },
    {
      icon: <Plane className="w-12 h-12 text-blue-600" />,
      title: "Machine Vision-Based IoT-Enabled Pest Identification Drone",
      details: "Patent Application: 202241000353"
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Machine Learning-Trained IoT and Cloud Computing-Based Ground Water Quality Monitoring Poles",
      details: "Patent Application: 202241003025"
    }
  ];

  return (
    <section id="patents" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Patents & Innovations</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grantedPatents.map((patent, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
              <div className="mb-4">
                {patent.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{patent.title}</h3>
              <p className="text-blue-600 font-medium text-sm">{patent.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;