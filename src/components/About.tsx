import React from 'react';
import { Brain, Code, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Dr. Vijay M is a distinguished academic and IEEE member with extensive expertise in 
              artificial intelligence, machine learning, data science, and cybersecurity. Currently 
              serving as an Associate Professor at Kalasalingam Academy of Research and Education, 
              he is deeply committed to fostering innovation, research, and knowledge dissemination 
              in cutting-edge technologies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A prolific researcher and innovator, he has authored numerous papers published in 
              SCI-indexed journals and IEEE conferences. His patents, ranging from biometric 
              authentication devices to IoT-enabled systems, underscore his commitment to solving 
              real-world challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-blue-50 rounded-lg">
              <Brain className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Research Focus</h3>
              <p className="text-gray-600">AI, Machine Learning, Data Science</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <Code className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
              <p className="text-gray-600">Python, TensorFlow, Deep Learning</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Leadership</h3>
              <p className="text-gray-600">IEEE Coordinator, Mentor</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <Award className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Recognition</h3>
              <p className="text-gray-600">Multiple Patents & Publications</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4">Programming & Tools</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-32">Python</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[95%]"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32">TensorFlow</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[90%]"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32">MATLAB</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[85%]"></div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Domains</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-32">AI & ML</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[95%]"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32">Data Science</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[90%]"></div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="w-32">Cybersecurity</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-[85%]"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;