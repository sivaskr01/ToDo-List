// import React from 'react'
// import { useState } from 'react';

   /*const handleClick=(name) => {
    console.log(`Thanks ${name} `);
   }
   const handleClick1=(e) => {
    console.log(e.target.innerText);
     <button onClick={() => handleClick("Siva")}>Change</button>  use this is main tag...
   }*/
    
   /*const[count,setCount]=useState(99);
   

   function incrementFunction(){
    setCount(prevCount => prevCount + 1);
   }
   function decrementFunction(){
    setCount(prevCount => prevCount - 1);

     <button onClick={ incrementFunction}>+</button>
        <span>{count}</span>
        <button onClick={ decrementFunction}>-</button>
       
   }*/
   /*const Content = () => {
    const[name,setName]=useState("Earn");
    function handleNameChange(){
    const names=["Earn","Grow","Give"];
    const int=Math.floor(Math.random()*3);
    setName(names[int]);
  }

  return (
    <main>
        <h3>Lets {name} Money</h3>
       <button onClick={handleNameChange}>Subscribe</button>
    </main>
  )
}*/
import React from 'react'
import ItemsList from './ItemsList'
const Content = ({items,handleChange,handleDelete}) => {
  return ( 
    <>
      {(items.length)?(
        <ItemsList 
       items={items}
       handleChange={handleChange}
       handleDelete={handleDelete}
        />
        ):(<p style={{marginTop:'8rem'}}>Your List is Empty</p>)
      }
    </>
  )
}
export default Content