import Navbar from "./component/Navbar/page"
import Hero from "./component/Hero/page"
import { PopularCar } from "./component/Popular Car/page"
import ReccomendCar from "./component/Recomended Cars/page"
import Footer from "./component/Footer/page"


 export default function Home(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <PopularCar/>
      <ReccomendCar/>
      <Footer/>
    </div>
  )
 }