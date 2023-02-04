import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { raffles } from '../assets/texts';
export default function RaffleStatus() {
    const [finished, setFinished] = useState([false, false, false]);
    const raffle = raffles[0];

    useEffect(() => {
        setTimeout(() => {
            setFinished([true, false, false]);
        }, 1000);
        setTimeout(() => {
            setFinished([true, true, false]);
        }, 2000);
        setTimeout(() => {
            setFinished([true, true, true]);
        }, 3000);
    }, []);

    return (
        <div className="flex flex-col space-y-16">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col w-3/5 opacity-85">
                    <span className="font-bebas text-[24px]">
                        RAFFLE TOOL FOR SELECTED COLLECTIONS
                    </span>
                    <span>
                        Thanks to this specially designed system, selected
                        collections' NFT holders can participate in exclusive
                        giveaways. Enhance the value of NFT collections by
                        offering fair raffles to holders.
                    </span>
                </div>
            </div>
            <div className="flex flex-row space-x-16">
                <div className="flex flex-col w-2/5 space-y-2 bg-raflle-holder rounded-[2px] shadow-raffle-holder border-[1px] border-[#70769d] p-4 space-y-8">
                    <div className="flex shadow-step-head bg-step-head py-1">
                        <span className="text-[24px] mx-auto font-bebas">
                            RAFFLE STATUS
                        </span>
                    </div>
                    <div className="flex flex-col px-2 h-full content-around">
                        <div className="flex flex-col h-1/3">
                            <span>Your Raffle List Uploading</span>
                            <span className="text-[#6C76B2] text-[12px] w-2/3">
                                Raffle just started. It is uploading to
                                blockchain
                            </span>
                            <div
                                className={`${
                                    finished[0]
                                        ? `shadow-uploaded bg-uploaded w-100`
                                        : 'bg-black w-0 '
                                } transition-all duration-1000 py-1 mt-8`}
                            />
                        </div>
                        <div className="flex flex-col h-1/3">
                            <span>Waiting For Random Number</span>
                            <span className="text-[#6C76B2] text-[12px] w-2/3">
                                We are waiting for true random number from ****.
                            </span>
                            <div
                                className={`${
                                    finished[1]
                                        ? 'shadow-uploaded bg-uploaded'
                                        : 'bg-black'
                                }  py-1 mt-8`}
                            />
                        </div>
                        <div className="flex flex-col h-1/3">
                            <span> Here is the Results!</span>
                            <div
                                className={`${
                                    finished[2]
                                        ? 'shadow-uploaded bg-uploaded'
                                        : 'bg-black'
                                }  py-1 mt-8`}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={`${
                        finished[2] ? 'opacity-100' : 'opacity-20'
                    } flex flex-col w-3/5 space-y-8 bg-raflle-holder rounded-[2px] shadow-raffle-holder border-[1px] border-[#70769d] p-4`}
                >
                    <div className="flex shadow-step-head bg-step-head py-1">
                        <span className="text-[24px] ml-4 mr-auto mx-auto text-left font-bebas">
                            RAFFLE RESULT
                        </span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col w-1/3 gap-2 opacity-85">
                            <div>
                                <span className="text-[15px] text-[#6F80B0] pr-2">
                                    Raffle Id:
                                </span>
                                <span className="text-[15px]">
                                    #{raffle.raffleNum}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[15px] text-[#6F80B0]">
                                    Raffle Name:
                                </span>
                                <span className="text-[15px]">
                                    {raffle.raffleName}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[15px] text-[#6F80B0]">
                                    Scan Link
                                </span>
                                <span className="text-[15px]">
                                    {raffle.scanlink}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[15px] text-[#6F80B0]">
                                    IPFS Link
                                </span>
                                <span className="text-[15px]">
                                    {raffle.ipfslink}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col w-2/3 max-h-[30vh] p-4 overflow-y-auto w-full bg-black border-[#6F80B0] border-[1px]">
                            <div className="flex flex-row justify-between">
                                <span className="text-[15px] w-[15%]">
                                    Rank
                                </span>
                                <span className="text-[15px] w-[30%]">
                                    Star Num
                                </span>
                                <span className="text-[15px] w-[55%]">
                                    Holder
                                </span>
                            </div>
                            {raffle.raffleResults.map((result, index) => {
                                return (
                                    <div className="flex flex-row justify-between opacity-85">
                                        <span className="text-[15px] text-[#8F98B0] w-[15%]">
                                            {result.rank}
                                        </span>
                                        <span className="text-[15px] text-[#8F98B0] w-[30%]">
                                            {result.starNum}
                                        </span>
                                        <span className="text-[15px] text-[#8F98B0] w-[55%]">
                                            {result.holder}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-row w-3/5 space-x-8 mr-0 ml-auto w-full justify-between">
                        <span className="border-[#A7ABBE] bg-[#272C41] py-2 border-2 rounded-[4px] text-center w-full text-white hover:cursor-pointer">
                            Download
                        </span>
                        <span className="border-[#A7ABBE] bg-[#272C41] py-2 border-2 rounded-[4px] text-center w-full text-white hover:cursor-pointer">
                            Tweet it!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
