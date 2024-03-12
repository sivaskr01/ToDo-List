
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useEffect, useState } from 'react';
import apiRequest from './apiRequest';
function App() { 

  const API_URL='http://localhost:4000/items';
    
     const [items, setItems] = useState( [] );
    
    const[newItem, setNewItem]=useState('')

    const[search,setSearch]=useState('')
    const[fetchError,setFetchError]=useState(null)
    const[isLoading,setIsLoading]=useState(true)

   /*const storedItems = localStorage.getItem('todo_list');
      return storedItems ? JSON.parse(storedItems) : []; */
  useEffect(() =>{
    const fetchItems =async () =>{
     try{
      const response=await fetch(API_URL)
      if(!response.ok) throw Error("Data not recieved")
      const listItems=await response.json();
      setItems(listItems)
      setFetchError(null)
     }
     catch(err){
      setFetchError(err.message)
     }finally{
      setIsLoading(false)
     }
    }
    setTimeout(() =>{
      (async () => {await fetchItems()} )()
    } , 2000)
    })
     

   const addItem= async (item)=>{
    const id=items.length ? items[items.length-1].id+1:1
    const addNewItems={id,checked:false,item}
    const listItems=[...items, addNewItems]
    setItems(listItems)
   
   const postOptions={
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(addNewItems)
   }
   const result= await apiRequest(API_URL,postOptions)
   if(result) setFetchError(result)
  }
   const handleChange=async (id) =>{
    const listItems=items.map((item)=>item.id === id ? {...item, checked:!item.checked}:item)
    setItems(listItems)
    
    const myItem=listItems.filter((item) => 
     item.id===id)
     const updateOptions={
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
     }
     const reqUrl=`${API_URL}/${id}`
     const result= await apiRequest(reqUrl,updateOptions)
     if(result) setFetchError(result)
    
  }
  const handleDelete= async (id) =>{
    const listItems=items.filter((item)=>item.id!== id)
    setItems(listItems)

    const deleteOptions={
      method:'DELETE' // Here headers and body is not necessary for delete.         
    }
    const reqUrl=`${API_URL}/${id}`
    const result=await apiRequest(reqUrl,deleteOptions)
    if(result) setFetchError (result)
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')

  }

  return (
    <div className="App">
      <Header 
      title="To Do List"
       />
      <main>
      {isLoading && <p style={{marginTop:'8rem'}}>Loading Items...</p>}
      {fetchError && <p style={{marginTop:'8rem'}}>{`Error: ${fetchError}`}</p>}
      {!isLoading && !fetchError && <Content 
       items={items.filter((item =>(item.item.toLowerCase()).includes(search.toLowerCase())))}
       handleChange={handleChange}
       handleDelete={handleDelete}
      />}
      </main>
      <AddItem
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}
      />
      <SearchItem
       search={search}
       setSearch={setSearch}
      />
      <Footer 
       length={items.length}
      />
    </div>
  );
}

export default App;
