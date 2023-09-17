import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <DaisyNav></DaisyNav>
  <h1 className='text-4xl bg-red-600'>Vite + React</h1>
    


    </>
  )
}

export default App
