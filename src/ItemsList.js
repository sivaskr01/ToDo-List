import React from 'react'
import LineItem from './LineItem'

const ItemsList = ({items,handleChange,handleDelete}) => {
  return (
    <ul style={{ listStyleType: 'none' }}> 
        {items.map((item) =>(
          <LineItem
          item={item}
          key={item.id}
          handleChange={handleChange}
          handleDelete={handleDelete}
          />
        ))}
      </ul>
  )
}

export default ItemsList