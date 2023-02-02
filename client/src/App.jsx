import "./output.css";
import Navbar from "./containers/Navbar";
import Steps from "./containers/Steps";
import { Raffles } from "./pages/Raffles";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col mx-16 max-w-[80rem] mx-auto px-8">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Steps />} />
          <Route path="/raffles" element={<Raffles />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
