import Image from "next/image"


const Footer = () => {
  return (
    <div className="">
      <div className="flex items-center pt-5">
        <div className="flex-1 border-t-2 border-gray-200"></div>

        <div className="flex-1 border-t-2 border-gray-200"></div>
      </div>


      <footer className="text-gray-600 body-font">
        <div className="container px-1 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className="flex items-center pl-16 md:pl-0">
              <Image src="/navbar/navIcon.png" width={35} height={14} />
              <span className="text-xl font-black text-purple-800 pl-2">voicify</span>
            </div>


            <p className="mt-2 text-sm text-gray-400">© Copyright 2023</p>
            <p className="mt-2 text-sm text-gray-400">Voicify AI LTD</p>

          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center md-max:hidden">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <nav className="list-none leading-7">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800 ">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Settings</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Cartoons</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <nav className="list-none leading-7">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Pricing</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Login</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Sign Up</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Forgot Password</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">History</a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800 mt-3">Terms of Use</a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Privacy Policy</a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Refund Policy</a>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <nav className="list-none leading-7">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Drizzy AI Model</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Juice AI Model</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Kanye AI Model</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Drizzy AI Model</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Juice AI Model</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Kanye AI Model</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Drizzy AI Model</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Juice AI Model</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-800">Kanye AI Model</a>
                </li>
              </nav>
            </div>


          </div>
        </div>
        <div className="">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-left lg-max:text-center ">Keep rocking & sing your song.</p>


          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
