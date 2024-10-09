import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Service from "./pages/Services";
import Contacts from "./pages/Contacts";
import Development from "./pages/Development";
import Project from "./pages/Project";



function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Services" element={<Service/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
        <Route path="/Development" element={<Development/>}/>


      </Routes>
     </Router>
         </>
  );
}

export default App;
