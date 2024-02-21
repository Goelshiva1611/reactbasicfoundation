import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let [counter, setCounter] = useState(15)
  function addvalue(){
    if (counter == 20) {
      setCounter(counter)
    }
    else {
      counter = counter + 1;
      setCounter(counter)
    }
  }
  const diffvalue = () => {
    if (counter < 1) {
      setCounter(counter)
    }
    else {
      counter = counter - 1;
      setCounter(counter)
    }
  }

  return (
    <>

      <Card username="Diksha" btntext="Visit me" paragraph="Hello i am deiskha the topper Lorem Lorem" />
      <Card username="Sakshi" btntext="Click me" paragraph="Hello i am sakshi the topper" />
      <Card username="Abhijay Duggal" btntext="No Click " paragraph="Hello i am duggal the topper" />


      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/18204611/pexels-photo-18204611/free-photo-of-portrait-of-man-in-white-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
        <div class="pt-6 text-center space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>

      {/* <h1 className='rounded-lg p-4
                    border-blue-950 bg-cyan-300 text-5xl text-green-900-700 text
                      border-4 '>Tailwind test</h1> */}
      <div class='rounded-2xl  border-gray-400 m-9 p-10 border-2 text-2xl text-black font-semibold font font-mono '>
        <img className="rounded-full w-40 h-40 align-middle ml-96 mb-8 " src="https://images.pexels.com/photos/20188127/pexels-photo-20188127/free-photo-of-the-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <h2 >Welcome to chai and code ~~~~ </h2>
        <h2>Counter value is : {counter}</h2>
        <button
          onClick={addvalue}
        >Add number {counter}</button>
        <br />
        <br />
        <button
          onClick={diffvalue}
        >Remove number {counter}</button>
        <p>
          Footer : {counter}
        </p>

      </div>
    </>
  )
}

export default App
