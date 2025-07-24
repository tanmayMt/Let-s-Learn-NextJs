"use client"


import React from 'react'

export default function Mission(){
  return (
   <main className='mt-10'>
    <h2><u>This is Mission Page</u></h2>
    <p>
      This is Mission PageThis is Mission PageThis is Mission PageThis is
      Mission PageThis is Mission This is Mission PageThis is Mission Page
      PageThis is Mission PageThis is Mission Page
    </p>
        
      {/* For this button server component is now to applicatable it become Clien componet */}
      <div className='mt-5'>
      <button className='bg-indigo-700 rounded-sm px-4 py1' onClick={()=> console.log("I have Clicked Here")}>
        Click Here
      </button>
    </div>

   </main> 
  )
}