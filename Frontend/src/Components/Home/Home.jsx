import React, { useEffect } from 'react'

function Home(){
    useEffect(()=>{
        const getTodos = async () => {
            const responce = await fetch('/api/todo');
            const data = await responce.json();
            console.log(data)
        }
        getTodos();
    },[])
  return (
    <div>
      <h1>This Is Home Page</h1>
    </div>
  )
}

export default Home
