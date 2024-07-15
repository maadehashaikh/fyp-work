import React from 'react'

const Exercise = () => {
  return (
    <div className='relative w-1/4 bg-green-400 h-60 rounded-lg  mt-5 ml-5'>
      <img 
        src="https://tse1.mm.bing.net/th?id=OIP.eX5LpIG3sF5EuLdJ8NHDJwAAAA&pid=Api&P=0&h=220" 
        alt="Exercise" 
        className="w-full h-full object-cover rounded-lg"/>
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="absolute inset-0 text-white text-3xl mt-24 ml-16 font-serif font-medium text-center">
      Cardio and Strength  <h3 className='text-2xl'> 30 Minutes💦</h3> 
      </div>
    </div>
  )
}

export default Exercise
