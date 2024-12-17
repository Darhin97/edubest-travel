import CldImage from "@/components/cld-image";

const Banner = () => {
  return (
    <div className={"w-full relative h-[20vh]"}>
      <CldImage src={"media/banner.png"} alt={""} fill objectFit={"cover"} />
    </div>
  );
};

export default Banner;
