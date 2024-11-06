import { React, useState } from "react"
import Data from "../Data/Data"

const Product = () => {
  
  const [words, setWords] = useState(Data);
  
  return (
    <div className="pt-[2rem] bg-[#33FF00]">
    <h1 className="text-bold-800 text-[#FF0700]">Product Section</h1>
    <h2>
    {
      words.map(word => {
        return (
        <h1>Products</h1>
        )
      })
    }
    </h2>
    </div>
    )
}

export default Product;