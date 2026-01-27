import React from 'react'
import Section1 from './components/page1/Section1'
import Section2 from './components/page2/Section2'
const App = () => {

const users=[
  {img:'https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D',intro:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt accusantium libero porro!',tag:'Satisfied'},
  {img:'https://plus.unsplash.com/premium_photo-1661297504819-dd679f1880c0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', intro:'lorem ipsum doro sit, ahat bhsajk jaek che mash dobrya',tag:'Underserved'},
  {img:'https://i.pinimg.com/1200x/15/c6/2a/15c62a66cce8e701094d1549ec1dd7ea.jpg', intro:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi esse debitis delectus. Perferendis, iure quam.', tag:'Underbanged'},
  {img:'https://i.pinimg.com/736x/c3/ca/b5/c3cab5b336680ea41f335662669c6201.jpg', intro:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi esse debitis delectus. Perferendis, iure quam.', tag:'Underbanged'},
  {img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D', intro:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi esse debitis delectus. Perferendis, iure quam.', tag:'Underbanged'}

]

  return (
    <div>
      <Section1 users={users}/>

    </div>
  )
}

export default App
