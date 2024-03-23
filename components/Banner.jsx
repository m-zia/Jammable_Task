import Image from "next/image"
import Socials from "./Socials"

function Banner() {
  return (

    <div className="block w-full">

      <div className="relative overflow-hidden rounded-3xl text-center text-white">

        <Image src="/navbar/banner.png" className="rounded-lg" fill={true} />

        <div className="relative"><div className="py-20 [filter:drop-shadow(0_0_2.5rem_black)]">

          <h1 className="m-auto mb-2 text-5xl font-black tracking-tighter [filter:drop-shadow(0_0_1rem_black)] md:w-[750px] md:text-7xl">Create song covers using any voice with AI</h1>

          <p className="px-2 text-xl font-semibold leading-loose [filter:drop-shadow(0_0_1rem_black)]">The #1 platform for making high quality AI covers in seconds!</p>

        </div>

        </div>
      </div>

    </div>





  )
}

export default Banner