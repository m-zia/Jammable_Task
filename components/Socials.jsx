import Link from 'next/link';
import Image from 'next/image';


function Socials() {
    return (
        <div>

            <div className="mb-5 w-64 rounded-full bg-white pb-2 pt-3 shadow-lg relative mx-auto -mt-12 overflow-hidden block">

                <div className="mb-0 flex h-12 pt-3 justify-center gap-3">

                    <Link href="https://www.tiktok.com/@getjammable" passHref>
                        <Image
                            src="/socials/tiktok.jpg"
                            alt="Tiktok"
                            width={71.29}
                            height={20.79}
                            loading="lazy"
                            decoding="async"
                            className="inline-block"
                        />
                    </Link>

                    <Link href="https://www.youtube.com/@jammable" passHref>
                        <Image
                            src="/socials/youtube.jpg"
                            alt="Youtube"
                            width={82.62}
                            height={23.21}
                            loading="lazy"
                            decoding="async"
                            className="inline-block"
                        />
                    </Link>

                    <Link href="https://www.instagram.com/getjammable/" passHref>
                        <Image
                            src="/socials/instagram.jpg"
                            alt="Instagram"
                            width={26}
                            height={26}
                            loading="lazy"
                            decoding="async"
                            className="inline-block"
                        />
                    </Link>

                </div>

                <p className="mb-3 text-center leading-tight text-black opacity-40 text-xs">Voicify generated 100M+ views</p>

            </div>

        </div>
    )
}

export default Socials

