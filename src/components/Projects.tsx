import React from 'react';
import { Fingerprint, Monitor, Plane, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Fingerprint className="w-12 h-12 text-blue-600" />, 
      title: "Biometric Authentication System for Cybersecurity",
      description: "Developed a robust biometric authentication system integrating advanced algorithms for secure access to sensitive systems and data.",
      tech: ["Machine Learning", "Biometrics", "Cybersecurity Frameworks"],
      impact: "Enhanced security and reduced unauthorized access by 80% in tested environments."
    },
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "Sensor-Driven Touch Frame for Non-Touchscreen Laptops",
      description: "Designed and prototyped a sensor-stimulated touch frame that upgrades non-touchscreen laptops to touch-responsive devices.",
      tech: ["Embedded Systems", "Sensor Technology", "Human-Computer Interaction"],
      impact: "Provided an affordable and user-friendly solution for touch functionality, reducing hardware upgrade costs."
    },
    {
      icon: <Plane className="w-12 h-12 text-blue-600" />,
      title: "IoT-Enabled Pest Identification Drone",
      description: "Created a drone-based system equipped with machine vision for pest identification and integrated cloud computing for data analysis.",
      tech: ["Machine Vision", "IoT", "Cloud Computing"],
      impact: "Improved pest detection efficiency, aiding farmers in implementing targeted pest control measures."
    },
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "Smart Attendance System with Facial Recognition",
      description: "Designed a facial recognition-based attendance system for group identification, reducing manual intervention.",
      tech: ["Deep Learning", "Convolutional Neural Networks"],
      impact: "Automated attendance tracking for institutions, increasing efficiency and accuracy."
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Deep Learning for Tuberculosis Severity Detection",
      description: "Developed a DenseNet-based deep learning model to detect and classify tuberculosis severity using sputum images.",
      tech: ["DenseNet", "Medical Imaging", "Deep Learning Frameworks"],
      impact: "Contributed to early TB detection, significantly aiding medical professionals in diagnostics."
    },
    {
      icon: <Fingerprint className="w-12 h-12 text-blue-600" />,
      title: "Cybersecurity System Using Multimodal Biometrics",
      description: "Designed a hybrid biometric system integrating ear and palm vein recognition for futuristic security applications.",
      tech: ["Multimodal Biometric Systems", "Metaheuristic Optimization", "Security Algorithms"],
      impact: "Enhanced multifactor authentication and reduced identity fraud."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-semibold mb-2">Impact:</h4>
                <p className="text-gray-600">{project.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;