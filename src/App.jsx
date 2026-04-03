import { Suspense, useState } from 'react'
import './App.css'
import DigitalTools from './component/DigitalTools/DigitalTools'
import Herosection from './component/HeroSection/Herosection'
import Models from './component/Models'
import Navbar from './component/NavBar/Navbar'
import Ratinsection from './component/RatingSection/Ratinsection'
import Cart from './component/Cart'
import TabsModel from './component/TabsModel'
import Getstep from './component/getStartStep/Getstep'
import SimpleTransparent from './component/Transparent/SimpleTransparent'
import Workflow from './component/RadyWorkFlow/Workflow'
import Footer from './component/FooterSection/Footer'

const getModels = async ()=>{
  const res = await fetch("/data.json")
  return res.json()
}

const modelPromise = getModels()

function App() {
 
const [activeTabe,setActiveTabe] = useState("Product")

const [carts,setCarts] = useState([])



  return (
    <>
      <Navbar/>

      <Herosection/>

      <Ratinsection/>

      <DigitalTools/>

      <TabsModel activeTabe={activeTabe} setActiveTabe={setActiveTabe} carts={carts} />

    {activeTabe === "Product" &&  <Suspense fallback={<p>Loading....</p>}>
       <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
     </Suspense>}


     {activeTabe === "Cart" && <Cart carts={carts} setCarts={setCarts} />}

     <Getstep/>

     <SimpleTransparent/>

     <Workflow/>

     <Footer/>

    </>
  )
}
export default App
