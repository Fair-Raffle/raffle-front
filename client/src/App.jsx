import "./output.css";
import Navbar from "./containers/Navbar";
import Home from "./pages/Home";
import Steps from "./containers/Steps";
import Raffles from "./pages/Raffles";
import Raffle from "./pages/Raffle";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col mx-16 max-w-[80rem] mx-auto px-8">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/raffles" element={<Raffles />} />
          <Route path="/raffle/:id" element={<Raffle />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
