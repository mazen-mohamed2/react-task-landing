import Footer from "../components/Footer"
import Blog from "./sections/Blog"
import Download from "./sections/Download"
import Header from "./sections/Header"
import HotItem from "./sections/HotItem"
import IconSec from "./sections/IconSec"
import MostSold from "./sections/MostSold"
import ProductRecommendation from "./sections/ProductRecommendation"


const Landing = () => {
  return (
    <main>
    <Header/>
    <ProductRecommendation/>
    <HotItem/>
    <IconSec/>
    <MostSold/>
    <Blog/>
    <Download/>
    <Footer/>
    </main>
  )
}

export default Landing