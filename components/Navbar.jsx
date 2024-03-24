import Image from "next/image";
import HouseSVG from "./SVG/House.jsx";
import VoiceSVG from "./SVG/Voice.jsx";
import HeadSVG from "./SVG/Head.jsx";
import CoinSVG from "./SVG/Coin.jsx";
import ArrowSVG from "./SVG/Arrow.jsx";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 md:px-12">
      <div className="flex items-center">
        <Image src="/navbar/navIcon.png" width={35} height={14} />
        <span className="text-xl font-black text-purple-800 pl-2 lg-max:pl-0 lg-max:hidden">voicify</span>
      </div>

      <div className="flex items-center fill-current text-grey-300 ">
        <HouseSVG className="lg-max:hidden" />
        <span className="text-xl font-semibold text-black pl-2 pr-2 ">Home</span>
      </div>

      <div className="flex items-center fill-current text-white ">
        <VoiceSVG className="lg-max:hidden" />
        <span className="text-xl font-semibold text-gray-400 pl-2 pr-2 sm-max:hidden">My Library</span>
      </div>

      <div className="flex items-center fill-current text-white ">
        <HeadSVG className="lg-max:hidden" />
        <span className="text-xl font-semibold text-gray-400 pl-2 pr-2 sm-max:hidden">Community</span>
      </div>

      <div className="flex items-center fill-current text-white ">
        <CoinSVG className="lg-max:hidden" />
        <span className="text-xl font-semibold text-gray-400 pl-2 pr-2 ">Pricing</span>
      </div>

      <div className="flex items-center fill-current text-white ">
        <ArrowSVG className="lg-max:hidden" />
        <span className="text-xl font-semibold text-gray-400 pl-2 pr-2 ">Contact</span>
      </div>

      <div className="flex items-center">
        <Image src="/navbar/credits.png" width={84} height={46} className="pr-3" />
        <Image src="/navbar/userPic.png" width={40} height={40} />
      </div>
    </nav>
  )
}

export default Navbar
