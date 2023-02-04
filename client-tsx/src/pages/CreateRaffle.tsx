import { steps } from '../assets/texts';
import { useState, useEffect, Dispatch } from 'react';
import { Link } from 'react-router-dom';

function Step(props: {
    id: number;
    abled: boolean;
    focus: boolean[];
    input: string[];
    setInput: Dispatch<string[]>;
    setFocus: Dispatch<boolean[]>;
}) {
    const { id, abled, input, setInput, focus, setFocus } = props;
    const step = steps.steps[id];

    const onChange = (e: any) => {
        e.preventDefault();
        const { value } = e.target;
        const newInput = [...input];
        newInput[id] = value;
        setInput(newInput);
    };

    return (
        <div
            onClick={() => {
                const newFocus = [false, false, false, false]
                newFocus[id] = true;
                setFocus(newFocus);
            }}
            className={`${abled ? '' : 'opacity-[47%]'} ${
                focus[id] && abled
                    ? 'shadow-step-hover border-2 border-solid border-[#70769d]'
                    : ''
            } flex flex-col shadow-step rounded-[2px] flex-row bg-step h-[250px] w-full p-4 border-step-current cursor-pointer`}
        >
            <span className="text-white text-[14px] pb-1">{step.title}</span>

            <span className="text-[#6F80B0] text-[12px] whitespace-pre-line w-10/12 leading-4">
                {step.description}
            </span>
            {step.id === 3 && (
                <Link
                    to="/status"
                    className="bg-[#F2F5FD] text-[#000000] rounded-[13px] text-[12px] whitespace-pre-line mx-auto mb-0 mt-auto px-4 py-1"
                >
                    <span className="text-[#6F80B0] text-[16px] whitespace-pre-line font-bebas">
                        {step.button}
                    </span>
                </Link>
            )}
            {step.id !== 3 && (
                <button className={`bg-[#0B0D13] text-[#6F80B0] rounded-[13px] text-[12px] whitespace-pre-line mx-auto mb-0 mt-auto px-4 py-1 ${!abled ? 'select-none' : ''}`}
                    disabled={abled}>
                    <input
                        onChange={(e) => {
                          if(abled)
                          onChange(e)
                        }}
                        value={input[id]}
                        className="text-[20px] outline-0 ring-0 bg-[#0B0D13] text-white w-full placeholder:mx-auto text-center"
                        placeholder="_ _ _ _ _ _ _ _"
                    />
                </button>
            )}
        </div>
    );
}

export default function Steps() {
    const [abled, setAbled] = useState([true, false, false, false]);
    const [focus, setFocus] = useState([false, false, false, false]);
    const [input, setInput] = useState(['', '', '', '']);

    useEffect(() => {
        if (input[0] !== '') setAbled([true, true, false, false]);
        if (input[1] !== '') setAbled([true, true, true, false]);
        if (input[2] !== '') setAbled([true, true, true, true]);
    }, [input]);

    return (
        <div className="flex flex-col">
            <div className="w-full max-w-full mx-auto">
                <span className="text-[24px] font-bebas opacity-85">
                    {steps.title}
                </span>
                <br />
                <span className="text-[15px] whitespace-pre-line opacity-85">
                    {steps.subtitle}
                </span>
            </div>
            <div className="flex flex-col w-[80%] max-w-full mx-auto space-y-4 mt-8">
                <div className="flex shadow-step-head bg-step-head py-1">
                    <span className="text-[24px] mx-auto font-bebas">
                        {steps.subtitle2}
                    </span>
                </div>
                <div className="flex flex-row space-x-2">
                    <Step
                        key={'first'}
                        id={0}
                        abled={abled[0]}
                        input={input}
                        setInput={setInput}
                        focus={focus}
                        setFocus={setFocus}
                    />
                    <Step
                        key={'second'}
                        id={1}
                        abled={abled[1]}
                        input={input}
                        setInput={setInput}
                        focus={focus}
                        setFocus={setFocus}
                    />
                    <Step
                        key={'third'}
                        id={2}
                        abled={abled[2]}
                        input={input}
                        setInput={setInput}
                        focus={focus}
                        setFocus={setFocus}
                    />
                    <Step
                        key={'fourth'}
                        id={3}
                        abled={abled[3]}
                        input={input}
                        setInput={setInput}
                        focus={focus}
                        setFocus={setFocus}
                    />
                </div>
            </div>
        </div>
    );
}
