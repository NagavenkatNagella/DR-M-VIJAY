import React from 'react';
import { Code, Users } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { category: "Programming", skills: ["Python", "R", "MATLAB", "C++"] },
    { category: "AI & ML", skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning Models"] },
    { category: "Data Analysis", skills: ["Pandas", "NumPy", "Tableau", "Power BI"] },
    { category: "Web & Database", skills: ["HTML/CSS", "JavaScript", "SQL", "MongoDB"] },
  ];

  const nonTechnicalSkills = [
    "Event Planning & Management",
    "Public Speaking & Presentation",
    "Technical Writing & Research",
    "Team Leadership & Mentorship",
    "Curriculum Design",
    "Problem-Solving"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
            </div>
            <div className="space-y-6">
              {technicalSkills.map((category, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-3 text-gray-700">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-semibold">Non-Technical Skills</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {nonTechnicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;