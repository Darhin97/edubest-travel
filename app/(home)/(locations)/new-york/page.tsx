import CldImage from "@/components/cld-image";

const NYPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          New York City, New York
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <CldImage
            src={"media/img-ny.png"}
            alt={"picture of york"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Iconic for its cultural and historical attractions, students can
            visit the American Museum of Natural History, the United Nations
            headquarters, and Ellis Island, where millions of immigrants entered
            the U.S.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NYPage;
