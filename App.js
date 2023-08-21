import Heading from './Heading';
import LoginPage from './Login';
import Store from './NewStore';
import { Route, Routes } from "react-router-dom"

import './App.css';
import Navbar from './Navbar';
import Signup from './Signup';





function App() {
  return (
    <>
       
      <div className="App">
      
      <Routes>
<Route path="/" element={<Heading/>} />
<Route path="/navbar" element={<Navbar/>} />
<Route path='/login' element = {<LoginPage/>} />
<Route path='/signup' element = {<Signup/>}/>
</Routes>
         

  
      <div> 
    
</div>   
          <div className='storeComponent'>

          <Store>
            
            </Store>
          
          </div>
      
     
      </div>

 
    </>
  );
}

export default App;
