import Image from "next/image"

function Genres() {
  return (
    <div className="flex items-center justify-center pt-5 pb-11">
      <Image src="/genres/genres.png" width={927} height={40} className="mx-auto" />
    </div>
  )
}

export default Genres