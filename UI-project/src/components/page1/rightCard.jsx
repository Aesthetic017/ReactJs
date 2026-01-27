import React from 'react'
import RightCardContent from './rightCardContent'
import ImageContainer from './imageContainer'
const rightCard = (props) => {
  return (
    <div className='h-80% w-70 shrink-0 overflow-hidden relative bg-gray-500 rounded-4xl'>
        <img className='h-full w-full object-cover opacity-70' src={props.img} alt="" />
      <RightCardContent id = {props.id}intro = {props.intro} tag ={props.tag}/>
    </div>
  )
}

export default rightCard
