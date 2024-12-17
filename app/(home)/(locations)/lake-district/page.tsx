import CldImage from "@/components/cld-image";

const LakeDistrictPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          The Lake District
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <CldImage
            src={"media/lake.png"}
            alt={"Picture of a lake"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Visit Beatrix Potter&apos;s Hill Top Farm to see the landscapes that
            inspired her stories, and enjoy boat trips and hiking at Lake
            Windermere, the UK&apos;s largest lake.
          </p>
          <ul className={" px-4 lg:pl-10 space-y-1 "}>
            <li className={"list-disc"}>
              Beatrix Potter&apos;s Hill Top Farm: Visit the home of the famous
              children’s author and explore the landscapes that inspired her
              stories.
            </li>
            <li className={"list-disc"}>
              Lake Windermere: Enjoy boat trips, hiking, and the stunning
              natural scenery of the UK&apos;s largest lake.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LakeDistrictPage;
