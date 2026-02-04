import { useState } from "react"
function App() {
  
  const allStudents = [
        {
          id:1,
          studentName: "Ali",
          grade: 101,
          city:"Manama"
        },
        {
          id:2,
          studentName: "Mohammad",
          grade: 99,
          city:"Manama2"
        },
        {
          id:3,
          studentName: "Muqtada",
          grade: 100,
          city:"Manama3"
        },
      ]
  //    [state, updater function] = useState(initial value)
  const [count, setCount] = useState(0)
  const [students,setStudents] = useState(allStudents)


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

  console.log("Component loads")
  return (
    <>
    <p>{count}</p>
    <button onClick={handleIncrease}>+</button>
    <button onClick={handleDecrease}>-</button>
    <button onClick={handleReset}>reset</button>

    {students.map((oneStudent)=>
    <div>
      <p>Name: {oneStudent.studentName}</p>
      <p>grade: {oneStudent.grade}</p>
      <p>city: {oneStudent.city}</p>
      <button>Remove student</button>
    </div>
    )}
    </>
  )
}

export default App
