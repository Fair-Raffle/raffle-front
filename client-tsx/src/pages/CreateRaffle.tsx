import Header from "../components/CreateRaffle/Head";
import Step from "../components/CreateRaffle/Step";
import { steps } from '../assets/texts'
import { useState, useEffect } from "react";

export default function Steps() {
  const [abled, setAbled] = useState([true, false, false, false]);
  const [focus, setFocus] = useState([false, false, false, false]);
  const [input, setInput] = useState(["", "", "", ""]);

  
  useEffect(() => {
    if(input[0] !== "" )
      setAbled([true, true, false, false]);
    if(input[1] !== "" )
      setAbled([true, true, true, false])
    if(input[2] !== "" )
      setAbled([true, true, true, true])
  }, [input])


  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col w-[786px] max-w-full mx-auto space-y-4 mt-8">
        <div className="flex shadow-step-head bg-step-head py-1">
          <span className="text-[24px] mx-auto font-bebas">
            {steps.subtitle2}
          </span>
        </div>
        <div className="flex flex-row space-x-2">
          <Step step={steps.steps[0]} abled={abled[0]} input={input} setInput={setInput}/>
          <Step step={steps.steps[1]} abled={abled[1]} input={input} setInput={setInput}/>
          <Step step={steps.steps[2]} abled={abled[2]} input={input} setInput={setInput}/>
          <Step step={steps.steps[3]} abled={abled[3]} input={input} setInput={setInput}/>
        </div>
      </div>
    </div>
  );
}
