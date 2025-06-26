import { useState } from 'react'
import './App.css'
import HelloWord from './HelloWord'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployeeCompenent from './componets/ListEmployeeCompenent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ListEmployeeCompenent />
    </>
  )
}

export default App
