import React from 'react'

function Card({children}) {
  return (
     <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        margin: "10px",
      }}
    >
        {children}
    </div>
  )
}

export default Card