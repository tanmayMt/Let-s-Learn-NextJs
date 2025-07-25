"use client"; // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong fetching this post</h2>
      <button
        onClick={() => reset()}
        style={{
          background: 'linear-gradient(90deg, #ff6a00 0%, #ee0979 100%)',
          color: 'gold',
          border: 'none',
          borderRadius: '6px',
          padding: '10px 24px',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(238,9,121,0.15)',
          transition: 'transform 0.1s',
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Try again
      </button>
    </div>
  )
}