
import BannerContainer from './components/Hero-Banner/BannerContainer'
import Navbar from './components/shared/Navbar'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

function App() {
 

  return (
    
    <LanguageProvider>
     <div className='min-h-screen'>
      <Navbar/>
      <BannerContainer/>
     </div>
    </LanguageProvider>
   
      
  )
}

export default App
