import React from 'react'
import 'remixicon/fonts/remixicon.css'

import HeroText from './heroText'
import ArrowIcon from './arrowIcon'
const centerLeft = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
       
       <HeroText/>
       <ArrowIcon/>


    </div>
  )
}

export default centerLeft
