import Button from '@/app/components/Button';   //Same As this-> import Button from '../../components/Button';
// import Button from '../../components/Button';
import React from 'react'

export default function Mission(){
  return (
   <main className='mt-10'>
    <h2><u>This is Mission Page</u></h2>
    <p className=" text-purple-700 mb-4">
      This is Mission PageThis is Mission PageThis is Mission PageThis is
      Mission PageThis is Mission This is Mission PageThis is Mission Page
      PageThis is Mission PageThis is Mission Page
    </p>
        
      {/* For this button server component is now to applicatable it become Clien componet */}
      <Button/>

   </main> 
  )
}