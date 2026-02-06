import { motion } from 'framer-motion';
import { Code2, Brain, BarChart3, Globe, Sparkles, MessageSquare, Terminal, Database, ShieldCheck, PenTool, Lightbulb, Users } from 'lucide-react';

const Skills = () => {
  const technicalCategories = [
    {
      title: "AI & Data Science",
      icon: <Brain className="text-blue-400" />,
      groups: [
        { name: "Programming", items: ["Python", "R", "MATLAB", "C++"] },
        { name: "AI & ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "CNN/RNN", "Deep Learning Models"] },
        { name: "Data Analysis", items: ["NumPy", "Pandas", "Tableau", "Power BI", "Big Data Analytics"] }
      ]
    },
    {
      title: "Cybersecurity & Web",
      icon: <ShieldCheck className="text-emerald-400" />,
      groups: [
        { name: "Security", items: ["Network Security", "Ethical Hacking", "Cryptography", "Intrusion Detection"] },
        { name: "Development", items: ["HTML/CSS", "JavaScript", "SQL", "MongoDB"] },
        { name: "Tools", items: ["Vite", "Git", "LaTeX", "Shell Scripting"] }
      ]
    }
  ];

  const leadershipSkills = [
    {
      title: "Academic Leadership",
      icon: <Users className="text-purple-400" />,
      items: ["Curriculum Design", "Mentorship", "Research Supervision", "Higher Ed Leadership"]
    },
    {
      title: "Event & Strategy",
      icon: <Lightbulb className="text-orange-400" />,
      items: ["Hackathons", "Workshops", "International Conferences", "Strategic Planning"]
    },
    {
      title: "Professional Skills",
      icon: <PenTool className="text-pink-400" />,
      items: ["Public Speaking", "Technical Writing", "Problem-Solving", "Research Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative scroll-mt-32">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-14 w-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 glass border-white/10 shadow-2xl shadow-purple-500/10">
          <Sparkles size={28} />
        </div>
        <div>
          <p className="section-subheading">Technical & Soft Skills</p>
          <h2 className="section-heading">Expertise & Skillset</h2>
        </div>
      </div>

      <div className="space-y-20">
        {/* Technical Mastery Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {technicalCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-xl bg-white/5 text-white/80">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{cat.title}</h3>
              </div>

              <div className="grid sm:grid-cols-3 gap-8">
                {cat.groups.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-6">
                    <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{group.name}</h4>
                    <div className="flex flex-col gap-3">
                      {group.items.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 group/skill">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500/40 group-hover/skill:bg-blue-400 transition-colors" />
                          <span className="text-sm text-white/60 group-hover/skill:text-white transition-colors">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership & Soft Skills Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {leadershipSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 hover:bg-white/[0.08] transition-all group"
            >
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {idx === 0 && <Users className="text-purple-400" />}
                {idx === 1 && <Lightbulb className="text-orange-400" />}
                {idx === 2 && <PenTool className="text-pink-400" />}
              </div>
              <h4 className="text-lg font-bold text-white mb-6 tracking-tight">{skill.title}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, iIdx) => (
                  <span key={iIdx} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/50 group-hover:text-white/80 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;