import Image from "next/image"

const CommunityCard = ({ title, text, image, icon }) => {
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

        <div className='flex items-center capitalize'>
            <div className='mr-1'>
                <Image
                    src={icon}
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
