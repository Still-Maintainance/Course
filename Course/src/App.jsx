import HomePage from "./HomePage/HomePage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route/>
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
