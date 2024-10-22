import Image from "next/image";

const DisneylandPage = () => {
  return (
    <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto"}>
      <div className={"py-10"}>
        <h2
          className={
            "text-blue-500 font-bold text-2xl md:text-3xl text-center mb-7"
          }
        >
          Disneyland
        </h2>
        <div
          className={
            "relative w-full lg:w-3/4 h-64 md:h-[450px] lg:h-[450px] lg:mx-auto"
          }
        >
          <Image
            src={"/disney1.png"}
            alt={"picture of disneyland"}
            className={""}
            fill
            objectFit={"contain"}
          />
        </div>
        <div className={"lg:w-4/5  mx-auto mt-4 md:mt-9 flex flex-col gap-y-4"}>
          <p className={"text-center text-base "}>
            Explore Disneyland for a magical, immersive experience where beloved
            characters, thrilling rides, and enchanting atmospheres bring
            childhood dreams to life.
          </p>
          <ul className={" px-4 lg:pl-10 space-y-1 "}>
            <li className={"list-disc"}>
              Go to Disneyland Park for a magical experience that blends classic
              Disney attractions, entertainment, and nostalgia with thrilling
              rides for all ages.
            </li>
            <li className={"list-disc"}>
              The Sleeping Beauty Castle Walkthrough offers a magical, immersive
              experience where you can explore the enchanting story of Sleeping
              Beauty through beautiful dioramas inside Disneyland&apos;s iconic
              castle.
            </li>
            <li className={"list-disc"}>
              Buzz Light year Astro Blasters offers a fun, interactive
              experience where you can become a &quot;Space Ranger,&quot;
              shooting targets and competing for high scores in a colorful,
              space-themed adventure.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisneylandPage;
