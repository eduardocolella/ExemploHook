
import { useState } from 'react';
import './App.css'

function App() {

  var nome = "Eduardo";
  
  const [name, setName] = useState("Valor Inicial")
  const [sobrenome, setSobrenome] = useState("Valor Final")

  function mudarNome(event){
    
    setName(event.target.value)
    
  }

  function mudarSobrenome(event){
  
    setSobrenome(event.target.value)
  }

  return (
    <>
       <p>Informe seu nome</p>
       <input onChange={mudarNome}/>

       <p>Informe seu sobrenome</p>
       <input onChange={mudarSobrenome}/>

       <p>{nome}</p>
       <p>{sobrenome}</p>
       <p>Agora via useState : {name} {sobrenome}</p>

       
    </>
  )
}

export default App
