
import './App.css'
import DigitalTools from './component/DigitalTools/DigitalTools'
import Herosection from './component/HeroSection/Herosection'
import Navbar from './component/NavBar/Navbar'
import Premiummodel from './component/PremiumModel/Premiummodel'
import Ratinsection from './component/RatingSection/Ratinsection'

const premiumData = async () => {
 const res = await fetch("/data.json")
return res.json()
}

const premiumPromise = premiumData()
function App() {
 

  return (
    <>
    <Navbar/>
    <Herosection/>
    <Ratinsection/>
    <DigitalTools/>
    <Premiummodel premiumPromise={premiumPromise}/>
    </>
  )
}

export default App
