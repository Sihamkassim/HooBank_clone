import CardDeal from './components/BetterCard.jsx'
import Billing from './components/bills.jsx'
import Business from './components/BussinesPart.jsx'
import CTA from './components/Call_To_Action.jsx'
import Clients from './components/Clientss.jsx'

import Footer from './components/Footer.jsx'
import HeroSection from './components/HeroSection.jsx'
import NavBar from './components/NavBar.jsx'
import Stats from './components/statics.jsx'
import Testimonials from './components/Testimonials.jsx'
const App = () => {
  return (
     <div className="bg-primary text-white min-h-screen font-poppins pl-6 sm:pl-16">

      <NavBar/>
      <HeroSection />
      <Stats/>
       <Business />
       <Billing />
       <CardDeal />
       <Testimonials />
       <Clients />
       <CTA  />
       <Footer />
    </div>

  )
}

export default App
