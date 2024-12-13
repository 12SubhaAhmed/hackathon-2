export default function Hero() {
  return (
    <div className="sm:w-[1440px] sm:top-[124px] bg-[#f6f7f9]">
      <div className="flex flex-col mt-[32px] ml-[64px] space-y-8">
        {/* Single row for ad1 and ad2 */}
        <div className="ads1 flex justify-between items-center space-x-">
          <div className="w-[372px] sm:w-[640px] h-[209px] sm:h-[360px] hover:shadow-[0_0_4px_1px_black] transition-all">
            <img src="/Images/Ads1.png" alt="Ads1" />
          </div>
          <div className="ads2 hidden md:block w-[640px] h-[360px] hover:shadow-[0_0_4px_1px_black] transition-all">
            <img src="/Images/Ads2.png" alt="Ads2" />
          </div>
        </div>

        {/* Second row for Pickup, Switch, and DropOff */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-4 space-y-0">
          <div className="w-[467px] sm:w-[582px] h-[120px] sm:h-[132px] hover:shadow-[0_0_4px_1px_black] transition-all">
            <img src="/Images/Pick Up.png" alt="Pick up" />
          </div>
          <div className="sm:top-[520px] sm:left-[690px] lg:mt-0 mt-[70px] items-center hover:shadow-[0_0_4px_1px_black] transition-all">
            <img src="/Images/Switch.png" alt="Switch" className="text-lg" />
          </div>
          <div className="sm:w-[582px] w-[477px] h-[120px] sm:h-[132px] hover:shadow-[0_0_4px_1px_black] transition-all">
            <img src="/Images/Drop Off.png" alt="Drop off" />
          </div>
        </div>
      </div>
    </div>
  );
}
