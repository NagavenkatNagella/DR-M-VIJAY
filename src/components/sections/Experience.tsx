import React from 'react';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Professor",
      organization: "Kalasalingam Academy of Research and Education",
      responsibilities: [
        "Designing and delivering advanced courses in Data Science, ML, and Image Processing",
        "Supervising student research projects in healthcare analytics",
        "Leading academic and technical events organization",
        "Collaborating with industry experts"
      ]
    },
    {
      title: "Research Fellow",
      organization: "INTI International University",
      responsibilities: [
        "Collaborating on research in AI, Machine Learning and deep learning",
        "Publishing research papers in prestigious journals",
        "Mentoring research students"
      ]
    },
    {
      title: "IEEE Coordinator",
      organization: "IEEE Student Branch",
      responsibilities: [
        "Organizing technical events and workshops",
        "Promoting IEEE membership and activities",
        "Facilitating industry-academia collaboration",
        "Managing resources and driving initiatives"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      description: "Designing scalable applications on AWS cloud platform"
    },
    {
      name: "Azure AI Engineer Associate",
      description: "Deploying AI models with Azure-based solutions"
    },
    {
      name: "Professional Data Engineer",
      description: "Implementing data processing systems on Google Cloud"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Education</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                  <p className="text-blue-600 mb-4">{exp.organization}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2">Ph.D. in Computer Science</h4>
                  <p className="text-blue-600">Anna University, 2022</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-semibold">Certifications</h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-2">{cert.name}</h4>
                      <p className="text-gray-600">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;