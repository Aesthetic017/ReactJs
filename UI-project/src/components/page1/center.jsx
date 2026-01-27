import React from 'react'
import CenterLeft from './centerLeft'
import CenterRight from './CenterRight'

const Center = (props) => {
  return (
    <div className='pb-20 flex gap-10 items-center px-18  h-[90vh]'>
      <CenterLeft/>
      <CenterRight users={props.users}/>
    </div>
  )
}

export default Center
