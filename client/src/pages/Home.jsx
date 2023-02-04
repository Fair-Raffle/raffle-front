import Council_img from "../assets/monetize_data_council.png";
import Starknet_logo from "../assets/starknet-logo.png";
import Github_logo from "../assets/github-logo.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col max-w-[65rem] mx-auto space-y-4 mt-8">
        <div className="flex flex-row space-x-2 mt-16">
          <img src={Council_img} className="rounded-[60px] shadow-step w-1/2 h-[75%]" />
          <div className="flex flex-col w-2/3">
            <div className="flex ring-0 bg-black rounded-[60px] h-[3rem] w-1/2 h-[15%] ml-auto">
              <img src={Starknet_logo} className="pl-2 py-2" />
              <span className='text-white text-[24px] font-bebas  mx-auto my-auto'> ON STARKNET! </span>
            </div>
            <span className='text-white text-[54px] font-bebas  mr-auto ml-auto mr-0 mb-0 pb-0'> TRUSTLESS & ON-CHAIN
            <br></br><span className='text-white text-[44px] text-[#6F80B0] font-bebas mx-auto'> RAFFLE TOOL </span></span>
            <div className="flex h-[3rem] w-2/3 h-[15%] ml-auto">
              <img src={Github_logo} className="pl-2 py-2 color-revert" />
              <span className='text-white text-[24px] font-bebas  mx-auto my-auto pl-2'> TOTALLY OPEN SOURCE 
              <br></br> FOR COMMUNITY </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
