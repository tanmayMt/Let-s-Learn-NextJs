"use client"
import React from 'react'

function Button() {
  return (
    <div className='mt-5'>
      <button className='bg-indigo-700 rounded-sm px-4 py1' onClick={()=> console.log("I have Clicked Here")}>
        Click Here
      </button>
    </div>
  )
}

export default Button;