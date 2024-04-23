import { useEffect } from 'react'

function Home(){
    useEffect(()=>{
        async function getTodo () {
            try {
                const response = await fetch('/');
                const data = await response.json();
                console.log(data)
            } catch (error) {
                console.log("Error While Fetching "+error);
            }
        }
        getTodo();
    },[])
  return (
    <div>
      <h1>This Is Home Page</h1>
    </div>
  )
}

export default Home
