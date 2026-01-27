import React from 'react'
import RightCard from './rightCard'

const CenterRight = (props) => {
  console.log(props.users)
  return (
    <div id='right' className='h-full scroll-smooth w-2/3 m-7 flex gap-5 rounded-4xl overflow-x-auto'>
      <div className='scrolling-wrapper'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx}  id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
      })}
     </div>
     
    </div>
  )
}

export default CenterRight
