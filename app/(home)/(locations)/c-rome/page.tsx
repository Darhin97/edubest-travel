import CldImage from "@/components/cld-image";

const CRomePage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Children’s Museum of Rome
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <CldImage
            src={"media/img-c-rome.png"}
            alt={"picture of Children’s Museum of Rome"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            This hands-on museum offers interactive exhibits focused on science,
            the environment, and creative play. It&apos;s perfect for younger
            children to learn while having fun.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CRomePage;
