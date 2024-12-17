import CldImage from "@/components/cld-image";

const WindsorPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Windsor
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <CldImage
            src={"media/windsor.png"}
            alt={"Picture of windsor"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Windsor Castle offers royal history as the monarch&apos;s residence,
            while Legoland Windsor Resort features rides and Lego-themed
            attractions for family fun.
          </p>
          <ul className={" px-4 lg:pl-10 space-y-1 "}>
            <li className={"list-disc"}>
              Windsor Castle: Visit the official residence of the British
              monarch, with centuries of royal history to discover.
            </li>
            <li className={"list-disc"}>
              Legoland Windsor Resort: A fun-filled theme park with rides,
              shows, and Lego-themed attractions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WindsorPage;
