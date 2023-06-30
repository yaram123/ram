import logo from "./logo.svg";
import "./App.css";
// import Stores from './components/Stores';
import Stores from "./components/Stores";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feeds from "./components/Feeds";
import Collections from "./components/Collections";
import React  from "react";
import { Link } from "react-router-dom";
// import Modal from "./components/Modal";

function App() {
  
  return (
    <>
       <Stores/>
       {/* <Feeds/> */}
      {<Routes>
       
        <Route path="/" element={<Feeds/>} />
        <Route path="/Feeds" element={<Feeds />} />
        <Route path="/Collections" element={<Collections />} />
        {/* <Route path="/Modal" element={<Modal />} /> */}
        
      </Routes>}
      {/* <Modal/> */}
      
    </>
  );
}

export default App;
