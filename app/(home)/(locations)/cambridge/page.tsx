import Image from "next/image";

const CambridgePage = () => {
    return (
        <div className={'max-w-screen-2xl px-4 lg:px-14 mx-auto'}>
            <div className={'py-10'}>
                <h2 className={'text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7'}>Cambridge</h2>
                <div className={'relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto'}>
                    <Image src={'/cambridge.png'} alt={'London eye'} className={''} fill objectFit={'contain'}/>
                </div>
                <div className={'lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4'}>
                    <p className={"text-center text-base "}>
                        Tour Cambridge’s historic colleges, home to famous alumni like Sir Isaac Newton and Stephen Hawking, and explore art and
                        antiquities from ancient Egypt to modern times at the Fitzwilliam Museum.
                    </p>
                    <ul className={' px-4 lg:pl-10 space-y-1 '}>
                        <li className={'list-disc'}>
                            The University of Cambridge: Tour the historic colleges and learn about famous alumni like Sir Isaac Newton and Stephen Hawking.
                        </li>
                        <li className={'list-disc'}>
                            The Fitzwilliam Museum: Explore art and antiquities from ancient Egypt to modern times.
                        </li>
                        

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CambridgePage;