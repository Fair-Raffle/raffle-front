import Menu from '../assets/menu.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex flex-row h-[10vh]">
      <img src={Menu} className="lg:hidden w-[3rem] h-[3rem] mr-4 ml-auto my-auto" />
      <div className="flex flex-row my-auto hidden lg:flex">
        <Link to={"/"} className="text-[44px] text-white font-bebas">
          <span>FAIR</span>
          <span className="text-[#A5FF4C]">RAFFLE</span>
          <span>.IO</span>
        </Link>
      </div>
      <div className="flex flex-row ml-auto mr-0 my-auto space-x-8 hidden lg:flex">
        <span className="text-white my-auto hover:cursor-pointer"> FOR ES </span>
        <Link to={'/raffles'} className="text-white my-auto hover:cursor-pointer"> FAIR RAFFLE TOOL </Link>
        <span className="text-white border-2 border-white px-4 py-1 hover:cursor-pointer">
          CONNECT WALLET
        </span>
      </div>
    </div>
  );
}
