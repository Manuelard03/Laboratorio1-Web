import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import IntroSection from './sections/IntroSection/IntroSection';
import AdditionalImage from './components/AdditionalImage/AdditionalImage';
import LogoSection from './sections/LogoSection/LogoSection';
import BodySection from './sections/BodySection/BodySection';
import CardSection from './sections/CardSection/CardSection';
import CallToActionSection from './sections/CallToActionSection/CallToActionSection';
import Footer from './sections/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <IntroSection/>
      <AdditionalImage 
        src="\src\assets\img\notion-hero-v3.png" 
        alt="Additional img" />
      <LogoSection />
      <BodySection></BodySection>
      <CardSection />
      <CallToActionSection />
      <Footer />
    </>
  )
}

export default App
