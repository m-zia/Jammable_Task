import Image from "next/image"

function HorizontalCard() {
    return (
        <div className="w-full h-[277px] max-w-full lg:flex">

            <div className="border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-l-lg p-4 flex flex-col justify-between leading-normal w-1/3">
                <div className="mb-8">
                    <div className="p-1">
                        <h5 className="text-4xl font-medium tracking-tight text-gray-900 leading-10 pb-1">Drizzy</h5>
                        <p className="mt-1 text-sm text-gray-400">45K uses · 1K likes</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <button className="bg-purple-800 text-white font-bold py-2 px-20 mt-[120px] rounded-lg flex items-center">
                            <Image className="mr-2 h-6 w-6" src="/promoted/buttonLogo.png" width={50} height={50} />
                            <p className="text-sm">Voicify Drizzy</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-[277px] w-2/3 flex-none bg-cover rounded-t rounded-r-lg text-center overflow-hidden">
                <div className="relative">
                    <Image
                        className="w-full h-full object-cover rounded-r-lg"
                        src={"/promoted/drake2.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                    <Image
                        className="absolute top-2 right-2 h-6 w-6 object-contain z-30"
                        src={"/heart.png"}
                        width={5}
                        height={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard