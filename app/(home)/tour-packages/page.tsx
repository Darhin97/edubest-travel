import React from "react";
import Banner from "@/components/banner";
import CityCard from "@/components/city-card";
import { citiesInfo } from "@/data/data-info";

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
            Featured Cities
          </h2>
          <div className={"container lg:px-10 xl:px-14"}>
            <div className={"flex flex-wrap relative"}>
              <div className={"block w-full relative"}>
                <ul className={"cities-grid list-none"}>
                  {citiesInfo.map((city, index) => (
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
        </div>
      </section>
    </div>
  );
};

export default TourPackagesPage;
