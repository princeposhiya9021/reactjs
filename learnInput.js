import { useState } from "react";

function LearnInput(){

    const [text, setText] = useState('red');
    const [number, setnumber] = useState('5');
    const [pp, setpp]= useState('princeposhiya@gmail.com');
    const inputText = text;


    return(
        <>
        <input type="text" value={inputText} /> <br/>
        <input type="number" value={number} /> <br/>
        <img src="https://cdn.pixabay.com/photo/2023/11/03/19/59/malaysian-tiger-8363779_1280.jpg"alt="" height={250} width={320}/> <br />
        <input type="email" value={pp}/>
    
        </>
    );
}

export default LearnInput;