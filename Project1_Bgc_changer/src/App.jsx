import React from "react";
import { useState } from "react";
import Button from "./button"; // Importing the Button component from its file

function App() {
  const [Color, setBackgroundColor] = useState("pink");

  return (
    <>
      <div className="border w-screen h-screen border-black" style={{ backgroundColor: Color }}>
        <div className=" font-mono m-auto mt-44  p-5 text-black text-2xl align-bottom w-[800px] h-[300px]">

          <h1 className="font-mono text-4xl text-center text-amber-800">This is the first Project ~~~~ </h1>
          <img className="w-20 h-20 rounded-full text-center m-auto" src="https://images.pexels.com/photos/18748935/pexels-photo-18748935/free-photo-of-pigeons-around-newlyweds-standing-with-eiffel-tower-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />

          <div className="  ml-4 p-9">
            <button className="bg-red-600 border-red-700 border-2 rounded-md p-2 m-4" onClick={() => setBackgroundColor("red")}>
              Red
            </button>
            <button className=" bg bg-yellow-500 border-yellow-700 border-2 rounded-md p-2 m-4" onClick={() => setBackgroundColor("yellow")}>
              Yellow
            </button>
            <button className=" bg-black text-white border-black-700 border-2 rounded-md p-2 m-4" onClick={() => setBackgroundColor("black")}>
              Black
            </button>
            <button className=" bg-green-400 border-green-700 border-2 rounded-md p-2 m-4 " onClick={() => setBackgroundColor("green")}>
              Green
            </button>
            <button className=" bg-blue-400 border-blue-600 border-2 rounded-md p-2 m-4" onClick={() => setBackgroundColor("blue")}>
              Blue
            </button>
            <button className=" bg-gray-400 border-gray-700 border-2 rounded-md p-2 m-4" onClick={() => setBackgroundColor("gray")}>
              Gray
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default App;