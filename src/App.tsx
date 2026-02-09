import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Tools } from './components/Tools';
import { Timeline } from './components/Timeline';
import { Benefits } from './components/Benefits';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tools />
        <Timeline />
        <Benefits />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
