import { motion } from 'framer-motion';
import { Lightbulb, Shield, Cpu, Database, Monitor, Plane, Award, FileText } from 'lucide-react';

const Patents = () => {
  const patents = [
    {
      icon: <Cpu className="text-blue-400" />,
      title: "Wind-Powered Wireless Charging System for Electric Vehicles",
      status: "Granted",
      type: "International Design Patent"
    },
    {
      icon: <Database className="text-purple-400" />,
      title: "System for Automated Medication Dispensing and Tracking",
      status: "Granted",
      type: "Healthcare Innovation"
    },
    {
      icon: <Shield className="text-emerald-400" />,
      title: "Biometric Authentication Device for Cybersecurity Applications",
      status: "Granted",
      type: "Reg: 411262-001"
    },
    {
      icon: <Lightbulb className="text-amber-400" />,
      title: "Navigation System for Visually Challenged",
      status: "Published",
      type: "Indian Patent Publication"
    },
    {
      icon: <Monitor className="text-orange-400" />,
      title: "Sensor Stimulated Touch Responsive Frame for Non-Touch Screen Laptops",
      status: "Published",
      type: "App: 202341011612"
    },
    {
      icon: <Plane className="text-indigo-400" />,
      title: "Machine Vision-Based IoT-Enabled Pest Identification Drone",
      status: "Published",
      type: "App: 202241000353"
    },
    {
      icon: <Database className="text-purple-400" />,
      title: "Machine Learning-Trained IoT and Cloud Computing-Based Ground Water Quality Monitoring Poles",
      status: "Published",
      type: "App: 202241003025"
    }
  ];

  return (
    <section id="patents" className="py-20 relative scroll-mt-32">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-14 w-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 glass border-white/10 shadow-2xl shadow-amber-500/10">
          <Award size={28} />
        </div>
        <div>
          <p className="section-subheading">Intellectual Property</p>
          <h2 className="section-heading">Patents & Innovations</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patents.map((patent, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-6 flex flex-col items-center text-center relative overflow-hidden group"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileText size={80} />
            </div>

            <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 shadow-inner">
              {patent.icon}
            </div>

            <div className="inline-flex px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-bold text-white/30 uppercase tracking-tighter mb-4">
              {patent.type}
            </div>

            <h3 className="text-lg font-bold text-white mb-4 line-clamp-2 px-2 leading-relaxed">
              {patent.title}
            </h3>

            <div className={`mt-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border ${patent.status === 'Granted'
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
              }`}>
              {patent.status === 'Granted' && <Award size={12} />}
              {patent.status}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 glass p-8 rounded-[2rem] border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="h-14 w-14 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
            <Lightbulb size={28} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">Innovation Roadmap</h4>
            <p className="text-white/40 text-sm">Multiple additional applications in pipeline for AI-Healthcare integration.</p>
          </div>
        </div>
        <button className="px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
          Inquire for IP Collaboration
        </button>
      </div>
    </section>
  );
};

export default Patents;