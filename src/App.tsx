import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Systems from './components/Systems';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-[#e5e5e5] selection:bg-[#f43f5e]/30 selection:text-white">
      <Navbar />
      <main className="flex-grow relative z-0">
        <Hero />
        <Projects />
        <Systems />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}