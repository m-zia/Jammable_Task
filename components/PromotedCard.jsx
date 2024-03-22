import Image from "next/image"

const PromotedCard = ({ title, text, image}) => {
  return (

    <div className="w-full rounded overflow-hidden shadow-md mb-4 relative">

      <div className="relative">
        <Image
          className="w-full h-48 object-cover rounded-t-lg"
          src={image}
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

      <div className="p-4">
        <h5 className="text-xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="mt-1 text-sm text-gray-400">{text}</p>
      </div>
    </div>
  );
};

export default PromotedCard;
