import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return(
    <>
   
<Navbar title="Utils" about="About us"/>
<div className='container my-3'>
<Textform heading="Enter the text"/>
</div>
    </>
  )
}

export default App;
