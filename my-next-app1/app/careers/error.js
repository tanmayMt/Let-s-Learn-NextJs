'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="error-container">
      <h2 className="error-title">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="error-retry-btn"
      >
        Try again
      </button>
    </div>
  )
}