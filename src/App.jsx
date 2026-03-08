import { Demo } from "./task1/Demo"
import { Task2Demo } from "./task2/Demo"
import { Task3Demo } from "./task3/Demo"
import { Task4Demo } from "./task4/Demo"

function App() {

  return (
    <>
      <h1>useViewportSize demo</h1>
      <Task4Demo />

      <hr />

      <h1>useHover demo</h1>
      <Task3Demo />

      <hr />
      
      <h1>useLocalStorage demo</h1>
      <Task2Demo />

      <hr/>
      
      <h1>useFetch demo</h1>
      <Demo />
    </>
  )
}

export default App
