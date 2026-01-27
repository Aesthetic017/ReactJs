import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('Button is Clicked')
   }

  function inputChanging(elem){
    console.log((elem.target.value))
  } 

  function submit(){
    console.log('Sent')
  }

  const onScrolling=(elem)=>{
    if (elem.deltaY > 0)  {
      console.log('Scrolling Down at speed', elem.deltaY)
    }
    else {
      console.log('Scrolling Up at speed ', (elem.deltaY))
    }
  }
  return (
  
    <div>
      <h1>Hello, Ashutosh </h1>
      <button onDoubleClick={btnClicked}>Click Me</button>

      <input onChange={inputChanging} type="text" placeholder='Write Message' />
      <button onClick={submit } type='submit'>Submit </button>

      <div onWheel={onScrolling}>
      <div className="page1"></div>
      <div className="page2"></div>
      </div>
    </div>
   
  )
}

export default App
