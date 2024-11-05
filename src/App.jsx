import './App.css'
import Navbar from "./Components/Navbar"
import Product from "./Components/Product"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="bg-[#3F3E56]">
      <Navbar/>

      <Product/>
      
      <Footer />
    </div>
  )
}

export default App
