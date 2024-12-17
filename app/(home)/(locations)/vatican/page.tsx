import CldImage from "@/components/cld-image";

const VaticanPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Vatican City and Vatican Museums (Rome)
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <CldImage
            src={"media/img-vatican.png"}
            alt={"picture of Vatican City and Vatican Museums"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            The Vatican Museums offer kid-friendly tours, where kids can see
            iconic art like the Sistine Chapel and Raphael&apos;s Rooms. St.
            Peter&apos;s Basilica also has a climbable dome with amazing views
            of Rome.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VaticanPage;
