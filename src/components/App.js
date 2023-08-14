import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Header.js";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import LogIn from './pages/login';
function App() {
  return (<BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </BrowserRouter>);
  
}

export default App;
