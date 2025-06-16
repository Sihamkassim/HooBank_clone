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
    <div className="bg-primary text-white min-h-screen font-poppins">
     
      <div className="px-4 sm:px-6 md:px-10 lg:px-16">
        <NavBar />
      </div>

      
      <main className="px-4 sm:px-6 md:px-10 lg:px-16 space-y-16 mt-8">
        <HeroSection />
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
      </main>

    
      <div className="mt-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <Footer />
      </div>
    </div>
  )
}

export default App
