import React from "react";
import Banner from "@/components/banner";
import CldImage from "@/components/cld-image";

const Gallery = () => {
  return (
    <div>
      <Banner />
      <section
        data-name={"gallery"}
        className={
          "py-32 max-w-screen-2xl px-4 lg:px-14 mx-auto flex flex-col items-center gap-y-10  "
        }
      >
        <div className={"w-full text-center space-y-2"}>
          <h3 className={"text-blue-500  font-bold text-2xl md:text-4xl"}>
            Gallery
          </h3>
          <p>Memories from our previous tours all around the UK.</p>
        </div>
        <div
          className={
            "w-full md:w-[70%] lg:w-[90%] grid grid-cols-[300px] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 justify-center"
          }
        >
          <div className={"w-full relative"}>
            <div className={"w-full h-56 md:h-64 xl:h-60"}>
              <CldImage
                src={"media/oxford-uni.png"}
                alt={"Family at oxford university"}
                fill
                className={"object-cover"}
              />
            </div>
            <div className={"w-full bg-slate-700/55 absolute bottom-0"}>
              <span
                className={
                  "block w-full text-center text-white text-base md:text-lg"
                }
              >
                oxford university
              </span>
            </div>
          </div>{" "}
          <div className={"w-full relative"}>
            <div className={"w-full h-56 md:h-64 xl:h-60"}>
              <CldImage
                src={"media/theme-park.png"}
                alt={""}
                fill
                className={"object-cover"}
              />
            </div>
            <div className={"w-full bg-slate-700/55 absolute bottom-0"}>
              <span
                className={
                  "block w-full text-center text-white text-base md:text-lg"
                }
              >
                Art work
              </span>
            </div>
          </div>{" "}
          <div className={"w-full relative"}>
            <div className={"w-full h-56 md:h-64 xl:h-60"}>
              <CldImage
                src={"media/theme-park2.png"}
                alt={"Visit to theme park"}
                fill
                className={"object-cover"}
              />
            </div>
            <div className={"w-full bg-slate-700/55 absolute bottom-0"}>
              <span
                className={
                  "block w-full text-center text-white text-base md:text-lg"
                }
              >
                Theme park
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
