import Image from "next/image";

const CardiffWalesPage = () => {
    return (
        <div className={'max-w-screen-2xl px-4 lg:px-14 mx-auto'}>
            <div className={'py-10'}>
                <h2 className={'text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7'}>Cardiff,Wales</h2>
                <div className={'relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto'}>
                    <Image src={'/cardiff-wales.png'} alt={''} className={''} fill objectFit={'contain'}/>
                </div>
                <div className={'lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4'}>
                    <p className={"text-center text-base "}>
                        Cardiff Castle: A medieval fortress with 2,000 years of history. St Fagans National Museum of History: An open-air museum
                        depicting Welsh life across centuries.
                    </p>
                    <ul className={' px-4 lg:pl-10 space-y-1 '}>
                        <li className={'list-disc'}>
                            Cardiff Castle: Explore this medieval castle with over 2,000 years of history.
                        </li>
                        <li className={'list-disc'}>
                            Fagans National Museum of History: An open-air museum showcasing Welsh life through the ages.
                        </li>
                        

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardiffWalesPage;