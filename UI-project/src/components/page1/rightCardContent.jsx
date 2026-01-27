import React from 'react'

const rightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between'>
        <h2 className=' opacity-70 bg-white rounded-full h-15 w-15 flex justify-center items-center text-2xl font-bold rounded-full '> {props.id+1} </h2>
        
        <div>
            <p className='text-lg leading-normal text-white mb-8 font-bold'>{props.intro}</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white -font-medium px-7 py-3 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white -font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default rightCardContent
