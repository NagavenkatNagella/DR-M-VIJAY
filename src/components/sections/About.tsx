import { motion } from 'framer-motion';
import { User, Cpu, Shield, Database, Brain, Users, Award, BookOpen, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="text-blue-400" />,
      title: "Research Leadership",
      description: "Directing path-breaking research in AI, Machine Learning, and Computer Vision."
    },
    {
      icon: <Users className="text-indigo-400" />,
      title: "Scholarly Mentorship",
      description: "Guiding 7 research scholars (including 1 NRI) towards doctoral success."
    },
    {
      icon: <Calendar className="text-purple-400" />,
      title: "Decade of Excellence",
      description: "12+ years of enriched experience at Kalasalingam Academy (KARE)."
    },
    {
      icon: <GraduationCap className="text-emerald-400" />,
      title: "Academic Pedigree",
      description: "Ph.D. in Computer Science from the prestigious Anna University."
    }
  ];

  return (
    <section id="about" className="py-20 relative scroll-mt-32">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 glass border-white/10 shadow-2xl shadow-blue-500/10">
              <User size={28} />
            </div>
            <div>
              <p className="section-subheading">Personal Profile</p>
              <h2 className="section-heading">Distinguished Academic & Researcher</h2>
            </div>
          </div>

          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              Dr. <span className="text-white font-bold">Vijay M</span> is a distinguished academic and <span className="text-blue-400 font-semibold">IEEE Member</span> with extensive expertise in
              Artificial Intelligence, Machine Learning, Data Science, and Cybersecurity. Currently serving as an
              Associate Professor at Kalasalingam Academy of Research and Education, he is deeply committed to
              fostering innovation and knowledge dissemination.
            </p>
            <p>
              As a prolific researcher, he has contributed significantly to high-impact <span className="text-white font-medium">SCI Journals</span> and
              prestigious international conferences. He is a <span className="text-emerald-400 font-semibold">Research Fellow (2025-Present)</span> at
              INTI International University, Malaysia, bridging global academic perspectives.
            </p>
            <p>
              Dr. Vijay is actively involved in organizing impactful events such as workshops, hackathons,
              and conferences, bridging the gap between academia and industry. His leadership extends to
              mentoring young minds and spearheading initiatives in IEEE Student Branch.
            </p>
          </div>

          <div className="mt-12 p-6 glass rounded-2xl border-white/5 bg-gradient-to-r from-blue-500/5 to-transparent">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Shield size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-1">IEEE Student Branch Header</div>
                <p className="text-xs text-white/40 leading-relaxed">Promoting professional development, technical competitions, and community outreach.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Cards Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 grid sm:grid-cols-2 gap-6"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -10,
                backgroundColor: "rgba(255,255,255,0.08)",
                borderColor: "rgba(59,130,246,0.3)"
              }}
              className="glass-card p-6 flex flex-col gap-6 group border-white/5 transition-all duration-500"
            >
              <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors shadow-inner">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}

          <div className="sm:col-span-2 glass-card p-6 border-emerald-500/10 bg-emerald-500/5 items-center flex justify-between group">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <BookOpen size={24} />
              </div>
              <div>
                <div className="font-bold text-white group-hover:text-emerald-400 transition-colors">Vision for Innovation</div>
                <p className="text-xs text-white/40">Integrating AI ethics with real-world cybersecurity solutions.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;