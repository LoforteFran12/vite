import { useState } from 'react'


function App() {

  const [value, setValue] = useState(Array(9).fill(null));

  const [player, setPlayer] = useState(true);

  const election = (key) => {

    
    let array2 = [...value]
    if(player){
      array2[key]="𝔛"
      setPlayer(false)
    }
    else{
      array2[key]="𝔒"
      setPlayer(true)
    }
    setValue(array2);

    if(
      array2[0]=="𝔛"&& array2[1]=="𝔛"&&array2[2]=="𝔛" ||
      array2[3]=="𝔛"&& array2[4]=="𝔛"&&array2[5]=="𝔛" ||
      array2[6]=="𝔛"&& array2[7]=="𝔛"&&array2[8]=="𝔛" ||
    
      array2[0]=="𝔛"&& array2[3]=="𝔛"&&array2[6]=="𝔛" ||
      array2[1]=="𝔛"&& array2[4]=="𝔛"&&array2[7]=="𝔛" ||
      array2[2]=="𝔛"&& array2[4]=="𝔛"&&array2[8]=="𝔛" ||
    
      array2[0]=="𝔛"&& array2[4]=="𝔛"&&array2[8]=="𝔛" ||
      array2[2]=="𝔛"&& array2[4]=="𝔛"&&array2[6]=="𝔛"
    ){
      Swal.fire({
        title: "Gano 𝔛",
        text: "Suerte para la proxima 𝔒",
        imageUrl: "https://i.pinimg.com/originals/cf/df/f7/cfdff7af939d9bfd57806456bc7e2297.jpg",
        imageWidth: 400,
        imageHeight: 200,
      });
        }

        if(
          array2[0]=="𝔒"&& array2[1]=="𝔒"&&array2[2]=="𝔒" ||
          array2[3]=="𝔒"&& array2[4]=="𝔒"&&array2[5]=="𝔒" ||
          array2[6]=="𝔒"&& array2[7]=="𝔒"&&array2[8]=="𝔒" ||
        
          array2[0]=="𝔒"&& array2[3]=="𝔒"&&array2[6]=="𝔒" ||
          array2[1]=="𝔒"&& array2[4]=="𝔒"&&array2[7]=="𝔒" ||
          array2[2]=="𝔒"&& array2[4]=="𝔒"&&array2[8]=="𝔒" ||
        
          array2[0]=="𝔒"&& array2[4]=="𝔒"&&array2[8]=="𝔒" ||
          array2[2]=="𝔒"&& array2[4]=="𝔒"&&array2[6]=="𝔒"
        ){
          Swal.fire({
            title: "Gano 𝔒",
            text: "Suerte para la proxima 𝔛",
            imageUrl: "https://i.pinimg.com/originals/cf/df/f7/cfdff7af939d9bfd57806456bc7e2297.jpg",
            imageWidth: 400,
            imageHeight: 200,
          });
            }
}


  return (
    <>
      <h1 className='peace'>▀▄▀▄▀▄TaTeTi▄▀▄▀▄▀</h1>
      <div className='container'>
        <div key={0} onClick={() => election(0)} className='fila'>{value[0]}</div>
        <div key={1} onClick={() => election(1)} className='fila'>{value[1]}</div>
        <div key={2} onClick={() => election(2)} className='fila'>{value[2]}</div>
        <div key={3} onClick={() => election(3)} className='fila'>{value[3]}</div>
        <div key={4} onClick={() => election(4)} className='fila'>{value[4]}</div>
        <div key={5} onClick={() => election(5)} className='fila'>{value[5]}</div>
        <div key={6} onClick={() => election(6)} className='fila'>{value[6]}</div>
        <div key={7} onClick={() => election(7)} className='fila'>{value[7]}</div>
        <div key={8} onClick={() => election(8)} className='fila'>{value[8]}</div>
      </div>

    </>
  )
}

export default App
