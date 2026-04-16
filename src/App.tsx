import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import MsmeAchievement from './components/MsmeAchievement';
import Patents from './components/Patents';
import CursorTracker from './components/CursorTracker';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      <CursorTracker />
      {/* Background Elements */}
      <div className="fixed inset-0 bg-mesh -z-10" />
      <div className="fixed inset-0 bg-grid -z-10 opacity-30" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-background/50 to-background -z-10" />

      <Header />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Hero />
            <div className="container mx-auto px-4 space-y-32 pb-32">
              <About />
              <Skills />
              <Experience />
              <Publications />
              <MsmeAchievement />
              <Projects />
              <Patents />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-12 border-t border-white/5 bg-black/20 backdrop-blur-xl relative z-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Dr. VIJAY M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;