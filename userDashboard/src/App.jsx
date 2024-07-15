import './App.css'
import UpperFoodItems from './components/UpperFoodItems'
import NameComponent from './components/NameComponent'
import WaterIntake from './components/WaterIntake'
import TotalCalories from './components/TotalCalories'
import Exercise from './components/Exercise'

function App() {
  return (
    <div className='bg-gray-400 h-full w-full'>
    <NameComponent/>
    <UpperFoodItems/>
    <div className=' w-full flex text-center justify-center gap-14 '>
    <WaterIntake/>
    <TotalCalories/>
    <Exercise/>
    </div>
    </div>
  )
}
export default App
