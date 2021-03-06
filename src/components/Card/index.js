import React from 'react'

export default function Card({title,children}) {
  return (
    <div className="card">
      <h2 className="cardTitle">
        {title}
      </h2>
      {children}
    </div>
  )
}
