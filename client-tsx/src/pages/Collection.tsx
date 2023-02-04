import { raffles } from '../assets/texts';
import { Link } from 'react-router-dom';

export default function Collection() {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4">
                <div className="flex flex-col space-y-2 w-3/5 bg-raflle-holder rounded-[2px] shadow-raffle-holder border-[1px] border-[#70769d] p-4">
                    <div className="flex flex-row space-x-4">
                        <div className="w-1/3 aspect-square bg-blackbox rounded-[2px] " />
                        <div className="flex flex-col space-y-2">
                            <span> EARLY STARKERS </span>
                            <span>
                                {' '}
                                Pioneers CLub Pioneers CLub Pioneers CLub
                                Pioneers CLub Pioneers CLub Pioneers CLub
                                Pioneers CLub Pioneers CLub{' '}
                            </span>
                            <div className="flex flex-row space-x-4 ">
                                <div className="bg-white">
                                    <img
                                        src={
                                            'https://cdn-icons-png.flaticon.com/512/160/160194.png'
                                        }
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <div className="bg-white">
                                    <img
                                        src={
                                            'https://cdn-icons-png.flaticon.com/512/160/160194.png'
                                        }
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <div className="bg-white">
                                    <img
                                        src={
                                            'https://cdn-icons-png.flaticon.com/512/160/160194.png'
                                        }
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </div>
                            <span className="text-[#ff0000] text-[14px]">
                                {' '}
                                twitter is provided but not discord or web{' '}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <span> Total Supply : </span>
                        <span> 01234 </span>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <span> Unique Holders : </span>
                        <span> 01234 </span>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 w-2/5 bg-raflle-holder rounded-[2px] shadow-raffle-holder border-[1px] border-[#70769d] p-4">
                    <span className="text-[14px]">
                        Enter How Many Users You Want to Airdrop
                    </span>
                    <span className="text-[#6F80B0]">
                        Please Enter a Number Among 1 - 1234
                    </span>
                    <button className="bg-black text-[#6F80B0] rounded-[13px] w-1/2 text-[12px] whitespace-pre-line mb-0 mt-auto px-16 py-1">
                        <input
                            className="text-[20px] outline-0 ring-0 bg-black text-white w-full"
                            placeholder="_ _ _ _ _ _ _ _"
                        />
                    </button>
                    <span className="text-[14px]">
                        Enter How Many Users You Want to Airdrop
                    </span>
                    <span className="text-[#6F80B0]">
                        Please Enter a Number Among 1 - 1234
                    </span>
                    <button className="bg-black text-[#6F80B0] rounded-[13px] w-1/2 text-[12px] whitespace-pre-line mb-0 mt-auto px-16 py-1">
                        <input
                            className="text-[20px] outline-0 ring-0 bg-black text-white w-full"
                            placeholder="_ _ _ _ _ _ _ _"
                        />
                    </button>
                    <div className="flex flex-row space-x-4">
                        <input type="checkbox" />
                        <span className="text-[#6F80B0]">
                            Make This Raffle For Only Unique Holders
                        </span>
                    </div>
                    <button className="bg-[#F2F5FD] text-[#000000] w-1/2 rounded-[13px] text-[12px] whitespace-pre-line  mb-0 mt-auto px-4 py-1">
                        <span className="text-[#1C243B] text-[16px] whitespace-pre-line w-2/3">
                            Give Me The Stars!
                        </span>
                    </button>
                </div>
            </div>

            <div className="flex flex-col space-y-2 bg-raflle-holder rounded-[2px] shadow-raffle-holder border-[1px] border-[#70769d] p-4">
                <span className="text-[24px] ">
                    PAST RAFFLES ABOUT THIS COLLECTION
                </span>
                <div className="flex flex-row rounded-[5px] pl-8 py-2 pr-2 text-white text-[15px]">
                    <span className="w-[10%]"> Raffle Num </span>
                    <span className="w-[25%]"> Raffle Maker </span>
                    <span className="w-[20%]"> Raffle Name </span>
                    <span className="w-[15%]"> TimeStamp </span>
                    <span className="w-[10%]"> Selected </span>
                    <span className="w-[20%]"> Results </span>
                </div>
                <div className="flex flex-col space-y-2 rounded-[5px] text-white text-[15px]">
                    {raffles.map((raffle, index) => (
                        <Link
                            key={index}
                            to={`/raffle/${index}`}
                            className="flex flex-row bg-raffle-item rounded-[5px] pl-8 py-2 pr-2 text-white cursor-pointer"
                        >
                            <span className="py-1 w-[10%]">
                                {raffle.raffleNum}
                            </span>
                            <span className="py-1 w-[25%]">
                                {raffle.raffleMaker}
                            </span>
                            <span className="py-1 w-[20%]">
                                {raffle.raffleName}
                            </span>
                            <span className="py-1 w-[15%]">
                                {raffle.timeStamp}
                            </span>
                            <span className="py-1 w-[10%]">
                                {raffle.selected}
                            </span>
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
