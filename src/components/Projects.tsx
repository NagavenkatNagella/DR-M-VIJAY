import { motion } from 'framer-motion';
import { Fingerprint, Monitor, Plane, Database, Award, IndianRupee, Rocket, Lightbulb, Target } from 'lucide-react';

const Projects = () => {
  const fundedProjects = [
    {
      agency: "Ministry of MSME, Govt. of India",
      scheme: "New IDEA Scheme",
      title: "A Laser Stimulated Touch Responsive Frame for Non-Touch Screen Laptops",
      role: "Co-Principal Investigator",
      amount: "₹5,50,000",
      year: "2022",
      icon: <Lightbulb className="text-orange-400" />
    },
    {
      agency: "TNSCST, Govt. of Tamil Nadu",
      scheme: "Student Project Funding",
      title: "SkyScout: Advanced Aerial Pest monitoring in Agriculture",
      role: "Project Supervisor / Mentor",
      amount: "₹7,500",
      year: "2025",
      icon: <Plane className="text-blue-400" />
    },
    {
      agency: "IndiaAI, Govt. of India",
      scheme: "IndiaAI Fellowship",
      title: "AgriOneAI – AI-Powered Smart Agri Advisory and Market Linkage Platform",
      role: "Project Guide",
      amount: "₹1,00,000",
      year: "2025",
      icon: <Rocket className="text-emerald-400" />
    }
  ];

  const featuredProjects = [
    {
      title: "Biometric Authentication System for Cybersecurity",
      description: "Developed a robust biometric authentication system integrating advanced algorithms for secure access to sensitive systems and data.",
      tech: ["Machine Learning", "Biometrics", "Cybersecurity Frameworks"],
      impact: "Enhanced security and reduced unauthorized access by 80% in tested environments.",
      icon: <Fingerprint />
    },
    {
      title: "Sensor-Driven Touch Frame for Non-Touchscreen Laptops",
      description: "Designed and prototyped a sensor-stimulated touch frame that upgrades non-touchscreen laptops to touch-responsive devices.",
      tech: ["Embedded Systems", "Sensor Technology", "HCI"],
      impact: "Provided an affordable and user-friendly solution for touch functionality.",
      icon: <Monitor />
    },
    {
      title: "IoT-Enabled Pest Identification Drone",
      description: "Created a drone-based system equipped with machine vision for pest identification and integrated cloud computing for data analysis.",
      tech: ["Machine Vision", "IoT", "Cloud Computing"],
      impact: "Improved pest detection efficiency aiding farmers in targeted control.",
      icon: <Plane />
    },
    {
      title: "Smart Attendance System with Facial Recognition",
      description: "Designed a facial recognition-based attendance system for group identification, reducing manual intervention.",
      tech: ["Deep Learning", "CNN"],
      impact: "Automated attendance tracking for institutions, increasing efficiency.",
      icon: <Monitor />
    },
    {
      title: "Deep Learning for Tuberculosis Severity Detection",
      description: "Developed a DenseNet-based deep learning model to detect and classify tuberculosis severity using sputum images.",
      tech: ["DenseNet", "Medical Imaging", "Deep Learning"],
      impact: "Contributed to early TB detection aiding medical diagnostics.",
      icon: <Database />
    },
    {
      title: "Cybersecurity System Using Multimodal Biometrics",
      description: "Designed a hybrid biometric system integrating ear and palm vein recognition for futuristic security applications.",
      tech: ["Multimodal Biometrics", "Metaheuristic Optimization", "Security"],
      impact: "Enhanced multifactor authentication and reduced identity fraud.",
      icon: <Fingerprint />
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
    <section id="projects" className="py-20 relative scroll-mt-32">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-14 w-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 glass border-white/10 shadow-2xl shadow-orange-500/10">
          <Monitor size={28} />
        </div>
        <div>
          <p className="section-subheading">Innovations & Grants</p>
          <h2 className="section-heading">Project Highlights & Funding</h2>
        </div>
      </div>

      {/* Funded Projects Row */}
      <h3 className="text-xl font-bold mb-8 text-white/40 uppercase tracking-widest flex items-center gap-3">
        <IndianRupee size={18} />
        Funded Assignments
      </h3>
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {fundedProjects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="glass-card p-6 border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent"
          >
            <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              {project.icon}
            </div>
            <div className="text-xs font-bold text-blue-400 uppercase mb-2">{project.agency}</div>
            <h4 className="text-lg font-bold text-white mb-4 leading-snug">{project.title}</h4>
            <div className="space-y-1 mb-4 text-xs text-white/40">
              <p><span className="font-semibold text-white/60">Role:</span> {project.role}</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="text-lg font-bold text-white/80">{project.amount}</div>
              <div className="text-xs text-white/30 font-medium px-2 py-1 rounded-md bg-white/5">{project.year}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Awards section */}
      <h3 className="text-xl font-bold mb-8 text-white/40 uppercase tracking-widest flex items-center gap-3">
        <Award size={18} />
        Awards & Mentorship
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {awards.map((award, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-6 border-blue-500/20"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-lg font-bold text-white">{award.event}</div>
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold">{award.year}</div>
            </div>
            <p className="text-white/60 text-sm mb-3">{award.outcome}</p>
            {award.prize && <p className="text-blue-400 font-bold mb-2 text-sm">Prize: {award.prize}</p>}
            <div className="text-xs text-white/30 italic">Role: {award.role} | {award.type}</div>
          </motion.div>
        ))}
      </div>

      {/* Featured Projects Grid */}
      <h3 className="text-xl font-bold mb-8 text-white/40 uppercase tracking-widest flex items-center gap-3">
        <Target size={18} />
        Technical Showcases
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card group p-6 flex flex-col items-start"
          >
            <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform mb-6">
              {project.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h4>
              <p className="text-white/50 text-sm mb-6 leading-relaxed blur-0">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/60">
                    {t}
                  </span>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 mt-auto w-full">
                <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-1">Impact</div>
                <div className="text-xs text-white/80">{project.impact}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;