import React, { useEffect } from 'react'

const App = () => {

  useEffect(()=>{
    fetch(import.meta.env.VITE_BACKEND_URL)
    .then(res=>res.json())
    .then(data=>console.log(data.message))
  },[])

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default App
