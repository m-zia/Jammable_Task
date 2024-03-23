import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 md:px-12">
      <div className="flex items-center">
        <Image src="/navbar/navIcon.png" width={35} height={14}/>
        <span className="text-xl font-black text-purple-800 pl-2">voicify</span>
      </div>

      <div className="flex items-center lg-max:hidden">
        <Image src="/navbar/navLinks.png" width={684} height={32}/>
      </div>

      <div className="flex items-center">
        <Image src="/navbar/credits.png" width={84} height={46} className="pr-3"/>
        <Image src="/navbar/userPic.png" width={40} height={40}/>
      </div>

    </nav>
  )
}

export default Navbar
