import React, { useRef, useState } from 'react'

export default function PreUseRef() {
    const count2 = useRef(0);
    const [prebutton,setprebutton] = useState(0);




  return (
    <>
    <button onClick={( )=> {count2.current = (count2.current + 1);setprebutton(count2.current);}}>click hear</button>
    <h1>value is:{count2.current}</h1>
    
    </>
  
  )
}
