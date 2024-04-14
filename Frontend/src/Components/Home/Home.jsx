import React, { useEffect } from 'react'

function Home(){
    useEffect(()=>{
        const getTodos = async () => {
            try {
                const response = await fetch('/api/todo');
                const data = await response.json();
                console.log(data)
            } catch (error) {
                console.log("Error While Fetching "+error);
            }
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
