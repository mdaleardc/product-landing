import { React, useState } from "react"
import Data from "../Data/Data"

const Product = () => {
  
  const [words, setWords] = useState(Data);
  
  return (
    <>
    <h1 className="bg-[#33FF00] text-bold-800 text-[#FF0700]">Product Section</h1>
    <h2>
    {
      words.map(word => {
        return (
        <h3>Word: {word.word}</h3>
        )
      })
    }
    </h2>
    </>
    )
}

export default Product;