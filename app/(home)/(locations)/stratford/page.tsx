import CldImage from "@/components/cld-image";

const StratfordPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Stratford-upon-Avon
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <CldImage
            src={"media/stratford.png"}
            alt={"London eye"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Visit Shakespeare&apos;s birthplace and childhood home, and explore
            Anne Hathaway&apos;s charming cottage, where his wife grew up.
            Discover insights into Shakespeare&apos;s life through these
            historic sites.
          </p>
          <ul className={" px-4 lg:pl-10 space-y-1 "}>
            <li className={"list-disc"}>
              Shakespeare&apos;s Birthplace: Learn about the life of William
              Shakespeare with a visit to his childhood home and other. related
              sites.
            </li>
            <li className={"list-disc"}>
              Anne Hathaway&apos;s Cottage: Discover the idyllic thatched
              cottage where Shakespeare&apos;s wife grew up.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StratfordPage;
