import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

   function changeColor(color) {
    setColor(color)
   }

  return (
    <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}>
    <h1 className='text-5xl font-bold text-center pt-10  '>Background Changer</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => changeColor('red')}
            className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
            style={{ backgroundColor: 'red' }}
          >Red</button>
          <button
            onClick={() => changeColor('green')}
            className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
            style={{ backgroundColor: 'green' }}
          >Green</button>
          <button
            onClick={() => changeColor('grey')}
            className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
            style={{ backgroundColor: 'grey' }}
          >Grey</button>
          <button
            
              onClick={() => changeColor('orange')}
              className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
              style={{ backgroundColor: 'orange' }}>
          orange</button>


        </div>
      </div>
    </div>
  )
}

export default App