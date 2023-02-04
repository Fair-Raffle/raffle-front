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
                        You can check out past raffles anytime via that page.
                        Just click to results. Never trust, verify.
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
                    <span> Select Your Main Public Name: </span>
                    <span>
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
                    <span> Do you want to register your NFT Project? </span>
                    <span>
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
                            <span className="bg-black text-[#6C76B2] py-2 pl-5 w-full rounded-lg text-left ">
                                2000
                            </span>
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
                        <span className="bg-black text-[#6C76B2] py-2 pl-5 w-full rounded-lg text-left ">
                            Enter YOUR WEBSITE
                        </span>
                        <span className="bg-black text-[#6C76B2] py-2 pl-5 w-full rounded-lg text-left ">
                            Enter YOUR TWITTER
                        </span>
                        <span className="bg-black text-[#6C76B2] py-2 pl-5 w-full rounded-lg text-left ">
                            ENTER YOUR DISCORD LINK
                        </span>
                    </div>
                    <span className="border-[#A7ABBE] w-[70%] bg-[#272C41] py-2 px-8 w-2/3 border-2 mt-[5rem] rounded-[8px] text-center text-white">
                        Upload Head Image 400 x 400
                    </span>
                    <div className="flex flex-col space-y-4">
                        <div className='flex flex-row space-x-2'>
                            <span className="bg-black text-[#6C76B2] py-2 pl-5 w-full rounded-lg text-left ">
                                ENTER YOUR STARKNET WALLET
                            </span>
                            <span className="border-[#A7ABBE] bg-[#272C41] py-2 px-8 border-2 rounded-[8px] text-center text-white">
                                Change
                            </span>
                            <span className="border-[#A7ABBE] bg-[#272C41] py-2 px-8 border-2 rounded-[8px] text-center text-white">
                                Remove
                            </span>
                        </div>
                        <span className="border-[#A7ABBE] bg-[#272C41] py-2 px-8 border-2 rounded-[8px] text-center text-white">
                                Link My Project
                            </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
