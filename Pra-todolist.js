import React, { useState } from 'react'

export default function Pratodolist() {
const [Intial,setIntial]=useState();
const[Data,setData]=useState([]);

const getInput =(event)=>{
  
    console.log(event.target.value);
    setIntial(event.target.value);
    
}
const getdata =()=>{
    console.log(Intial);
    if(Intial == ""){
        alert("Plese Enter task !")
    }
    else{
        let storeData =[...Data,Intial]
        setData(storeData)
        setIntial("")
    }

}
console.log(...Data);
const deletItem =(index)=>{
    let filterData = Data.filter((curElem,id)=>{
        return id !==index

    })
    setData(filterData)
}

  return (
    <>
    <h1>TO DO LIST</h1>
    <input type='text' placeholder='Enter value'value={Intial} onChange={getInput}/>
    <button onClick={getdata}>ADD MORE</button>
    {Data !=[] && Data.map((curVal,index)=>{
        return(
            <>
            <p>{curVal} <i id="deleteIcon" onClick={()=>deletItem(index)}> Delete</i></p>
            </>

        )
    })}

    </>
   
  )
}
