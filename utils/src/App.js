import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import About from './components/About';
import Textform from './components/Textform';
function App() {
  //creting state for dark mode
  const[mode,setMode]=useState("light");
  const toggmode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#042743';
        }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
    }
  }
  return(
    <>
   
<Navbar title="Utils" about="About us" Mod={mode} togglemode={toggmode} />
<div className='container my-3'>
<Textform heading="Enter the text" Mod={mode}/>
{/* <About/> */}
</div>
    </>
  )
}

export default App;
