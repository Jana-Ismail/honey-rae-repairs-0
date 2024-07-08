import { useState } from 'react'

export const App = () => {

  const [count, setCount] = useState(0) //useState() returns an array
  
  const handleBtnClick = () => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <>
      <h1>Welcome to React!</h1>
      <div>useState() is dope!</div>
      <button className="btn-primary" onClick={handleBtnClick}>
        Click me!
      </button>
      <div>Count: {count}</div>
    </>
  )
}
