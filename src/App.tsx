import './App.css'
import Brand from './components/Brand'
import Cards from './components/Cards'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'

function App() {
  return (
   <div className='overflow-x-hidden '>
   <HeroSection />
   <Cards />
   <Projects />
   <Brand />
   <Footer />
   </div>
  )
}

export default App
