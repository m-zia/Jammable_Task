import Image from "next/image"

function CommunityTitle() {
    return (
        <div className='flex items-center capitalize pt-24 pb-5'>
            <div className='mr-5'>
                <Image
                    src={"/community/heart.gif"}
                    width={72}
                    height={72}
                    alt="Gif of a heart"
                    layout="fixed" // Ensure fixed dimensions for proper alignment
                    priority // Optionally prioritize loading for initial content
                />
            </div>
            <div className='flex items-center'>
                <p className='text-5xl  text-black font-extrabold leading-10 pb-5 pt-9 md:text-6xl pr-3'>Community</p>
                <p className='text-gray-400 font-semibold text-6xl leading-10 pb-5 pt-9 pl-3'>127</p>
            </div>
        </div>
    )
}

export default CommunityTitle