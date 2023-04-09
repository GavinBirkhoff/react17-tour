import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FuncCom from "./fixtures/state/FuncCom"
import ClassCom from "./fixtures/state/ClassCom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FuncCom></FuncCom>
      <ClassCom></ClassCom>
    </div>
  )
}

export default App
