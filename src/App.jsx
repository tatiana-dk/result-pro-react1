import { Demo } from "./task1/Demo"
import { Task2Demo } from "./task2/Demo"

function App() {

  return (
    <>
      <h1>useLocalStorage demo</h1>
      <Task2Demo />

      <hr/>
      
      <h1>useFetch demo</h1>
      <Demo />
    </>
  )
}

export default App
