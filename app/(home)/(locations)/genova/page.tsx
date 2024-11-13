import Image from "next/image";

const GenovaPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Acquario di Genova (Genoa Aquarium)
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <Image
            src={"/img-genova.png"}
            alt={"picture of Acquario di Genova"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Italy&apos;s largest aquarium features marine life from around the
            world, including dolphins, sharks, and colorful tropical fish.
            It&apos;s an engaging place for kids interested in ocean life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenovaPage;
