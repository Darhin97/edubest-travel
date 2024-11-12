import Image from "next/image";

const PisaPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          The Leaning Tower of Pisa
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <Image
            src={"/img-pisa.png"}
            alt={"picture of The Leaning Tower of Pisa"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base"}>
            Kids will love the quirky angle of the famous Leaning Tower.
            Climbing it is a fun challenge, and the area around the tower has
            open spaces for children to play.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PisaPage;
