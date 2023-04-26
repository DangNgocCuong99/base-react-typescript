import { useState } from 'react'
import Login  from './views/login/'
import ViewB from './views/view-b/AboutView'
import './App.css'

function App() {
const [a,setA] = useState(1)
const handleT = ()=>{
  setA(a+1)
}
  return (
    <div className="App">
      <button onClick={()=>handleT()}>Click</button>
      {a%2 == 0? <Login />: <ViewB/>}
      {a}
    </div>
  )
}

export default App
