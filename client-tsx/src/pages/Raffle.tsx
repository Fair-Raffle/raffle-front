import { raffles } from '../assets/texts';
import { useParams, Link } from 'react-router-dom';

export default function Raffle() {
    let { id } = useParams<{ id?: any }>();
    let num = parseInt(id);
    let raffle = raffles[num];

    return (
        <div className="flex flex-col w-[937px] mx-auto">
            <div className="flex flex-row justify-between space-x-16 mb-6 opacity-85 ">
                <div className="flex flex-col w-1/2">
                    <span className="text-[24px] font-bebas">PAST RAFFLES</span>
                </div>
            </div>
            <div className="flex flex-col space-y-2 bg-raflle-holder rounded-[2px] shadow-raffle-holder border-[1px] border-[#70769d] p-4 pb-5">
                <span className="text-[24px] text-[#4A5CD4] border-2 border-[#4A5CD4] w-[338px] mb-8 text-center">
                    PAST - STAR RAFFLE
                </span>
                <div className="flex flex-row pl-4">
                    <div className="flex flex-col space-y-4 pr-7">
                        <div className='flex flex-col w-[323px] space-y-4'>
                            <div className="flex flex-row justify-between">
                                <span className="text-base opacity-85">
                                    TOTAL ENTRIES
                                </span>
                                <span className="text-xl bg-black text-[#6C76B2] px-8 py-1 rounded-[13px] w-[145px] text-center font-bebas">
                                    {raffle.totalEntries}
                                </span>
                            </div>
                            <div className="flex flex-row justify-between">
                                <span className="text-base opacity-85">
                                    WINNERS
                                </span>
                                <span className="text-xl bg-black text-[#6C76B2] px-8 py-1 rounded-[13px] w-[145px] text-center font-bebas">
                                    {raffle.totalWinners}
                                </span>
                            </div>
                            <div className="flex flex-col justify-between">
                                <span className="text-[15px] text-[#6F80B0] opacity-85">
                                    Raffle Maker:
                                </span>
                                <div className="flex flex-row space-x-4 opacity-85">
                                    <div className="flex flex-col">
                                        <span className="text-[15px]">
                                            Starknet Id
                                        </span>
                                        <span className="text-[15px]">
                                            {raffle.starknetId}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[15px]">
                                            Twitter Id
                                        </span>
                                        <span className="text-[15px]">
                                            {raffle.twitterId}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="text-[#000000] bg-gradient-to-b border-2 from-[#FFFFFF] to-[#BDC6D1] rounded-lg text-[12px] whitespace-pre-line  mb-0 mt-auto px-4 py-2 w-[313px] mt-16">
                                <span className="text-[#1C243B] text-xl font-bold whitespace-pre-line ">
                                    Give Me The Results!
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row flex-1 pl-7 border-l-1 h-fit pb-3">
                        <div className="flex flex-col gap-y-4 flex-1 opacity-85">
                            <div className='flex flex-col'>
                                <span className="text-[15px] text-[#6F80B0] pr-2">
                                    Raffle Id: 
                                </span>
                                <span className="text-[15px]">
                                    #{raffle.raffleNum}
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <span className="text-[15px] text-[#6F80B0]">
                                    Raffle Name:
                                </span>
                                <span className="text-[15px]">
                                    {raffle.raffleName}
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <span className="text-[15px] text-[#6F80B0]">
                                    Scan Link
                                </span>
                                <span className="text-[15px]">
                                    {raffle.scanlink}
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <span className="text-[15px] text-[#6F80B0]">
                                    IPFS Link
                                </span>
                                <span className="text-[15px]">
                                    {raffle.ipfslink}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col max-h-[30vh] p-4 overflow-y-auto w-[341px] bg-black border-[#6F80B0] border-[1px] opacity-85">
                            <span className="font-bebas text-[24px]">
                                RAFFLE RESULTS:
                            </span>
                            <div className="flex flex-row justify-between opacity-85">
                                <span className="text-[15px] w-[20%]">
                                    Rank
                                </span>
                                <span className="text-[15px] w-[30%]">
                                    Star Number
                                </span>
                                <span className="text-[15px] w-[50%]">
                                    Holder
                                </span>
                            </div>
                            {raffle.raffleResults.map((result, index) => {
                                return (
                                    <div className="flex flex-row justify-between opacity-85">
                                        <span className="text-[15px] text-[#8F98B0] w-[20%]">
                                            {result.rank}
                                        </span>
                                        <span className="text-[15px] text-[#8F98B0] w-[30%]">
                                            {result.starNum}
                                        </span>
                                        <span className="text-[15px] text-[#8F98B0] w-[50%]">
                                            {result.holder}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Link to={'/raffles'} className="bg-[#0F1018] flex border-[#DADADA] border-2 text-[#000000] w-[363px] h-[49px] text-[12px] whitespace-pre-line mb-0 mt-3 px-4 py-1">
                <span className="font-bebas  bg-[#0F1018] text-[#ffffff] text-[20px] whitespace-pre-line text-center mx-auto py-1"> 
                    GO TO ALL PAST RAFFLES
                </span>
            </Link>
        </div>
    );
}
