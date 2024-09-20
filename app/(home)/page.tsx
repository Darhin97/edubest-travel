import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const headingFont = localFont({ src: "../fonts/font.woff2" });

export default function Home() {
  return (
    <div className={"h-full w-full"}>
      <section className={"w-full h-full relative"}>
        <div className={"w-full h-full"}>
          <Image
            src={"/img.png"}
            alt={"Header Image"}
            fill
            className={"object-cover"}
          />
          <div className={"overlay"}></div>
        </div>

        <div className={cn(" absolute top-1/3  md:left-28 z-1")}>
          <div
            className={
              "flex flex-col gap-y-5 w-full md:w-[400px] lg:w-[600px] px-4"
            }
          >
            <h3
              className={cn(
                "text-3xl sm:text-5xl lg:text-7xl text-white ",
                headingFont.className,
              )}
            >
              Educational tours for students
            </h3>
            <p
              className={
                "font-normal text-base sm:text-lg text-white w-full md:w-[490px] "
              }
            >
              Immersive learning experiences through multi-day trips to
              historical, cultural, or natural sites.
            </p>
            <Button
              className={
                "w-full sm:w-[140px]  bg-[#DC6400] hover:bg-[#DC6400]/70 transition-colors"
              }
            >
              <Link
                href={"/contact-us"}
                className={"flex items-center justify-start"}
              >
                Learn more <ChevronRight className={"size-4 ml-4"} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className={"py-20 max-w-screen-2xl px-4 mx-auto"}>
        another section
      </section>
    </div>
  );
}
