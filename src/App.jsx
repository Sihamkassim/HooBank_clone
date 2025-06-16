import Business from './components/BussinesPart.jsx'
import HeroSection from './components/HeroSection.jsx'
import NavBar from './components/NavBar.jsx'
import Stats from './components/statics.jsx'

const App = () => {
  return (
     <div className="bg-primary text-white min-h-screen font-poppins">
      <NavBar/>
      <HeroSection />
      <Stats/>
       <Business />
    </div>

  )
}

export default App
