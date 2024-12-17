import CldImage from "@/components/cld-image";

const PompeiiPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Pompeii and Herculaneum
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <CldImage
            src={"media/img-pomp.png"}
            alt={"picture of Pompeii and Herculaneum"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Kids interested in history will love exploring these preserved
            ancient Roman cities destroyed by the eruption of Mount Vesuvius.
            It&apos;s like stepping back in time to see Roman houses, theaters,
            and even ancient graffiti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PompeiiPage;
