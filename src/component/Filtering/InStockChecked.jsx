import React from 'react'

export default function InStockChecked({checked,onClick}) {
  return (
   <div>
    <input type={"checkbox"} checked={checked} onClick={onClick} />
      InStockChecked
   </div>
  )
}
