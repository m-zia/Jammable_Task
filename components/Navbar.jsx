import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="bg-purple-800 flex items-center justify-between px-4 py-2 md:px-12">
      <div className="flex items-center">
        <Image src="/navIcon.png" width={50} height={50}/>
        <span className="text-xl font-bold text-white pl-2">voicify</span>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">Home</a>
        <a href="#" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">My Library</a>
        <a href="#" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">Community</a>
        <a href="#" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">Pricing</a>
        <a href="#" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">Contact</a>
        
        <div className="flex items-center">
         
          <div className="ml-2 text-white font-medium">32</div>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
