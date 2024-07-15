import React from 'react'

const TotalCalories = () => {
  return (
    <div className='relative w-1/4 bg-green-400 h-60 rounded-lg mt-5'>
      <img 
        src="https://cdn-prod.medicalnewstoday.com/content/images/articles/245/245588/choosing-the-right-food.jpg" 
        alt="Total Calories" 
        className="w-full h-full object-cover rounded-lg"/>
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="absolute inset-0 text-white text-3xl mt-24 mr-5 font-serif font-medium">
      Total Calories <h3 className='text-2xl'> 500</h3> 
      </div>
    </div>
  )
}

export default TotalCalories
