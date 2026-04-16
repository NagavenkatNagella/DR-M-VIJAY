import { motion } from 'framer-motion';
import { Award, IndianRupee, Target, Users, BookOpen, Globe2, Lightbulb, CheckCircle2 } from 'lucide-react';
import msmeImage from './Msme.jpg';

const MsmeAchievement = () => {
  return (
    <section id="msme-achievement" className="py-20 relative scroll-mt-32">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 glass border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
          <Award size={28} />
        </div>
        <div>
          <p className="section-subheading text-emerald-400">Mentor & Student Achievement</p>
          <h2 className="section-heading">MSME Funded Innovation Project</h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Image & Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="relative rounded-3xl overflow-hidden glass border-white/10 group bg-black/20 p-2 shadow-2xl shadow-emerald-500/5">
            {/* Animated Glow Backlight */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500/50 rounded-tl-2xl z-20 pointer-events-none group-hover:scale-110 transition-transform" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-500/50 rounded-tr-2xl z-20 pointer-events-none group-hover:scale-110 transition-transform" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-500/50 rounded-bl-2xl z-20 pointer-events-none group-hover:scale-110 transition-transform" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500/50 rounded-br-2xl z-20 pointer-events-none group-hover:scale-110 transition-transform" />

            {/* Scanning Line Animation */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-emerald-500/30 blur-sm z-30 animate-[scan_3s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100" />

            <div className="relative rounded-2xl overflow-hidden z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 opacity-60" />
              <img 
                src={msmeImage} 
                alt="MSME Funded Innovation Project" 
                className="w-full h-auto max-h-[700px] object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-sm font-bold mb-4 backdrop-blur-md">
                  <IndianRupee size={14} />
                  <span>₹15 Lakhs MSME Funding</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 max-w-md leading-tight">
                  Innovation in Adoption of Industry 4.0 & 5.0
                </h3>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 border-emerald-500/20 text-center relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full" />
            <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full" />
            <p className="text-lg md:text-xl font-medium text-white/90 italic relative z-10 leading-relaxed font-serif">
              "Transforming ideas into impactful innovations through mentorship, technology, and vision."
            </p>
          </div>
        </motion.div>

        {/* Right Column: Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-lg text-white/70 leading-relaxed">
            We are proud to highlight a significant academic and research milestone achieved under expert mentorship and dedicated student innovation.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass p-5 rounded-2xl flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Users className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider font-bold mb-1">Mentor</p>
                <div className="font-bold text-white mb-1">Dr. M. Vijay</div>
                <div className="text-xs text-white/60">Associate Professor, Dept. of CSE</div>
                <p className="text-[10px] text-white/40 mt-2 leading-relaxed">
                  Provided strategic guidance, technical expertise, and continuous support throughout the project lifecycle.
                </p>
              </div>
            </div>

            <div className="glass p-5 rounded-2xl flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <BookOpen className="text-orange-400" size={20} />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider font-bold mb-1">Student</p>
                <div className="font-bold text-white mb-1">Sandeep Kotari</div>
                <div className="text-xs text-white/60">B.Tech – CSE (IV Year)</div>
                <p className="text-[10px] text-white/40 mt-2 leading-relaxed">
                  Demonstrated exceptional innovation and technical skills in developing a solution aligned with Industry 4.0 & 5.0 concepts.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 border-white/5">
            <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest flex items-center gap-2 mb-6">
              <Lightbulb size={16} className="text-yellow-400" />
              Achievement Highlights
            </h3>
            <ul className="space-y-4">
              {[
                "Successfully secured ₹15 Lakhs MSME funding",
                "Developed a solution focused on smart industrial transformation",
                "Integrated concepts of Industry 4.0 (Automation, IoT) and Industry 5.0 (Human-centric innovation)",
                "Contributed towards real-world problem-solving in MSMEs",
                "Recognized for innovation and societal impact"
              ].map((highlight, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-white/80">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 border-white/5 bg-gradient-to-br from-blue-500/5 to-emerald-500/5">
            <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest flex items-center gap-2 mb-4">
              <Globe2 size={16} className="text-blue-400" />
              Impact & Sustainability
            </h3>
            <p className="text-sm text-white/70 mb-5">
              This project aligns with the United Nations Sustainable Development Goals (SDGs):
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1.5 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/20 text-xs font-bold flex items-center gap-2">
                <Target size={12} /> SDG 1: No Poverty
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-yellow-500/20 text-yellow-400 border border-yellow-500/20 text-xs font-bold flex items-center gap-2">
                <Target size={12} /> SDG 2: Zero Hunger
              </span>
            </div>
            <p className="text-xs text-white/50 italic">
              The innovation aims to create scalable and sustainable solutions that support economic growth and societal well-being.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MsmeAchievement;
