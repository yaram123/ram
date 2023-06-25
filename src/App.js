import logo from "./logo.svg";
import "./App.css";
// import Stores from './components/Stores';
import Stores from "./components/Stores";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feeds from "./components/Feeds";

function App() {
  return (
    <>
       <Stores/>
       {/* <Feeds/> */}
      {/* <Routes>
       
        <Route path="/" element={Stores} />
        <Route path="/Feeds" element={<Feeds />} />
      </Routes> */}
    </>
  );
}

export default App;
