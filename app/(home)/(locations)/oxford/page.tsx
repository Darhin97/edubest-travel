import Image from "next/image";

const OxfordPage = () => {
    return (
        <div className={'max-w-screen-2xl px-4 lg:px-14 mx-auto'}>
            <div className={'py-10'}>
                <h2 className={'text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7'}>Oxford</h2>
                <div className={'relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto'}>
                    <Image src={'/oxford.png'} alt={'London eye'} className={''} fill objectFit={'contain'}/>
                </div>
                <div className={'lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4'}>
                    <p className={"text-center text-base "}>
                        Visit the University of Oxford to explore historic colleges, the Bodleian Library, and the Natural History Museum,
                        featuring fossils, minerals, and the famous dodo.
                    </p>
                    <ul className={' px-4 lg:pl-10 space-y-1 '}>
                        <li className={'list-disc'}>
                            The University of Oxford: Visit one of the oldest and most prestigious universities in the world. Explore the famous. Bodleian Library and the various historic colleges.
                        </li>
                        <li className={'list-disc'}>
                            Oxford University Museum of Natural History: Discover fossils, minerals, and taxidermy, including the famous dodo.
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OxfordPage;