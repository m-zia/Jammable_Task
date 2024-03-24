import Image from "next/image"

function GenresBadge({ image, text, altText }) {
    return (
        <>
            <div className="shrink-0">
                <div className="flex items-center justify-center gap-2 rounded-3xl bg-violet-50 px-3 py-2 align-middle text-sm font-bold leading-normal text-purple-700 hover:bg-violet-100 md:text-base pb-2 pt-2.5">
                    <Image
                        className=" object-contain rounded-full"
                        src={image}
                        width={30}
                        height={30}
                        alt={altText}
                    />
                    <span>{text}</span></div>
            </div>
        </>
    )
}

export default GenresBadge