import { useState } from 'react'

function App() {
  const [valor, setValor] = useState(0);

  const incrementar = () => {
    setValor(valor + 1);
  }

  const descrementar = () => {
    setValor(valor - 1);
  }

  return (
    <>
      <h1 className='peace'>Incrementar y Descrementar</h1>
      <div className='crazy'>{valor}</div>
      <div className='diamondp'>
        <button className="diamond" onClick={incrementar}>Incrementar</button>
        <button className="diamond" onClick={descrementar}>Descrementar</button>
      </div>
    </>
  )
}

export default App