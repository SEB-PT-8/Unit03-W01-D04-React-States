import { useState } from "react"
function App() {
  
  //    [state, updater function] = useState(initial value)
  const [count, setCount] = useState(0)

  function handleIncrease(){
    setCount(count + 1)
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
    </>
  )
}

export default App
