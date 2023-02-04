import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { selectedCollections } from '../assets/texts';
export default function CreateProject() {
    const [selected, setSelected] = useState(-1);
    const [yesNo, setYesNo] = useState(-1);

    return (
        <div className="flex flex-col space-y-16">
            <div className="flex flex-row justify-between space-x-16">
                <div className="flex flex-col w-1/2">
                    <span className="font-bebas text-[24px]">
                        PROFILE SETUP
                    </span>
                    <span>
                        You can create your profile by filling out the
                        information
                    </span>
                </div>
            </div>
            <div className="flex flex-row space-x-16">
                <div className="flex flex-col w-2/5 space-y-2 bg-raflle-holder rounded-[2px] shadow-raffle-holder border-[1px] border-[#70769d] p-4">
                    <span> SETUP YOUR PROFILE </span>
                    <span> Integrate Your Accounts (Opt) </span>
                    <span className="border-[#A7ABBE] bg-[#272C41] py-2 border-2 rounded-[4px] text-center w-full text-white">
                        Integrate Your Twitter
                    </span>
                    <span className="border-[#A7ABBE] bg-[#272C41] py-2 border-2 rounded-[4px] text-center w-full text-white">
                        Integrate Your Starknet ID
                    </span>
                    <span className="text-[18px]">
                        {' '}
                        Select Your Main Public Name:{' '}
                    </span>
                    <span className="text-[#6F80B0]">
                        In past raffles your selected id will be showed
                        according to your selection.
                    </span>
                    <div className="flex flex-row border-[#A7ABBE] bg-black py-2 border-2 rounded-[4px] w-full text-white">
                        <div
                            onClick={() => setSelected(0)}
                            className={`${
                                selected === 0 ? 'bg-[#ffffff]' : ''
                            } flex flex-col w-[8%] border-2 border-[#474C6C] ml-2 rounded-full aspect-square`}
                        />
                        <span className="my-auto ml-10"> Starknet ID </span>
                    </div>
                    <div className="flex flex-row border-[#A7ABBE] bg-black py-2 border-2 rounded-[4px] w-full text-white">
                        <div
                            onClick={() => setSelected(1)}
                            className={`${
                                selected === 1 ? 'bg-[#ffffff]' : ''
                            } flex flex-col w-[8%] border-2 border-[#474C6C] ml-2 rounded-full aspect-square`}
                        />
                        <span className="my-auto ml-10">Twitter User Name</span>
                    </div>
                    <span className="text-[18px]">
                        {' '}
                        Do you want to register your NFT Project?{' '}
                    </span>
                    <span className="text-[#6F80B0]">
                        If you list your NFT project it will be automaticaly
                        listed for anyone enable to make a raffle about it.
                    </span>
                    <div className="flex flex-row border-[#A7ABBE] bg-black py-2 border-2 rounded-[4px] w-full text-white">
                        <div
                            onClick={() => setYesNo(0)}
                            className={`${
                                yesNo === 0 ? 'bg-[#ffffff]' : ''
                            } flex flex-col w-[8%] border-2 border-[#474C6C] ml-2 rounded-full aspect-square`}
                        />
                        <span className="my-auto ml-10"> Yes </span>
                    </div>
                    <div className="flex flex-row border-[#A7ABBE] bg-black py-2 border-2 rounded-[4px] w-full text-white">
                        <div
                            onClick={() => setYesNo(1)}
                            className={`${
                                yesNo === 1 ? 'bg-[#ffffff]' : ''
                            } flex flex-col w-[8%] border-2 border-[#474C6C] ml-2 rounded-full aspect-square`}
                        />
                        <span className="my-auto ml-10"> No </span>
                    </div>
                </div>
                <div className="flex flex-col w-3/5 space-y-8 bg-raflle-holder rounded-[2px] shadow-raffle-holder border-[1px] border-[#70769d] p-4">
                    <span> NFT PROJECT REGISTRATION</span>
                    <div className="flex flex-col space-y-2">
                        <span> Enter Your NFT Project Contract in Here </span>
                        <div className="flex flex-row space-x-2">
                            <button className="bg-black text-[#6F80B0] rounded-lg py-2 w-full text-[15px] whitespace-pre-line mb-0 mt-auto py-1">
                                <input
                                    className="outline-0 ring-0 bg-black w-full pl-4 placeholder-[#6F80B0]"
                                    placeholder="2000"
                                />
                            </button>
                            <span className="border-[#A7ABBE] bg-[#272C41] py-2 px-8 border-2 rounded-[8px] text-center text-white">
                                Registered
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2 w-[70%]">
                        <span>
                            Enter Your Credentials (OPT, but Highly
                            Recommended):
                        </span>
                        <button className="bg-black text-[#6F80B0] rounded-lg py-2 w-full text-[15px] whitespace-pre-line mb-0 mt-auto py-1">
                            <input
                                className="outline-0 ring-0 bg-black w-full pl-4 placeholder-[#6F80B0]"
                                placeholder="Enter YOUR WEBSITE"
                            />
                        </button>
                        <button className="bg-black text-[#6F80B0] rounded-lg py-2 w-full text-[15px] whitespace-pre-line mb-0 mt-auto py-1">
                            <input
                                className="outline-0 ring-0 bg-black w-full pl-4 placeholder-[#6F80B0]"
                                placeholder="Enter YOUR TWITTER"
                            />
                        </button>
                        <button className="bg-black text-[#6F80B0] rounded-lg py-2 w-full text-[15px] whitespace-pre-line mb-0 mt-auto py-1">
                            <input
                                className="outline-0 ring-0 bg-black w-full pl-4 placeholder-[#6F80B0]"
                                placeholder="Enter YOUR DISCORD LINK"
                            />
                        </button>
                    </div>
                    <span className="border-[#A7ABBE] w-[70%] bg-[#272C41] py-2 px-8 w-2/3 border-2 mt-[5rem] rounded-[8px] text-center text-white cursor-pointer">
                        <label className="cursor-pointer" htmlFor="files">
                            Upload Head Image 400 x 400
                        </label>
                        <input
                            id="files"
                            className="hidden"
                            type="file"
                            placeholder="Upload Head Image 400 x 400"
                        />
                    </span>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-row space-x-2">
                            <button className="bg-black text-[#6F80B0] rounded-lg py-2 w-full text-[15px] whitespace-pre-line mb-0 mt-auto py-1">
                                <input
                                    className="outline-0 ring-0 bg-black w-full pl-4 placeholder-[#6F80B0]"
                                    placeholder="Enter your Starknet wallet address"
                                />
                            </button>
                            <span className="border-[#A7ABBE] bg-[#272C41] py-2 px-8 border-2 rounded-[8px] text-center text-white cursor-pointer">
                                Change
                            </span>
                            <span className="border-[#A7ABBE] bg-[#272C41] py-2 px-8 border-2 rounded-[8px] text-center text-white cursor-pointer">
                                Remove
                            </span>
                        </div>
                        <span className="border-[#A7ABBE] bg-[#272C41] py-2 px-8 border-2 rounded-[8px] text-center text-white cursor-pointer">
                            Add my Collection
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
