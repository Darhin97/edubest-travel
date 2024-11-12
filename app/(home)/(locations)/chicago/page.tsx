import Image from "next/image";

const ChicagoPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Chicago, Illinois
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <Image
            src={"/img-chicago.png"}
            alt={"picture of Chicago"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Chicago offers visits to the Museum of Science and Industry, the Art
            Institute of Chicago, and various architectural tours. It’s a great
            place to learn about urban development and Midwestern history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChicagoPage;
