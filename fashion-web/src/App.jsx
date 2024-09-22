import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Collections from "./components/Collections"
import Features from "./components/Features"
import Products from "./components/Products"
import Review from "./components/Review"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="shop">
        <Shop />
      </div>

      <Collections />

      <div id="features">
        <Features />
      </div>

      <div id="products">
        <Products />
      </div>

      <div id="review">
        <Review />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
