import React from 'react'

function Header({title}) {
    return (
        <header>
           <h1>{title}</h1>
        </header>
    )
}
Header.default={
    title:"ToDo List"
}
export default Header