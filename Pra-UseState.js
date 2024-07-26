import React, { useState } from 'react'

export default function PraUseState() {
const [Color ,SetColor] = useState("black")
const [Car , SetCar] = useState("musatng")
const [About, SetAbout]=useState({
           Name: "Prince",
           SurName: "Poshiya",
           Age: "21"

});
const Nameadd =() =>{
  SetAbout(previousState  =>{
    return { ...previousState ,Name:"RAVAN"}
  })

}

  return (
    <>
    <h1>my name{About.Name}</h1>
    <p>
      my name is {About.Name} my surname {About.SurName} my age is{About.Age}
    </p>
    <button onClick={Nameadd}>updat</button>
    <br/><br/>
    <h1>my favorite car is {Car}</h1>
    <button onClick={() => SetCar("bmw 720d")}>bmw </button>
    <button onClick={() => SetCar("mahindra thar")}> thar</button>
    <button onClick={() => SetCar("polo")}>volkswagen</button>
    <button onClick={() => SetCar("amg gt")}>mercedes</button>
    <button onClick={() => SetCar("supera")}>toyota</button>

  <br/><br/> 
  <h1>my favorite color is {Color}</h1>
  <button onClick={() => SetColor("red")}>RED</button>
  <button onClick={() => SetColor("blue")}>BLUE</button>
  <button onClick={() => SetColor("yellow")}>YELLOW</button>
  <button onClick={() => SetColor ("green")}>GREEN</button>
  <button onClick={()=> SetColor("pink")}>pink</button>
  <br/><br/>






  
    </>
  );
}
