import Image from "next/image"

const CommunityCard = ({ title, text, image }) => {
  return (
    <div className="w-full rounded overflow-hidden mb-4 relative">
      <div className="relative">
        <Image
          className="w-full h-60 object-cover rounded-3xl"
          src={image}
          width={0}
          height={0}
          sizes="100vw"
        />

        <Image
          className="absolute top-5 right-5 h-6 w-6 object-contain z-30"
          src={"/heart.png"}
          width={5}
          height={5}
        />
      </div>

      <div className="pt-4 pb-4 pl-0">
        <div className='flex items-center capitalize'>
          <div className='mr-1'>
            <Image
              src={"/headIcon.png"}
              width={24}
              height={24}
              layout="fixed"
              priority
            />
          </div>
          <div className='flex items-center'>
            <h5 className="text-xl font-bold tracking-tight text-gray-900">{title}</h5>
          </div>
        </div>
        <p className="mt-1 text-sm text-gray-400">{text}</p>
      </div>
    </div>
  );
};

export default CommunityCard;
