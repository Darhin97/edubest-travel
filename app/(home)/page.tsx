"use client";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import CityCard from "@/components/city-card";
import { citiesInfo } from "@/data/data-info";
import Magnetic from "@/components/magnetic";
import Reveal from "@/components/reveal";
import { Be_Vietnam_Pro } from "next/font/google";
import CldImage from "@/components/cld-image";

const textFont = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const cities = citiesInfo.slice(0, 8);
  return (
    <>
      <div className={"h-full w-full"}>
        {/*mobile view cover*/}
        <section data-name={"cover-image mobile"} className={"block md:hidden"}>
          <div className={"w-full h-[500px] relative"}>
            <CldImage
              src={"media/mobile-cover.png"}
              alt={"Header Image"}
              fill
              className={"object-cover"}
            />
            <div className={"overlay"}></div>
          </div>
          <div
            className={cn(
              "absolute top-1/3 md:left-10 xl:left-20 z-1 2xl:left-48",
            )}
          >
            <div
              className={
                "flex flex-col items-center text-center gap-y-5 w-full px-4"
              }
            >
              <Reveal>
                <h3
                  className={cn(
                    "text-4xl  text-white font-extrabold",
                    textFont.className,
                  )}
                  style={{ fontWeight: 800 }}
                >
                  Educational tours for students
                </h3>
              </Reveal>
              <Reveal>
                <p
                  className={
                    "font-normal text-base sm:text-lg text-white w-full md:w-[490px] "
                  }
                >
                  Immersive learning experiences through multi-day trips to
                  historical, cultural, or natural sites.
                </p>
              </Reveal>
              <Reveal>
                <Magnetic>
                  <Button
                    className={
                      "w-[140px]  bg-[#DC6400] hover:bg-[#DC6400]/70 transition-colors"
                    }
                  >
                    <Link
                      href={"/contact-us"}
                      className={"flex items-center justify-start"}
                    >
                      Learn more <ChevronRight className={"size-4 ml-4"} />
                    </Link>
                  </Button>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          data-name={"cover-image large screen"}
          style={{ height: "calc(100vh - 74px)" }}
          className={"hidden md:block"}
        >
          <div className={"w-full h-full relative"}>
            <CldImage
              src={"media/img.png"}
              alt={"Header Image"}
              fill
              className={"object-cover"}
            />
            <div className={"overlay"}></div>
          </div>

          <div
            className={cn(
              " absolute md:top-[35%] lg:top-1/3 md:left-10 xl:left-20 z-1 2xl:left-48",
            )}
          >
            <div
              className={
                "flex flex-col gap-y-5 w-full md:w-[500px] lg:w-[700px] px-4"
              }
            >
              <Reveal>
                <h3
                  className={cn(
                    "text-3xl sm:text-5xl lg:text-7xl text-white font-extrabold",
                    textFont.className,
                  )}
                >
                  Educational tours for students
                </h3>
              </Reveal>
              <Reveal>
                <p
                  className={
                    "font-normal text-base sm:text-lg text-white w-full md:w-[490px] "
                  }
                >
                  Immersive learning experiences through multi-day trips to
                  historical, cultural, or natural sites.
                </p>
              </Reveal>
              <Reveal>
                <Magnetic>
                  <Button
                    className={
                      "w-full sm:w-[140px] bg-[#DC6400] hover:bg-[#DC6400]/70 transition-colors"
                    }
                  >
                    <Link
                      href={"/contact-us"}
                      className={"flex items-center justify-start"}
                    >
                      Learn more <ChevronRight className={"size-4 ml-4"} />
                    </Link>
                  </Button>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          data-name={"featured-cities"}
          className={
            "py-20 md:py-28 max-w-screen-2xl px-4 mx-auto flex flex-col gap-y-10 "
          }
        >
          <div className={"flex flex-col gap-y-4  items-center"}>
            <h2 className={"text-blue-500 font-medium text-2xl md:text-4xl"}>
              What We Offer
            </h2>
            <div className={"w-full sm:w-3/4  mx-auto"}>
              <p className={"text-center text-base md:text-lg"}>
                Edubest offers enriching World wide tours for children aged
                10-17, exploring landmarks like Disneyland, the British Museum,
                Eiffel tower, Cambridge, and many more. Trips combine cultural,
                historical, and educational experiences, fostering confidence
                and curiosity. Core values include excellence, equity, and
                empowerment, providing children with unforgettable journeys
                beyond their borders.
              </p>
            </div>
          </div>
          <div className={"flex flex-col gap-y-4  items-center"}>
            <h3 className={" font-medium text-2xl md:text-3xl"}>
              Featured Cities
            </h3>
            <div className={"w-full sm:w-3/4 lg:w-1/2 mx-auto"}>
              <p className={"text-center text-base md:text-lg"}>
                These destinations offer a mix of historical, cultural, and
                recreational experiences that can provide children with a broad
                and enriching perspective on the world.
              </p>
            </div>
          </div>
          <div className={"container lg:px-10 xl:px-14"}>
            <div className={"flex flex-wrap relative"}>
              <div className={"block w-full relative"}>
                <ul className={"cities-grid list-none"}>
                  {cities.map((city, index) => (
                    <CityCard
                      key={index}
                      image={city.image}
                      title={city.title}
                      description={city.description}
                      href={city.href}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={"w-full sm:w-3/4 mx-auto"}>
            <p className={"text-center text-base md:text-lg"}>
              These destinations offer a mix of historical, cultural, and
              recreational experiences that can provide children with a broad
              and enriching perspective on the UK.
            </p>
          </div>
          <div className={"w-full flex justify-center"}>
            <Magnetic>
              <Button
                className={
                  "w-4/5 sm:w-[140px]  bg-[#DC6400] hover:bg-[#DC6400]/70 transition-colors h-11 px-20"
                }
              >
                <Link
                  href={"/tour-packages"}
                  className={"flex items-center justify-center"}
                >
                  View more <ChevronRight className={"size-4 ml-4"} />
                </Link>
              </Button>
            </Magnetic>
          </div>
        </section>
        <section
          data-name={"gallery"}
          className={
            "pb-28 max-w-screen-2xl px-4 lg:px-14 mx-auto flex flex-col items-center gap-y-10  "
          }
        >
          <div className={"w-full text-center space-y-2"}>
            <h3 className={"text-blue-500 font-bold text-2xl md:text-4xl"}>
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
          <div className={"w-full flex justify-center"}>
            <Magnetic>
              <Button
                className={
                  "w-4/5 sm:w-[140px]  bg-[#DC6400] hover:bg-[#DC6400]/70 transition-colors h-11 px-20"
                }
              >
                <Link
                  href={"/gallery"}
                  className={"flex items-center justify-center"}
                >
                  View more <ChevronRight className={"size-4 ml-4"} />
                </Link>
              </Button>
            </Magnetic>
          </div>
        </section>
      </div>
    </>
  );
}
