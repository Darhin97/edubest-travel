import Image from "next/image";

const EdinburghPage = () => {
    return (
        <div className={'max-w-screen-2xl px-4 lg:px-14 mx-auto'}>
            <div className={'py-10'}>
                <h2 className={'text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7'}>Edinburgh</h2>
                <div className={'relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto'}>
                    <Image src={'/london.png'} alt={'London eye'} className={''} fill objectFit={'contain'}/>
                </div>
                <div className={'lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4'}>
                    <p className={"text-center text-base "}>
                        Explore Edinburgh Castle&apos;s royal history, the National Museum of Scotland&apos;s diverse exhibits, and Edinburgh Zoo&apos;s global
                        wildlife, including giant pandas.
                    </p>
                    <ul className={' px-4 lg:pl-10 space-y-1 '}>
                        <li className={'list-disc'}>
                            Edinburgh Castle: Explore this historic fortress and learn about Scotland&apos;s royal history.
                        </li>
                        <li className={'list-disc'}>
                            The National Museum of Scotland: Discover everything from Scottish history to natural wonders.
                        </li>
                        <li className={'list-disc'}>
                            Edinburgh Zoo: Meet animals from around the world, including the famous giant pandas.
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EdinburghPage;