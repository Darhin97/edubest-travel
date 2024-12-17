import CldImage from "@/components/cld-image";

const ManchesterPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Manchester
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <CldImage
            src={"media/manchester.png"}
            alt={"Picture of manchester"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Explore Manchester&apos;s industrial past and innovations at the
            Museum of Science and Industry. Take a tour of Old Trafford Stadium,
            the iconic home of Manchester United Football Club.
          </p>
          <ul className={" px-4 lg:pl-10 space-y-1 "}>
            <li className={"list-disc"}>
              The Museum of Science and Industry: Discover Manchester&apos;s
              industrial heritage and technological innovations.
            </li>
            <li className={"list-disc"}>
              Old Trafford Stadium: Visit the home of Manchester United Football
              Club for a tour.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManchesterPage;
