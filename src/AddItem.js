import React  from 'react'
import {FaPlus} from "react-icons/fa";
import { useRef } from 'react';
const AddItem = ({newItem,setNewItem,handleSubmit}) => { 
  const inputRef=useRef('')
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="additem">Add Item </label>
        <input 
        autoComplete='off'
        ref={inputRef}
         autoFocus
         type='text'
         id='additem'
         placeholder='Add Item'
         required
         value={newItem}
         onChange={(e)=> setNewItem(e.target.value)}
        />
        
        <button className='item-btn'
          type='submit'
          aria-label='additem'
          onClick={()=> inputRef.current.focus()}
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem