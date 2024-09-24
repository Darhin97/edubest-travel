import Image from "next/image";

const LondonPage = () => {
    return (
        <div className={'max-w-screen-2xl px-4 lg:px-14 mx-auto'}>
            <div className={'py-10'}>
                <h2 className={'text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7'}>London</h2>
                <div className={'relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto'}>
                    <Image src={'/london.png'} alt={'London eye'} className={''} fill objectFit={'contain'}/>
                </div>
                <div className={'lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4'}>
                    <p className={"text-center text-base "}>
                        Explore ancient history at the British Museum, dinosaurs at the Natural History Museum, science
                        at the Science Museum,
                        British royalty at the Tower of London, and enjoy views from the London Eye and West End theater
                        shows.
                    </p>
                    <ul className={' px-4 lg:pl-10 space-y-1 '}>
                        <li className={'list-disc'}>
                            The British Museum: Explore ancient civilizations with exhibits like
                            the Rosetta Stone and Egyptian mummies.
                        </li>
                        <li className={'list-disc'}>
                            The Natural History Museum: Discover dinosaurs, wildlife, and
                            geology through interactive exhibits.
                        </li>
                        <li className={'list-disc'}>
                            The Science Museum: Hands-on exhibits on science,
                            technology, and space exploration.
                        </li>
                        <li className={'list-disc'}>The London Eye: Experience panoramic views of London from
                            this iconic Ferris wheel.
                        </li>
                        <li className={'list-disc'}>The Houses of Parliament and Big Ben: Understand British
                            politics and history with a tour of this historic site.
                        </li>
                        <li className={'list-disc'}>The West End Theatre: Enjoy a children’s play or musical in
                            one of the world’s most famous theater districts.
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LondonPage;