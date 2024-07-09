import React,{useState} from 'react'

export default function Textformprops(props) {
    //using the concept of state here
    const[text,setText]=useState("Enter the text");

    //function to change text into uppercase
    const handleup=()=>{
       let newtext=text.toUpperCase();
       setText(newtext);
    }

    //Function to handle on change on text area
    const handleonchange=(event)=>{
        setText(event.target.value)
    }

    //Function to change text to lowercase
    const handlelw=()=>{
      let tex=text.toLowerCase();
      setText(tex);
  }

   //Function to clear the text
   const handlclear=()=>{
    let tex=" ";
    setText(tex);
}

  return (
    <>
    <div className='container'>
      <div className="mb-3">
        <h1>{props.heading}</h1>
      <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleonchange}></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleup}>Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handlelw}>Lowercase</button>
      <button className='btn btn-primary' onClick={handlclear}>Clear text</button>
    </div>
    <div className='container my-3'>
      <h1>Your Text Summarry</h1>
      <p>{text.split(" ").length} words , {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
