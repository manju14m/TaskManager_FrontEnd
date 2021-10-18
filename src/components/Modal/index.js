import React from 'react';

export default function Modal({children, onClick}) {


  return (
    <div className="modalContainer" onClick={onClick}>
      <div className="modal">
        {children}
      </div>
    </div>
  )
}
