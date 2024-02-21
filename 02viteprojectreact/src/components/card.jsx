import React from 'react'

function Card({username,btntext,paragraph})
{
    
    return (
          <div class=" align-middle m-8 relative h-[400px] w-[300px] rounded-md rounded-r-lg border-b-64
      ">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-blue-400">{username}</h1>
          <p class="mt-2 text-sm text-gray-300">
            {paragraph}
          </p>
          <button class="mt-2 border-2 inline-flex cursor-move items-center text-sm font-semibold font-mono text-blue-600">
            {btntext} →
          </button>
        </div>
      </div>
    )

}
export default Card