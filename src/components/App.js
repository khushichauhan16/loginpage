import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Header.js";

import LogIn from './css/login.js';
function App() {
  return (<BrowserRouter>
      <Navbar />
      <LogIn/>
    </BrowserRouter>);
  
}

export default App;
