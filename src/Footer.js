import React from 'react'

const Footer = ({length}) => {
   /* const year=new Date();
  return (
    <div>
        <footer>Copyright &copy; {year.getFullYear()}</footer>
    </div>
  )*/
  return(
   <footer>{length} List {length===1 ?"Item":"Items"}</footer>
  )
}

export default Footer