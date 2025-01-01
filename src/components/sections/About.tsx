import React from 'react';
import { Brain, Users, Code, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Research Focus",
      description: "Specializing in AI, ML, Data Science, and Cybersecurity"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Leadership",
      description: "IEEE Coordinator and Research Fellow at INTI International University"
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Innovation",
      description: "Multiple patents in biometrics and IoT technologies"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Academic Excellence",
      description: "Ph.D. in Computer Science from Anna University"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Dr. Vijay M is a distinguished academic and IEEE member with extensive expertise in 
              artificial intelligence, machine learning, data science, and cybersecurity. Currently 
              serving as an Associate Professor at Kalasalingam Academy of Research and Education, 
              he is deeply committed to fostering innovation, research, and knowledge dissemination 
              in cutting-edge technologies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Actively involved in organizing impactful events such as workshops, hackathons, and 
              conferences, bridging the gap between academia and industry. His contributions extend 
              to mentoring young minds and spearheading initiatives in IEEE, including professional 
              development programs, technical competitions, and community outreach.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;