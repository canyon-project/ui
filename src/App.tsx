import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomepageMainboard from "./components/hompage/mainboard.tsx";
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomepageMainboard></HomepageMainboard>
    </>
  )
}

export default App
