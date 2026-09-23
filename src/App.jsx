
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
import NewsContainer from './components/news/NewsContainer'
import ReviewContainer from './components/vedio-review/ReviewContainer'
import Footer from './components/shared/Footer'
import BookingContainer from './components/booking/BookingContainer'

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
      <BookingContainer/>
      <StatsSection/>
      <ServiceContainer/>
      <StepSection/>
      <TripsContainer/>
      <GalleryContainer/>
      <AppDisplaySection/>
      <NewsContainer/>
      <ReviewContainer/>
      <Footer/>
     </div>
    </LanguageProvider>
   
      
  )
}

export default App
