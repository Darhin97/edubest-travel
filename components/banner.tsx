import Image from "next/image";

const Banner = () => {
  return (
    <div className={"w-full relative h-[20vh]"}>
      <Image src={"/banner.png"} alt={""} fill objectFit={"cover"} />
    </div>
  );
};

export default Banner;
