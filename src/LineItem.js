import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item,handleChange,handleDelete}) => {
  return (
    <div className="item" key={item.id} style={{ listStyleType: 'none' }}>
            <input
             type="checkbox"
             onChange={() =>handleChange(item.id)}
             checked={item.checked}
            />
  ̥          <label style={(item.checked)?{textDecoration:"line-through", listStyleType:"none"}:null}
              onDoubleClick={()=>handleChange(item.id)}>
              {item.item}
            </ label>
            < FaTrashAlt
             role='button'
             onClick={() =>handleDelete(item.id)}
             tabIndex="0"
            />
          </div>
  )
}

export default LineItem