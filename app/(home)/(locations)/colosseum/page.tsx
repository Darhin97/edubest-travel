import CldImage from "@/components/cld-image";

const ColosseumPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Colosseum and Roman Forum (Rome)
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <CldImage
            src={"media/img-col.png"}
            alt={"picture of  Colosseum and Roman Forum"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Kids can experience ancient Rome by exploring the Colosseum&apos;s
            gladiator history and walking through the ruins of the Roman Forum.
            Many tours offer interactive experiences and stories tailored for
            children.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColosseumPage;
