import Image from "next/image"

const PromotedCard = ({ title, text, image }) => {
  return (
    <div className="w-full rounded-3xl overflow-hidden border-b border-l border-r mb-4 relative">
      <div className="relative">
        <Image
          className="w-full h-60 object-cover rounded-t-3xl"
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          alt="Image of AI Voice Character"
        />
        <Image
          className="absolute top-5 right-5 h-6 w-6 object-contain z-30"
          src={"/heart.png"}
          width={5}
          height={5}
          alt="favorite icon that looks like a heart"
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
