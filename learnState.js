import { useEffect, useState } from "react";

function LearnState() {

    const [ carColor, setCarColor ] = useState('red');
    const [ text ,setText ] = useState('prince');
    const [ myNumber, setNumber]= useState('96');

    const apiValue = useEffect(() => {
        setCarColor('green');
        console.log(carColor);
        setText('ronak')
        console.log(text);
        setNumber('55');
        console.log(myNumber);
    
        return () => {

        }
    }, [])
    
    console.log('Componenet refresh');
    return (
        <>
        <p> This is {carColor} </p><br/>
        <input type="text" value={text} /> <br/>
        <p> my name is {text},{carColor}</p><br/>
        <h1>i am {text}</h1><br/>
        <h1>my number is {myNumber}</h1>
       </>
    );
}

export default LearnState;