import React from 'react';
import { Award, BookOpen, GraduationCap, Linkedin, Youtube, Search, Database, BookMarked,Book } from 'lucide-react';
import image from './image.jpg';  // Import the image

const Hero = () => {
  const profiles = [
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/dr-vijay-m-a894311b9'
    },
    {
      icon: <Youtube size={20} />,
      name: 'YouTube',
      url: 'https://www.youtube.com/@dr.vijaycse'
    },
    {
      icon: <BookOpen size={20} />,
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=nhYF56UAAAAJ&hl=en'
    },
    {
      icon: <Search size={20} />,
      name: 'ResearchGate',
      url: 'https://researchgate.net/profile/Vijay_m5'
    },
    {
      icon: <Database size={20} />,
      name: 'Scopus',
      url: 'https://scopus.com/authid/detail.uri?authorId=52664549300'
    },
    {
      icon: <BookMarked size={20} />,
      name: 'ORCID',
      url: 'https://orcid.org/0000-0003-3337-815X'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <img
                src={image}  // Use the imported image here
                alt="Dr. VIJAY M"
                className="w-48 h-48 rounded-full border-4 border-blue-400 shadow-xl"
              />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. VIJAY M</h1>
                <h2 className="text-xl md:text-2xl text-blue-300 mb-6">Associate Professor & IEEE Member</h2>
                <h2 className="text-xl md:text-2xl text-blue-300 mb-6">Research Fellow,INTI University, Malaysia</h2>

              </div>
            </div>
            <p className="text-lg mb-8">
              A distinguished academic and researcher specializing in AI, Machine Learning, 
              Data Science, and Cybersecurity at Kalasalingam Academy of Research and Education.
            </p>
            
            <div className="bg-blue-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Professional Profiles</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {profiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-700/50 hover:bg-blue-600/50 px-4 py-2 rounded-lg transition-colors"
                  >
                    {profile.icon}
                    <span className="text-sm">{profile.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-lg text-center">
                <Award size={40} className="mx-auto mb-2" />
                <h3 className="text-xl font-bold">IEEE Member</h3>
              </div>
              <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-lg text-center">
                <BookOpen size={40} className="mx-auto mb-2" />
                <h3 className="text-xl font-bold">8+ SCI Papers</h3>
              </div>
              <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-lg text-center">
                <Book size={40} className="mx-auto mb-2" /> {/* Added Book Icon */}
                <h3 className="text-xl font-bold">22+ IEEE Publications</h3>
              </div>
              <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-lg text-center">
                <Award size={40} className="mx-auto mb-2" />
                <h3 className="text-xl font-bold">4+ Patents</h3>
              </div>
              <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-lg text-center">
                <GraduationCap size={40} className="mx-auto mb-2" />
                <h3 className="text-xl font-bold"> Doctor of Philosophy (Ph.D), Anna University </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
