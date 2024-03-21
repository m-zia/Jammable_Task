import Link from 'next/link';
import Image from 'next/image';


function Socials() {
    return (
        <div>

            <div class="mb-5 w-64 rounded-full bg-white pb-2 pt-3 shadow-lg relative mx-auto mt-14 hidden overflow-hidden md:block">

                <p class="mb-1 text-center font-bold leading-tight text-black opacity-50">As seen on...</p>

                <div class="mb-2 flex h-12 justify-center gap-3">

                    <Link href="https://www.youtube.com/@jammable" passHref>
                        <Image
                            src="https://www.jammable.com/_next/static/media/youtube.b460dc04.svg"
                            alt="Youtube"
                            width={50} 
                            height={50} 
                            loading="lazy"
                            decoding="async"
                            className="inline-block"
                        />
                    </Link>

                    <Link href="https://www.tiktok.com/@getjammable" passHref>
                        <Image
                            src="https://www.jammable.com/_next/static/media/tiktok.2d577760.svg"
                            alt="Tiktok"
                            width={50} 
                            height={50} 
                            loading="lazy"
                            decoding="async"
                            className="inline-block"
                        />
                    </Link>


                    <Link href="https://www.instagram.com/getjammable/" passHref>
                        <Image
                            src="https://www.jammable.com/_next/static/media/instagram.60d493d9.svg"
                            alt="Instagram"
                            width={50}
                            height={50} 
                            loading="lazy"
                            decoding="async"
                            className="inline-block"
                        />
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Socials

