import { useState } from 'react'
import LineChart from './components/LineChart/LineChart'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
  
  <h1 className='text-4xl bg-red-600'>Vite + React</h1>
  <PriceOptions></PriceOptions>

  <LineChart></LineChart>


    </>
  )
}

export default App
