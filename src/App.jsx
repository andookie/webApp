import { useState } from 'react'
import Home from './pages/Home'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
        <h1>Andookie's VALORANT App!</h1>
    </div>
        <h2>Check Your MMR!</h2>
      <Home/>
    </>
  )
}

export default App
