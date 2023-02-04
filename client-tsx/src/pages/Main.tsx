import mainlogo from '../assets/main.png';
import onstarknet from '../assets/onstarknet.png';
import onlydust from '../assets/onlydust.png';
import oval from '../assets/oval.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Main() {
    const [hover, setHover] = useState([false, false, false]);
    return (
        <div className="flex flex-col justify-center font-bebas">
            <div className="flex flex-row w-full justify-center">
                <div className="flex flex-col justify-center">
                    <img className="w-fit" src={mainlogo} alt="mainlogo" />
                </div>
                <div className="flex flex-col w-fit mt-16">
                    <img
                        className="mr-0 ml-auto"
                        src={onstarknet}
                        alt="onstarknet"
                    />
                    <span className="text-[58px] font-bebas text-white text-left">
                        TRUSTLESS & on-cHAIN
                    </span>
                    <span className="text-[#6C76B2] text-[44px] text-left font-bebas">
                        RAFFLE TOOL
                    </span>
                    <span className="text-[24px] font-bebas">
                        TOTALLY OPEN SOURCE FOR COMMUNITY
                    </span>
                    <div className="flex flex-row mt-8 space-x-16">
                        <div className="flex flex-row h-fit space-x-4">
                            <img className='object-contain' src={onlydust} alt="onlydust" width={60} height={60}/>

                            <span className="text-[24px] font-bebas text-white text-left">
                                BACKED BY
                                <br />
                                <span className="text-[#6C76B2] text-left font-bebas">
                                    ONLY DUST
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-row h-fit space-x-4">
                            <img className='object-contain' src={oval} alt="onlydust" width={60} height={60}/>

                            <span className="text-[24px] font-bebas text-white text-left">
                                VRF SPONSER
                                <br />
                                <span className="text-[#6C76B2] text-left font-bebas">
                                —
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-16 space-x-8">
                <Link
                    to="/create-raffle"
                    onMouseEnter={() => {
                        setHover([true, false, false]);
                    }}
                    onMouseLeave={() => {
                        setHover([false, false, false]);
                    }}
                    className="flex flex-col p-4 w-1/3 cursor-pointer bg-step border-2 border-[#9FAAEA] rounded-[2px] shadow-step hover:shadow-step-hover hover:bg-step-hover"
                >
                    <span className="text-[15px]"> Start </span>
                    <span className="text-[24px] font-bebas text-white text-left">
                        RAFFLE WITH
                        <br />
                        <span
                            className={`${
                                hover[0] ? 'text-[#104171]' : 'text-[#6C76B2] '
                            } text-left font-bebas`}
                        >
                            EXCEL LIST
                        </span>
                    </span>
                </Link>
                <Link
                    to={'/create'}
                    onMouseEnter={() => {
                        setHover([false, true, false]);
                    }}
                    onMouseLeave={() => {
                        setHover([false, false, false]);
                    }}
                    className="flex flex-col p-4 w-1/3 bg-step border-2 border-[#9FAAEA] rounded-[2px] cursor-pointer shadow-step hover:shadow-step-hover hover:bg-step-hover"
                >
                    <span className="text-[15px]"> Start </span>
                    <span className="text-[24px] font-bebas text-white text-left">
                        RAFFLE WITH
                        <br />
                        <span
                            className={`${
                                hover[1] ? 'text-[#104171]' : 'text-[#6C76B2] '
                            } text-left font-bebas`}
                        >
                            NFT COLLECTION
                        </span>
                    </span>
                </Link>
                <div
                    onMouseEnter={() => {
                        setHover([false, false, true]);
                    }}
                    onMouseLeave={() => {
                        setHover([false, false, false]);
                    }}
                    className="flex flex-col p-4 w-1/3 bg-step border-2 cursor-pointer  border-[#9FAAEA] rounded-[2px] shadow-step hover:shadow-step-hover hover:bg-step-hover"
                >
                    {hover[2] && (
                        <span className="text-white text-[24px] text-left my-auto font-bebas">
                            DEVELOPING!!
                        </span>
                    )}
                    {!hover[2] && (
                        <>
                            <span className="text-[15px]"> Start </span>
                            <span className="text-[24px] font-bebas text-white text-left">
                                RAFFLE WITH
                                <br />
                                <span
                                    className={`${
                                        hover[2]
                                            ? 'text-[#104171]'
                                            : 'text-[#6C76B2] '
                                    } text-left font-bebas`}
                                >
                                    YOUR TWEET
                                </span>
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
