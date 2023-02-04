import React, { Dispatch } from 'react';
import { Link } from 'react-router-dom';

export default function Step(props: {
    step: any;
    abled: boolean;
    input: string[];
    setInput: Dispatch<string[]>;
}) {
    const { step, abled } = props;

    const onChange = (e: any) => {
        const { value } = e.target;
        const { setInput, input } = props;
        const newInput = [...input];
        newInput[step.id] = value;
        setInput(newInput);
    };

    return (
        <div
            className={`${
                abled ? '' : 'opacity-[47%]'
            } flex flex-col shadow-step rounded-[2px] flex-row bg-step h-[250px] hover:shadow-step-hover w-full p-4 border-step-current hover:border-2 border-solid hover:border-[#70769d] cursor-pointer hover:p-3.5`}
        >
            <span className="text-white text-[14px] pb-1"> {step.title} </span>

            <span className="text-[#6F80B0] text-[12px] whitespace-pre-line w-10/12 leading-4">
                {step.description}
            </span>
            {step.id === 3 && (
                <Link 
                    to="/status"
                    className="bg-[#F2F5FD] text-[#000000] rounded-[13px] text-[12px] whitespace-pre-line mx-auto mb-0 mt-auto px-4 py-1">
                    <span className="text-[#6F80B0] text-[16px] whitespace-pre-line font-bebas">
                        {step.button}
                    </span>
                </Link>
            )}
            {step.id !== 3 && (
                <button className="bg-[#0B0D13] text-[#6F80B0] rounded-[13px] text-[12px] whitespace-pre-line mx-auto mb-0 mt-auto px-4 py-1 ">
                    <input
                        onChange={(e) => onChange(e)}
                        className="text-[20px] outline-0 ring-0 bg-[#0B0D13] text-white w-full placeholder:mx-auto text-center"
                        placeholder="_ _ _ _ _ _ _ _"
                    />
                </button>
            )}
        </div>
    );
}
