import Image from "next/image";

const MilanPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Milan Cathedral and Sforza Castle (Milan)
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <Image
            src={"/img-milan.png"}
            alt={"picture of  Milan Cathedral and Sforza Castle"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Milan&apos;s Gothic cathedral offers a rooftop tour where kids can
            see the city from above. Sforza Castle houses art, armor, and a
            museum with interactive sections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MilanPage;
