import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap duration-200 justify-center bottom-12 inset-x-0 px-3">
      <div className="flex flex-wrap justify-center shadow-lg px-7 py-2 rounded-3xl gap-5"
      style={{backgroundColor: "white"}}>
        <button 
        onClick={() => setColor("red")}
        className="px-4 outline-none rounded-full text-white py-1"
        style={{backgroundColor:"red"}}>Red</button>
        <button 
         onClick={() => setColor("blue")}
        className="px-4 outline-none rounded-full text-white py-1"
        style={{backgroundColor:"blue"}}>blue</button>
        <button 
         onClick={() => setColor("green")}
        className="px-4 outline-none rounded-full text-white py-1"
        style={{backgroundColor:"green"}}>Green</button>

         <button 
         onClick={() => setColor("yellow")}
        className="px-4 outline-none rounded-full text-white py-1"
        style={{backgroundColor:"green"}}>yellow</button>

         <button 
         onClick={() => setColor("purple")}
        className="px-4 outline-none rounded-full text-white py-1"
        style={{backgroundColor:"green"}}>purple</button>
         <button 
         onClick={() => setColor("orange")}
        className="px-4 outline-none rounded-full text-white py-1"
        style={{backgroundColor:"green"}}>orange</button>
         <button 
         onClick={() => setColor("black")}
        className="px-4 outline-none rounded-full text-white py-1"
        style={{backgroundColor:"green"}}>black</button>
         <button 
         onClick={() => setColor("white")}
        className="px-4 outline-none rounded-full text-white py-1"
        style={{backgroundColor:"green"}}>white</button>
      </div>
      </div>
    </div>
  )
}

export default App
