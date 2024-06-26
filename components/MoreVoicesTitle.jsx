import Image from "next/image"

function MoreVoicesTitle() {
    return (
        <div className='flex items-center pt-24 pb-5'>
            <div className='mr-5'>
                <Image
                    src={"/moreVoices/VoicesIcon.gif"}
                    width={72}
                    height={72}
                    layout="fixed" // Ensure fixed dimensions for proper alignment
                    priority // Optionally prioritize loading for initial content
                />
            </div>
            <div className='flex items-center'>
                <p className='text-5xl sm-max:text-3xl text-black font-extrabold leading-10 pb-5 pt-9 md:text-6xl pr-3'>More voices</p>
                <p className='text-gray-400 font-semibold text-6xl sm-max:text-3xl leading-10 pb-5 pt-9 pl-3'>394</p>
            </div>
        </div>
    )
}

export default MoreVoicesTitle