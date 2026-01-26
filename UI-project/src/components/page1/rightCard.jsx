import React from 'react'

const rightCard = () => {
  return (
    <div className='h-full w-80 overflow-hidden relative bg-gray-500 rounded-4xl'>
      <img className='h-full w-full object-cover opacity-70' src="https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D" alt="" />
      <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between'>
        <h2 className=' opacity-70 bg-white rounded-full h-15 w-15 flex justify-center items-center text-2xl font-bold rounded-full '> 1 </h2>
        
        <div>
            <p className='text-lg leading-normal text-white mb-8 font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt accusantium libero porro!</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white -font-medium px-7 py-3 rounded-full'>Satisfied</button>
                <button className='bg-blue-600 text-white -font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default rightCard
