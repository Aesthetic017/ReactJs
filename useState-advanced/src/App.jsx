import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)  
  
  const onClick = () => {
   console.log(num)
   setNum(prev=>(prev+1))
   setNum(prev=>(prev+1))
   setNum(prev=>(prev+1))
  }



  return (

    <div>
      <h1>{num}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

export default App
