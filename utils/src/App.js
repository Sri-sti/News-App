import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  //creting state for dark mode
  const[mode,setMode]=useState("light");

  //creting state for dark mode
  const[allert,setalert]=useState(null);

  const showalert=(meassage,type)=>{
    setalert({
      msg:meassage,
      typ:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500);
  }


  const toggmode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been enables","success")
      document.title="Utils-Dark mode"

      //for pops to get virsus not good for user experience
      // setTimeout(() => {
      //   document.title="Utils- is an amazing website"
      // }, 2000);
      // setTimeout(() => {
      //   document.title="Utils- download it now!!"
      // }, 3000);
       }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enables","success")
      document.title="Utils-Light mode"
    }
  }
  return(
    <>
    <BrowserRouter>
    <Navbar title="Utils" about="About us" Mod={mode} togglemode={toggmode} />
<Alert alert={allert}/>
<div className='container my-3'>
<Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <Textform show={showalert} heading="Enter the text" Mod={mode}/>
              }
            ></Route>
          </Routes>
  
      
          </div>   
</BrowserRouter>
    </>
  )
}

export default App;
//free building and hosrting