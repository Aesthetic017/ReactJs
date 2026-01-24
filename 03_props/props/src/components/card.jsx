import React from 'react'

const Card = (props) => {    // take props from app
  console.log(props)    // check props   //line 8 - props.object value
  return (
       <div className='card'>
                <img src={props.img} alt="" />
                <h1>{props.user}, {props.age}</h1>  
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, accusamus.</p>
               <button>View Profile</button>
        </div>
  )
}

export default Card
