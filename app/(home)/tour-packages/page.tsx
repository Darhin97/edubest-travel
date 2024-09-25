import React from "react";
import Banner from "@/components/banner";
import Image from "next/image";

const TourPackagesPage = () => {
  return (
    <div>
      <section data-name={"tour-packages"}>
        <Banner />

        <div className={"py-20 max-w-screen-2xl px-4 mx-auto lg:px-14"}>
          <h2
            className={
              "text-blue-500 font-bold text-xl md:text-2xl text-center mb-10"
            }
          >
            Tour Packages
          </h2>
          <div className={"flex flex-col gap-y-10 md:gap-y-16 xl:gap-y-24"}>
            <div
              className={"grid grid-cols-1 md:grid-cols-2 gap-x-10 sm:gap-y-4"}
            >
              <div className={"relative w-full h-[400px]"}>
                <Image
                  src={"/package1.png"}
                  alt={"package image"}
                  fill
                  objectFit={"contain"}
                  className={"object-center md:object-right"}
                />
              </div>
              <div
                className={
                  "w-full sm:w-[70%] sm:mx-auto md:mx-0 md:w-full lg:w-[85%] xl:w-[70%] flex flex-col justify-end"
                }
              >
                <div className={"text-black flex flex-col gap-y-4  "}>
                  <div className={"space-y-1"}>
                    <p className={"text-lg lg:text-xl font-medium"}>Name:</p>
                    <span className={"text-sm lg:text-base"}>
                      The London Eye, The British Museum, Buckingham Palace
                    </span>
                  </div>
                  <div className={"space-y-1"}>
                    <p className={"text-lg lg:text-xl font-medium"}>
                      Attractions:
                    </p>
                    <span className={"text-sm lg:text-base"}>
                      Explore the United Kingdom
                    </span>
                  </div>{" "}
                  <div className={"space-y-1"}>
                    <p className={"text-lg lg:text-xl font-medium"}>Price:</p>
                    <span className={"text-sm lg:text-base"}>GBP 2,000.00</span>
                  </div>
                  <div className={"space-y-1"}>
                    <p className={"text-lg lg:text-xl font-medium"}>Date:</p>
                    <span className={"text-sm lg:text-base"}>
                      1st December, 2024 to 12th January 2025
                    </span>
                  </div>
                  <div className={"space-y-1"}>
                    <p className={"text-lg lg:text-xl font-medium"}>
                      Description:
                    </p>
                    <span className={"text-sm lg:text-base"}>
                      The British Museum: Explore ancient civilizations with
                      exhibits like the Rosetta Stone and Egyptian mummies.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"grid grid-cols-1 md:grid-cols-2 gap-x-10 sm:gap-y-4"}
            >
              <div className={"relative w-full h-[400px] md:col-start-2"}>
                <Image
                  src={"/package2.png"}
                  alt={"package image"}
                  fill
                  objectFit={"contain"}
                  className={"object-center md:object-left"}
                />
              </div>
              <div
                className={
                  "w-full sm:w-[70%] sm:mx-auto md:w-full md:mr-0 lg:w-[85%] xl:w-[70%] flex flex-col justify-end md:col-start-1 md:row-start-1"
                }
              >
                <div className={"text-black flex flex-col gap-y-4  "}>
                  <div className={"space-y-1"}>
                    <p className={"text-lg lg:text-xl font-medium"}>Name:</p>
                    <span className={"text-sm lg:text-base"}>
                      The London Eye, The British Museum, Buckingham Palace
                    </span>
                  </div>
                  <div className={"space-y-1"}>
                    <p className={"text-lg lg:text-xl font-medium"}>
                      Attractions:
                    </p>
                    <span className={"text-sm lg:text-base"}>
                      Explore the United Kingdom
                    </span>
                  </div>{" "}
                  <div className={"space-y-1"}>
                    <p className={"text-lg lg:text-xl font-medium"}>Price:</p>
                    <span className={"text-sm lg:text-base"}>GBP 2,000.00</span>
                  </div>
                  <div className={"space-y-1"}>
                    <p className={"text-lg lg:text-xl font-medium"}>Date:</p>
                    <span className={"text-sm lg:text-base"}>
                      1st December, 2024 to 12th January 2025
                    </span>
                  </div>
                  <div className={"space-y-1"}>
                    <p className={"text-lg lg:text-xl font-medium"}>
                      Description:
                    </p>
                    <span className={"text-sm lg:text-base"}>
                      The British Museum: Explore ancient civilizations with
                      exhibits like the Rosetta Stone and Egyptian mummies.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourPackagesPage;
