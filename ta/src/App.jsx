import { useState } from 'react'

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function App ({}){

  return 
  <>
  <h1 className='peace'>TATETI</h1>
  <div className='fila'>
  <div onClick={seleccion}></div>
  <div onClick={seleccion}></div>
  <div onClick={seleccion}></div>
  <div onClick={seleccion}></div>
  <div onClick={seleccion}></div>
  <div onClick={seleccion}></div>
  <div onClick={seleccion}></div>
  <div onClick={seleccion}></div>
  <div onClick={seleccion}></div>
  </div>
  </>
}

export default App
