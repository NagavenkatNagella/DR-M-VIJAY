import { Fingerprint, Monitor, Plane, Database, Award } from 'lucide-react';

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

  const fundedProjects = [
    {
      agency: "Ministry of MSME, Govt. of India",
      scheme: "New IDEA Scheme",
      title: "A Laser Stimulated Touch Responsive Frame for Non-Touch Screen Laptops",
      role: "Co-Principal Investigator",
      amount: "₹5,50,000",
      year: "2022"
    },
    {
      agency: "TNSCST, Govt. of Tamil Nadu",
      scheme: "Student Project Funding",
      title: "SkyScout: Advanced Aerial Pest monitoring in Agriculture",
      role: "Project Supervisor / Mentor",
      amount: "₹7,500",
      year: "2025"
    },
    {
      agency: "IndiaAI, Govt. of India",
      scheme: "IndiaAI Fellowship",
      title: "AgriOneAI – AI-Powered Smart Agri Advisory and Market Linkage Platform",
      role: "Project Guide",
      amount: "₹1,00,000",
      year: "2025"
    }
  ];

  const awards = [
    {
      year: "2025",
      event: "Smart India Hackathon (SIH)",
      role: "Mentor",
      outcome: "Student team secured Winner position at national level",
      prize: "₹1,50,000",
      type: "Mentorship Award"
    },
    {
      year: "2025",
      event: "IBM Innovation Challenge - Hackathon",
      role: "Mentor",
      outcome: "Student team secured Winner position in IBM-led competition",
      type: "Mentorship Award"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects & Funding</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Monitor className="text-blue-600" />
            Government Funded Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {fundedProjects.map((project, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-blue-600 font-bold mb-2">{project.agency}</div>
                <h4 className="font-bold mb-3">{project.title}</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-semibold">Role:</span> {project.role}</p>
                  <p><span className="font-semibold">Amount:</span> {project.amount}</p>
                  <p><span className="font-semibold">Year:</span> {project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="text-blue-600" />
            Awards & Mentorship Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border-t-4 border-blue-600">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-lg font-bold">{award.event}</div>
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">{award.year}</div>
                </div>
                <p className="text-gray-700 mb-3">{award.outcome}</p>
                {award.prize && <p className="text-blue-600 font-bold mb-2">Prize: {award.prize}</p>}
                <div className="text-sm text-gray-500 italic">Role: {award.role} | {award.type}</div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8">Featured Technical Projects</h3>
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