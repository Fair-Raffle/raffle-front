export default function Raffle() {
  return (
    <div className="flex flex-col space-y-16">
      <div className="flex flex-row justify-between space-x-16">
        <div className="flex flex-col w-1/2">
          <span className="font-bebas text-[24px]"> PAST RAFFLES </span>
          <span>
            You can check out past raffles anytime via that page. Just click to
            results.
          </span>
          <span> Never trust, verify. </span>
        </div>
      </div>
      <div className="flex flex-col space-y-2 bg-raflle-holder rounded-[2px] shadow-raffle-holder border-[1px] border-[#70769d] p-4">
        <span className="font-bebas text-[24px]"> PAST - STAR RAFFLE </span>
        <div className="flex flex-row space-x-16">
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex flex-row justify-between">
              <span className="font-bebas text-[24px]"> TOTAL ENTRIES </span>
              <span className="font-bebas text-[24px] bg-black text-[#6C76B2] px-8 py-1 rounded-[13px]">
                2000
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="font-bebas text-[24px]"> WINNERS </span>
              <span className="font-bebas text-[24px] bg-black text-[#6C76B2] px-8 py-1 rounded-[13px]">
                200
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="font-bebas text-[15px] text-[#6F80B0]"> Raffle Maker: </span>
              
            </div>
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex flex-row justify-between">
              <span className="font-bebas text-[24px]"> TOTAL ENTRIES </span>
              <span className="font-bebas text-[24px] bg-black text-[#6C76B2] px-8 py-1 rounded-[13px]">
                2000
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="font-bebas text-[24px]"> WINNERS </span>
              <span className="font-bebas text-[24px] bg-black text-[#6C76B2] px-8 py-1 rounded-[13px]">
                200
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="font-bebas text-[24px]"> RAFFLE NAME </span>
              <span className="font-bebas text-[24px] bg-black text-[#6C76B2] px-8 py-1 rounded-[13px]">
                ES - Guardians Raffle
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
