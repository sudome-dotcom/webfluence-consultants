import ParticleCanvas from './components/ParticleCanvas'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import About from './components/About'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Work from './components/Work'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './App.css'

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Stats />
        <Testimonials />
        <Process />
        <Work />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
