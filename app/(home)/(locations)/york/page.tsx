import Image from "next/image";

const YorkPage = () => {
    return (
        <div className={'max-w-screen-2xl px-4 lg:px-14 mx-auto'}>
            <div className={'py-10'}>
                <h2 className={'text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7'}>York</h2>
                <div className={'relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto'}>
                    <Image src={'/york.png'} alt={'picture of york'} className={''} fill objectFit={'contain'}/>
                </div>
                <div className={'lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4'}>
                    <p className={"text-center text-base "}>
                        Explore Viking life at the Jorvik Viking Centre, admire the Gothic beauty of York Minster, and uncover York&apos;s dark history at
                        The York Dungeon with thrilling live shows.
                    </p>
                    <ul className={' px-4 lg:pl-10 space-y-1 '}>
                        <li className={'list-disc'}>
                            The Jorvik Viking Centre: Experience life as it was during the Viking Age with interactive exhibits.
                        </li>
                        <li className={'list-disc'}>
                            York Minster: Visit one of the largest and most beautiful Gothic cathedrals in Europe.
                        </li>
                        <li className={'list-disc'}>
                            The York Dungeon: Learn about York&apos;s dark history through thrilling live shows.
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    );
}

export default YorkPage;