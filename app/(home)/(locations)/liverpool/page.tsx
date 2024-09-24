import Image from "next/image";

const LiverpoolPage = () => {
    return (
        <div className={'max-w-screen-2xl px-4 lg:px-14 mx-auto'}>
            <div className={'py-10'}>
                <h2 className={'text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7'}>Liverpool</h2>
                <div className={'relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto'}>
                    <Image src={'/liverpool.png'} alt={'London eye'} className={''} fill objectFit={'contain'}/>
                </div>
                <div className={'lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4'}>
                    <p className={"text-center text-base "}>
                        The Beatles Story showcases the band&apos;s rise to fame, while the Merseyside Maritime Museum highlights Liverpool’s maritime
                        heritage, including a Titanic exhibition.
                    </p>
                    <ul className={' px-4 lg:pl-10 space-y-1 '}>
                        <li className={'list-disc'}>
                            The Beatles Story: Learn about the world-famous band and their journey to stardom.
                        </li>
                        <li className={'list-disc'}>
                            Merseyside Maritime Museum: Explore Liverpool&apos;s rich maritime history, including the Titanic exhibition.
                        </li>
                      


                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LiverpoolPage;