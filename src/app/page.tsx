import Navbar from "./component/Navbar/page"
import Hero from "./component/Hero/page"
import Popularcar from "./component/Popular_Car/page"
import ReccomendCar from "./component/Recomended_Cars/page"
import Footer from "./component/Footer/page"


 export default function Home(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Popularcar/>
      <ReccomendCar/>
      <Footer/>
    </div>
  )
 }