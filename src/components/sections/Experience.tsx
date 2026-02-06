import { motion } from 'framer-motion';
import { Briefcase as BriefcaseIcon, GraduationCap as GradIcon, Award as AwardIcon, Users as UsersIcon, Calendar as CalendarIcon } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Professor",
      organization: "Kalasalingam Academy of Research and Education",
      period: "2012 - Present",
      responsibilities: [
        "12+ years of academic experience in engineering education and research mentorship",
        "Designing and delivering specialized courses in Data Science, Machine Learning, and Computer Vision",
        "Directing research initiatives and fostering industry-academic collaborations",
        "Organizing high-impact technical workshops, hackathons, and global conferences",
        "spearheading Student Research Group initiatives for product development"
      ]
    },
    {
      title: "Research Fellow",
      organization: "INTI International University, Malaysia",
      period: "2025 - Present",
      responsibilities: [
        "Conducting advanced research in AI-driven healthcare solutions and IoT systems",
        "Collaborating with international research groups for high-impact publications",
        "Mentoring post-graduate students in deep learning methodologies"
      ]
    },
    {
      title: "IEEE Coordinator",
      organization: "IEEE Student Branch",
      period: "Various Terms",
      responsibilities: [
        "Coordinating technical competitions and professional development events",
        "Promoting global IEEE standards and networking opportunities for students",
        "Managing resources and driving innovative research initiatives within the branch"
      ]
    }
  ];

  const education = [
    {
      degree: "Ph.D. in Computer Science & Engineering",
      inst: "Anna University, Chennai",
      year: "2022",
      detail: "Specialized in Advanced AI & ML methodologies"
    },
    {
      degree: "M.E. in Communication Systems",
      inst: "Mepco Schlenk Engineering College",
      year: "2012",
      detail: "Graduated with 8.35 CGPA"
    },
    {
      degree: "B.E. in Electronics & Communication",
      inst: "Anna University",
      year: "2010",
      detail: "Graduated with 78%"
    }
  ];

  return (
    <section id="experience" className="py-20 relative scroll-mt-32">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-14 w-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 glass border-white/10 shadow-2xl shadow-indigo-500/10">
          <BriefcaseIcon size={28} />
        </div>
        <div>
          <p className="section-subheading">Career & Academics</p>
          <h2 className="section-heading">Experience & Academic Journey</h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Timeline Column */}
        <div className="lg:col-span-2 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-500 before:to-transparent"
            >
              <div className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

              <div className="glass-card p-8 group hover:border-blue-500/20 transition-all duration-500">
                <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                    <p className="text-blue-400/80 font-semibold text-lg">{exp.organization}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/40 group-hover:text-white/80 transition-colors">
                    <CalendarIcon size={14} />
                    {exp.period}
                  </div>
                </div>

                <ul className="grid sm:grid-cols-1 gap-4">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex gap-4 text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500/30 mt-2 shrink-0 group-hover:bg-blue-400 transition-colors" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-indigo-500/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <GradIcon className="text-indigo-400" size={24} />
              <h3 className="text-xl font-bold text-white tracking-tight">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/10 group">
                  <div className="absolute left-[-3px] top-2 h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-indigo-400 transition-colors" />
                  <h4 className="font-bold text-white leading-tight group-hover:text-indigo-400 transition-colors">{edu.degree}</h4>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">{edu.inst} • {edu.year}</p>
                  <p className="text-xs text-white/50 mt-2">{edu.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Memberships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-emerald-500/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <AwardIcon className="text-emerald-400" size={24} />
              <h3 className="text-xl font-bold text-white tracking-tight">Memberships</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 group hover:bg-emerald-500/10 transition-colors">
                <h4 className="font-bold text-white text-sm mb-1 group-hover:text-emerald-400">IEEE Member</h4>
                <p className="font-medium text-[10px] text-white/30 uppercase tracking-widest">CS & SMC Societies</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/[0.08] transition-colors">
                <h4 className="font-bold text-white text-sm mb-1">Soft Computing Research Society</h4>
                <p className="font-medium text-[10px] text-white/30 uppercase tracking-widest">Member ID: 2289</p>
              </div>
            </div>
          </motion.div>

          {/* Research Supervision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-orange-500/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <UsersIcon className="text-orange-400" size={24} />
              <h3 className="text-xl font-bold text-white tracking-tight">Supervision</h3>
            </div>
            <div className="flex items-center justify-between p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10 shadow-inner">
              <span className="text-white/40 text-sm font-medium">Research Scholars</span>
              <div className="flex flex-col items-end">
                <span className="text-4xl font-black text-orange-400 tracking-tighter">07</span>
                <span className="text-[10px] text-orange-400/40 uppercase font-bold tracking-widest mt-1">Supervising</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;