import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
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
        }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enables","success")
    }
  }
  return(
    <>
   
<Navbar title="Utils" about="About us" Mod={mode} togglemode={toggmode} />
<Alert alert={allert}/>
<div className='container my-3'>
<Textform show={showalert} heading="Enter the text" Mod={mode}/>
{/* <About/> */}
</div>
    </>
  )
}

export default App;
