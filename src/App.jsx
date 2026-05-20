import { useState } from 'react'
import Home from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home w="Check Your MMR!"/>
    </>
  )
}

export default App
