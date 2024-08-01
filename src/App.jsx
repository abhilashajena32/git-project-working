import React from 'react';
import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Inc/Navbar';

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
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
     </Routes>
    </div>
    {/* <Footer/> */}
    </Router>
    
  )
}

export default App;