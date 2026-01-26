import React from 'react'
import CenterLeft from './centerLeft'
import CenterRight from './centerRight'

const center = () => {
  return (
    <div className='py-12 flex gap-10 items-center px-18  h-[90vh]'>
      <CenterLeft/>
      <CenterRight/>
    </div>
  )
}

export default center
