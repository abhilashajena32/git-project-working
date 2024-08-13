import React from 'react';
import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Inc/Navbar';
import Register from './Components/Pages/Register';
import Create from "./Components/Pages/Create";
import Readmore from './Components/Pages/Readmore';

// import Footer from "./Components/Pages/Footer"
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';

const App = () => {
  return (
    <Router>
       <Navbar/>
    <div>
     {/* <Routes>
      <Route path='/' element={<Home/>}>
      <Route  path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>

      </Route>

     </Routes> */}

     <Routes>
     <Route path='/' element={<Home/>}/>
      
  
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Create" element={<Create/>}/>
      <Route path="/About" element={<About/>}/>
     
      <Route path='/Readmore' element={<Readmore/>}/>
     </Routes>
    </div>
    {/* <Footer/> */}
    </Router>
    
  )
}

export default App;