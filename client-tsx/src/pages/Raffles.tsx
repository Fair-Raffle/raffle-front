import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { raffles } from '../assets/texts';
export default function Raffles() {
    const [search, setSearch] = useState('');

    return (
        <div className="flex flex-col space-y-16">
            <div className="flex flex-row justify-between space-x-16">
                <div className="flex flex-col w-1/2">
                    <span className="font-bebas text-[24px]">
                        {' '}
                        PAST RAFFLES{' '}
                    </span>
                    <span>
                        You can check out past raffles anytime via that page.
                        Just click to results.
                    </span>
                    <span> Never trust, verify!😉 </span>
                </div>
                <div className="flex flex-col w-1/2 space-y-2">
                    <span className="font-bebas text-[24px]">
                        {' '}
                        SEARCH A RAFFLES{' '}
                    </span>
                    <span>
                        Search a raffle via Public Address of “RaffleMaker” or “Name” of the raffle.
                    </span>
                    <button className="bg-[#2B3142] text-[#6F80B0] rounded-[13px] w-1/4 text-[12px] whitespace-pre-line mb-0 mt-auto px-4 py-1">
                        <input
                            className="text-[20px] outline-0 ring-0 bg-[#2B3142] text-white w-full"
                            placeholder="_ _ _ _ _ _ _ _"
                            onChange={(e) => setSearch((prev) => {
                                return e.target.value;
                            })}
                            value={search}
                        />
                    </button>
                </div>
            </div>
            <div className="flex flex-col space-y-2 bg-raflle-holder rounded-[2px] shadow-raffle-holder border-[1px] border-[#70769d] p-4">
                <div className="flex flex-row rounded-[5px] pl-8 py-2 pr-2 text-white text-[15px]">
                    <span className="w-[10%]"> Raffle Num </span>
                    <span className="w-[25%]"> Raffle Maker </span>
                    <span className="w-[20%]"> Raffle Name </span>
                    <span className="w-[15%]"> TimeStamp </span>
                    <span className="w-[10%]"> Selected </span>
                    <span className="w-[20%]"> Results </span>
                </div>
                <div className="flex flex-col space-y-2 rounded-[5px] text-white text-[15px]">
                    {raffles.filter((raffle) => {
                        if (search === '') {
                            return raffle;
                        } else if (
                            raffle.raffleMaker
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            raffle.raffleName
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            raffle.starknetId
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        ) {
                            return raffle;
                            
                        }
                    }).map((raffle, index) => (
                        <Link
                            key={index}
                            to={`/raffle/${index}`}
                            className="flex flex-row bg-raffle-item rounded-[5px] pl-8 py-2 pr-2 text-white cursor-pointer"
                        >
                            <span className="py-1 w-[10%]"> {raffle.raffleNum} </span>
                            <span className="py-1 w-[25%]">
                                {raffle.raffleMaker}
                            </span>
                            <span className="py-1 w-[20%]">
                                {raffle.raffleName}
                            </span>
                            <span className="py-1 w-[15%]">
                                {raffle.timeStamp}
                            </span>
                            <span className="py-1 w-[10%]"> {raffle.selected} </span>
                            <span className="bg-[#4A5072] w-[20%] rounded-[4px] cursor-pointer px-2 py-1">
                                {raffle.results}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
