import Image from "next/image";

const BolognaPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Piazza Maggiore and the Two Towers (Bologna)
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <Image
            src={"/img-bologna.png"}
            alt={"picture of Piazza Maggiore and the Two Towers"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Bologna&apos;s historic center offers a mix of history and food
            that&apos;s kid-friendly. Kids can climb the Two Towers for
            panoramic views or visit FICO Eataly World, a food-themed park with
            activities like pasta-making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BolognaPage;
