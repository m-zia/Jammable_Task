import Image from "next/image"

const Card = ({ title, text, image }) => {
    return (
        <div className="w-full rounded overflow-hidden shadow-md mb-4 relative">
            <Image className="w-full h-48 object-cover rounded-t-lg" src={image} width={0}
                height={0}
                sizes="100vw" />
            <div className="p-4">
                <h5 className="text-xl font-bold tracking-tight text-gray-900">{title}</h5>
                <p className="mt-1 text-sm text-gray-700">{text}</p>
            </div>
        </div>
    )
}

export default Card
