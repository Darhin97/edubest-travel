import Image from "next/image";

const BostonPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Boston, Massachusetts
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <Image
            src={"/img-boston.png"}
            alt={"picture of boston"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Known as the &quot;Cradle of Liberty,&quot; Boston has many historic
            sites tied to the American Revolution, such as the Freedom Trail,
            and prominent educational institutions like Harvard University and
            MIT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BostonPage;
