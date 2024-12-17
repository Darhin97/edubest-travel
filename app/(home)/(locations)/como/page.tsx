import CldImage from "@/components/cld-image";

const ComoPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Lake Como
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <CldImage
            src={"media/img-como.png"}
            alt={"picture of Piazza Maggiore and the Two Towers"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Perfect for nature-loving kids, Lake Como offers boat trips,
            lakeside playgrounds, and hiking trails with beautiful views.
            Nearby, Villa Carlotta&apos;s botanical gardens are great for a
            stroll.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComoPage;
