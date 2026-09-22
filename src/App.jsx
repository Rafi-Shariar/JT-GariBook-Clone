
import { useEffect } from 'react'
import BannerContainer from './components/Hero-Banner/BannerContainer'
import ServiceContainer from './components/service/ServiceContainer'
import Navbar from './components/shared/Navbar'
import StatsSection from './components/StatsSection'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import StepSection from './components/StepsSection'
import TripsContainer from './components/Trips/TripsContainer'
import GalleryContainer from './components/gallery/GalleryContainer'
import AppDisplaySection from './components/AppDisplaySection'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    
    <LanguageProvider>
     <div className='min-h-screen'>
      <Navbar/>
      <BannerContainer/>
      <StatsSection/>
      <ServiceContainer/>
      <StepSection/>
      <TripsContainer/>
      <GalleryContainer/>
      <AppDisplaySection/>
     </div>
    </LanguageProvider>
   
      
  )
}

export default App
