import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(10)

  function increase() {
    setNum(num + 5)
  }

  function decrease() {
    setNum(num - 3)
  }

  function multiple() {
    setNum(num * 3)
  }

  function divide() {
    setNum(num / 2)
  }

  function clear() {
    setNum(0)
  }

  return (
    <div className="container">
      <h1>React Number Fun</h1>
      <h2 className="number">{num}</h2>
      <div className="buttons">
        <button onClick={increase}>Increase by 5</button>
        <button onClick={decrease}>Decrease by 3</button>
        <button onClick={multiple}>Multiply by 3</button>
        <button onClick={divide}>Divide by 2</button>
        <button onClick={clear} className="clear-btn">Clear</button>
      </div>
    </div>
  )
}

export default App
