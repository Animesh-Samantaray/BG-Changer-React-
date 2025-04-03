import { useState } from 'react'
import H from './components/h.jsx'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  const [clr,setclr]=useState('white');
  return (
    <div className='w-full h-screen  duration-500 transition-colors ease-in'
    style={{backgroundColor:color}}>

    <H col={clr}></H>

<div className="fixed bottom-10 flex flex-wrap justify-center px-6 inset-x-0 items-center  ">
        <div className='flex flex-wrap justify-center items-center  gap-7 bg-white rounded-lg py-4 px-12'>
    <button className='h-12 w-[90px] bg-red-600 px-6 rounded-lg text-white'
    onClick={()=>{setColor('red');
      setclr('black');
    }}
    >Red</button>


    <button className='h-12 w-[90px] bg-orange-500 rounded-lg text-white cursor-pointer'  
    onClick={()=>{setColor('orange');
      setclr('black');
    }}
    >Orange</button>


    <button className='h-12 w-[90px] bg-green-700 rounded-lg text-white cursor-pointer' 
    onClick={()=>{setColor('green');
      setclr('white');
    }}
    >Green</button>


    <button className='h-12 w-[90px] bg-blue-700 rounded-lg text-white cursor-pointer' 
    onClick={()=>{setColor('blue');
      setclr('black');
    }}
    >Blue</button> 


    <button className='h-12 w-[90px] bg-pink-400 rounded-lg text-white cursor-pointer' 
    onClick={()=>{setColor('pink');
      setclr('black');
    }}
    >Pink</button>

    <button className='h-12 w-[90px]  bg-cyan-500 rounded-lg text-white cursor-pointer' 
    onClick={()=>{setColor('cyan');
      setclr('black');
    }}
    >Cyan</button>

<button className='h-12 w-[90px]  bg-gray-500 rounded-lg text-white cursor-pointer' 
    onClick={()=>{setColor('gray');
      setclr('white');
    }}
    >Gray</button>

        </div>
</div>
    </div>
  )
}

export default App
