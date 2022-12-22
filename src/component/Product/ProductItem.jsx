import React from 'react'

export default function ProductItem({name, category,price,stocked}) {
  return (
    <div>
      <h1>{category}</h1>
      <span style={{color:stocked ? 'none':'red'}}>{name}</span>
      <h5>${price.toFixed(2)}</h5>
    </div>
  )
}
