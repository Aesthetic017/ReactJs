import React from 'react'
import Card from './components/card.jsx'
const App = () => {
  return (
    <div className='parent'>
    
    <Card user='ashutosh' age={25} img='https://images.unsplash.com/photo-1664044020180-b75bfddf9776?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlhbW9uZHxlbnwwfHwwfHx8MA%3D%3D'/> 
    <Card user='ashutosh' age={28} img='https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww'/>  
    <Card user='ashutosh' age={21} img='https://plus.unsplash.com/premium_photo-1661847643150-4e06569d2ec1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlnZXJ8ZW58MHx8MHx8fDA%3D'/>        
    
    </div>
  )
}

export default App


//line 7-8  forward properties to child i.e. card