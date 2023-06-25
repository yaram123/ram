import logo from "./logo.svg";
import "./App.css";
// import Stores from './components/Stores';
import Stores from "./components/Stores";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
       <Stores/>
      {/* <Routes>
       
        <Route path="/" element={Stores} />
        <Route path="/Feeds" element={<Feeds />} />
      </Routes> */}
    </>
  );
}

export default App;
