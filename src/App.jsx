import { useState } from "react"
function App() {
  
  //    [state, updater function] = useState(initial value)
  const [count, setCount] = useState(0)

  function handleIncrease(){
    setCount(count + 1)
  }

  function handleDecrease(){
    if(count ===0){
      return
    }
    setCount(count - 1)
  }

  function handleReset(){
    setCount(0)
  }



  // Exercise 1:
  // 1. Create a - button
  // 2. Create a function handleDecrease() that should decrease the count by 1 (remember use the updater function)
  // 3. BONUS: count cant go below 0
  // 4. BONUS BONUS: add a reset button that should reset the count to 0
  return (
    <>
    <p>{count}</p>
    <button onClick={handleIncrease}>+</button>
    <button onClick={handleDecrease}>-</button>
    <button onClick={handleReset}>reset</button>
    </>
  )
}

export default App
