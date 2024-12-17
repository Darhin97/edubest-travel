import CldImage from "@/components/cld-image";

const StonehengePage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Stonehenge
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <CldImage
            src={"media/stonehenge.png"}
            alt={"Picture of stonehenge"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Stonehenge: Discover the mysteries of this prehistoric monument,
            including its construction and purpose.
          </p>
          <ul className={" px-4 lg:pl-10 space-y-1 "}>
            <li className={"list-disc"}>
              Stonehenge: Explore this prehistoric monument and learn about the
              mysteries surrounding its construction and purpose.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StonehengePage;
