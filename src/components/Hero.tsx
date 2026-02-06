import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Linkedin, Youtube, Search, Database, BookMarked, Book, Users, Mail, Phone, Globe, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';
import image from './image.jpg';

const Hero = () => {
  const profiles = [
    { icon: <Globe size={18} />, name: 'Website', url: 'https://dr-vijayprofessor.onrender.com/' },
    { icon: <Linkedin size={18} />, name: 'LinkedIn', url: 'https://linkedin.com/in/dr-vijay-m-a894311b9' },
    { icon: <Youtube size={18} />, name: 'YouTube', url: 'https://www.youtube.com/@dr.vijaycse' },
    { icon: <BookOpen size={18} />, name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=nhYF56UAAAAJ&hl=en' },
    { icon: <Search size={18} />, name: 'ResearchGate', url: 'https://researchgate.net/profile/Vijay_m5' },
    { icon: <Database size={18} />, name: 'Scopus', url: 'https://scopus.com/authid/detail.uri?authorId=52664549300' },
    { icon: <BookMarked size={18} />, name: 'ORCID', url: 'https://orcid.org/0000-0003-3337-815X' },
    { icon: <Search size={18} />, name: 'Web of Science', url: 'https://www.webofscience.com/wos/author/record/AAG-3435-2021' }
  ];

  const stats = [
    { icon: <Award className="text-blue-400" />, label: 'IEEE Member', value: 'Active' },
    { icon: <BookOpen className="text-indigo-400" />, label: 'SCI Papers', value: '10+' },
    { icon: <Book className="text-purple-400" />, label: 'IEEE Pubs', value: '27+' },
    { icon: <Award className="text-pink-400" />, label: 'Patents', value: '6' },
    { icon: <GraduationCap className="text-emerald-400" />, label: 'Ph.D.', value: 'Anna Univ' },
    { icon: <Users className="text-orange-400" />, label: 'Scholars', value: '7' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <motion.div
            className="lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Associate Professor & INTI Research Fellow
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1] text-white"
            >
              Dr. <span className="text-gradient-primary">VIJAY M</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed font-medium"
            >
              A distinguished academic and researcher with 12 years of experience specializing in AI, Machine Learning,
              Data Science, and Cybersecurity. Research Fellow (2025-Present) at INTI University, Malaysia.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="mailto:vijaymepcoece@gmail.com"
                className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all active:scale-95 shadow-xl shadow-white/5"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="tel:+919500372833"
                className="group flex items-center justify-center gap-2 glass px-8 py-4 rounded-2xl font-bold text-white hover:bg-white/10 transition-all active:scale-95 border-white/20"
              >
                <Phone size={20} />
                Call +91 95003...
              </a>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-12 p-3 glass rounded-3xl w-fit border-white/10">
              {profiles.map((profile, index) => (
                <motion.a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="p-3 text-white/50 hover:text-white rounded-2xl transition-all"
                  title={profile.name}
                >
                  {profile.icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 group">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      {stat.icon}
                    </div>
                    <span className="text-white/40 text-xs font-medium uppercase tracking-wider">{stat.label}</span>
                  </div>
                  <div className="text-xl font-bold">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: Image/Visual */}
          <motion.div
            className="lg:w-2/5 relative"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative z-10 p-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-[3rem] rotate-6 opacity-20 blur-2xl -z-10" />
              <div className="p-3 glass rounded-[3.5rem] border-white/20 shadow-2xl overflow-hidden">
                <img
                  src={image}
                  alt="Dr. VIJAY M"
                  className="w-full h-auto rounded-[3rem] shadow-inner grayscale-[10%] hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5]"
                />
              </div>

              {/* Floating Contact Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 glass-card p-5 border-white/20 shadow-2xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Mail size={14} className="text-blue-400" />
                    <span>vijay.m@klu.ac.in</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Phone size={14} className="text-emerald-400" />
                    <span>+91 95003 72833</span>
                  </div>
                  <div className="h-px bg-white/10 my-2" />
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Available for Research</span>
                  </div>
                </div>
              </motion.div>

              {/* Achievement Badge */}
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 glass-card p-4 border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-tighter">Certified</div>
                    <div className="text-xs font-bold">IEEE Member</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
