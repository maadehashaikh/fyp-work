import React from 'react'

const NameComponent = () => {
  return (
    <div className=' w-full flex justify-between text-center text-white mt-1'>
      {/* left side  */}
      <div className='w-auto bg-green-600 rounded-lg ml-5 p-3 mt-1 shadow-lg shadow-gray-500'>
      <h1 className='text-3xl font-medium font-serif'>Hello ,<span className='text-xl font-serif'> Maadeha Shaikh 🎯</span>
      </h1>
      <p className='text-xl font-serif'>It's a new day , Lets catch up on your goals</p>
      </div>
      {/* Right side  */}
      <div className='w-2/5'>
      <input type="text" placeholder='Search your diet plans here' 
      className='bg-green-600 mt-5 border-2 p-2 w-60 rounded-md border-black placeholder:text-white text-sm shadow-lg shadow-gray-400 '/>
      <i class="fa-solid fa-magnifying-glass text-black ml-3 text-2xl mt-2"></i>
      </div>
    </div>
  )
}

export default NameComponent
