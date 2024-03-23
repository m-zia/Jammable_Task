import Image from "next/image"


const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <div className="flex items-center">
        <Image src="/navbar/navIcon.png" width={35} height={14}/>
        <span className="text-xl font-black text-purple-800 pl-2">voicify</span>
      </div>


          <p className="mt-2 text-sm text-gray-400">© Copyright 2023</p>
          <p className="mt-2 text-sm text-gray-400">Voicify AI LTD</p>

        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="w-1/4 md:w-1/2 px-4">
            <h2 className="title-font font-bold text-gray-400 tracking-widest text-md mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-300">First Link</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-300">First Link</a>
              </li>
              {/* ... other links */}
            </nav>
          </div>
          {/* ... other category columns */}
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="w-1/4 md:w-1/2 px-4">
            <h2 className="title-font font-bold text-gray-400 tracking-widest text-md mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-300">First Link</a>
              </li>
              {/* ... other links */}
            </nav>
          </div>
          {/* ... other category columns */}
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="w-1/4 md:w-1/2 px-4">
            <h2 className="title-font font-bold text-gray-400 tracking-widest text-md mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-300">First Link</a>
              </li>
              {/* ... other links */}
            </nav>
          </div>
          {/* ... other category columns */}
        </div>

      </div>
      <div className="">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2020 Dev —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-400 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Developer
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {/* Social icons */}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
