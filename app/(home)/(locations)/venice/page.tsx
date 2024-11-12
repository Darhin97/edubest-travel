import Image from "next/image";

const VenicePage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Venice Canals and St. Mark&apos;s Basilica
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <Image
            src={"/img-venice.png"}
            alt={"picture of Venice Canals"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Venice&apos;s canals, bridges, and gondola rides create a magical
            experience. Kids can explore St. Mark&apos;s Basilica with its
            golden mosaics and head to the Doge&apos;s Palace to walk across the
            Bridge of Sighs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VenicePage;
