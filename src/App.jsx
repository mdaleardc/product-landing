import './App.css'
import Navbar from "./Components/Navbar"
import Product from "./Components/Product"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="grid grid-cols-3" >
      <Navbar/>

      <Product/>
      
      <Footer />
    </div>
  )
}

export default App
