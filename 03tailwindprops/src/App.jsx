import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "guru",
    age:21
  }

  let newarr=[1,2,3,4]

  return (
    <>
   <h1 className='bg-green-400 text-black p-4
   rounded-xl'>tailwind test</h1>
   <Card username ="guru" />
   <Card username ="aaryan"/>

    </>
  )
}

export default App
