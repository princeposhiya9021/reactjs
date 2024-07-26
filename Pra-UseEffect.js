import React, { useEffect, useState } from 'react'

export default function PraUseEffect() {
 const [Count , SetCount] = useState(0);
 const [cal , setcal] = useState(0);
 const [Count1 ,setCount1]= useState(0);
 const [calu1 , setcalu1] =useState(0);

 const [Name , SetName]= useState("prince");

useEffect(() => {
  SetName("ravan")

  return () => {
    
  }
}, [])



useEffect( ()=> {
  setcal (()=> Count * 2);
},[Count]);





useEffect(()=>{
  setcalu1(()=> Count1 * 5);

},[Count1]);





  
//  useEffect( ()=>{
//   setTimeout( ()=>{
//     SetCount((Count)=>Count + 1);
  
//   },1000);
//  });

  return (
    <>
  {/* <h1>i am reading {Count} time</h1> */}
  <h2>my name is {Name}</h2>

  <p>Count:{Count}</p>
  <button onClick={() => SetCount((prince)=> prince +1)}>+</button>
  <p>Cal:{cal}</p>

<p>Count 1 :{Count1}</p>
<button onClick={()=> setCount1((ravan)=>ravan+1)}>++</button>
<p>cal: {calu1}</p>
  </>
  )
}
