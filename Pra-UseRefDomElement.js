import React, { useRef } from 'react'

export default function PraUseRef() {

const InputRef = useRef();
function Changecolor( ){
    InputRef.current.style.color ="red";
    InputRef.current.style.height="50px";
    InputRef.current.style.fontSize="20px";
    InputRef.current.style.backgroundColor="yellow";
}


  return (
      <>
      <input type='text' ref={InputRef}/>
    
      <button onClick={Changecolor}>click hear</button>

      </>
  )
}
