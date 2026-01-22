import card from './components/card'
import navbar from './components/navbar'
import React from "react"
const App = () => {
  return (
    <div>
      {navbar()}
      {card()}
      
    </div>
  )
}

export default App
