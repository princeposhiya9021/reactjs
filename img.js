import { useEffect, useState } from "react";


function Img(){
  const [myNumber,setNumber]= useState('96');
  const [myText, setText] = useState('PRINCE POSHIYA');
  const [myEmail, setEmail] =useState('prince@gmail.com');
  const [myPassword, setPassword]=useState('prince9021');
  const [mynum,setDate]=useState('962003');

 const prince= useEffect(() => {
    setNumber ('55');
    console.log(myNumber);
    setEmail ('princep90@gmail.com');
    console.log(myEmail);

   
 
   return () => {
     
   }
 }, [])
 console.log('Componenet refresh');
 
  


    return(
        <>
<input type="number" value= {myNumber} /> <br/>
<input type="text"  value= {myText}/> <br/>
<input type="email" value= {myEmail}/> <br/>
<input type="password" value= {myPassword} /> <br/>
<input type="number" value= {mynum}/> <br/>
<img src="https://classic-recreations.com/wp-content/uploads/2023/05/1-2-scaled.jpg" alt="" height={450} width={900}/> <br/>
<h1> GOOD MORING {myText}</h1> <br/>
<p> The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its seventh generation, it is the fifth-best selling Ford car nameplate </p>
</>
    );

}
export default Img; 