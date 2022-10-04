import { useState } from 'react'
import reactLogo from './assets/react.svg'

const Title = (props)=>(
  <h1>{props.children}</h1>
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Title>Iniciando Projeto</Title>
      
    </div>
  )
}

export default App
