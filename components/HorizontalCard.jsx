import Image from "next/image"

function HorizontalCard() {
    return (
        <div className="w-full h-[324px] max-w-full lg:flex">

            <div className="border-b border-l border-gray-200 lg:border-t lg:border-gray-200 bg-gradient-to-b from-violet-50 to-neutral-50 rounded-l-3xl p-4 flex flex-col justify-between leading-normal w-1/3">
                <div className="mb-8">
                    <div className="p-1">
                        <h5 className="text-4xl font-medium tracking-tight text-gray-900 leading-10 pb-1">Drizzy</h5>
                        <p className="mt-1 text-sm text-gray-400">45K uses · 1K likes</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <button className="bg-purple-800 text-white font-bold py-2 px-20 mt-[167px] rounded-xl flex items-center">
                            <Image className="mr-2 h-6 w-6" src="/promoted/buttonLogo.png" width={50} height={50} alt="Sound Wave Logo" />
                            <p className="text-sm">Voicify Drizzy</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-2/3 flex-none bg-cover rounded-r-3xl text-center overflow-hidden">
                <div className="relative w-full h-[324px]">
                    <Image
                        className="w-full h-full object-cover rounded-r-lg"
                        src={"/promoted/drake2.png"}
                        layout="fill"
                        sizes="100vw"
                        alt="Drake"
                    />
                    <Image
                        className="absolute top-5 right-5 h-6 w-6 object-contain z-30"
                        src={"/heart.png"}
                        width={5}
                        height={5}
                        alt="favorite icon that looks like a heart"
                    />
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard