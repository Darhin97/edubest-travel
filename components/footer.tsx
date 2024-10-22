"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, PhoneCall, Twitter } from "lucide-react";
import { TbBrandTiktok } from "react-icons/tb";
import { usePathname } from "next/navigation";
import Magnetic from "@/components/magnetic";

const Footer = () => {
  const pathname = usePathname();
  const contact = pathname === "/contact-us";
  return (
    <footer data-name={"footer"} className={"flex flex-col gap-y-10 "}>
      {!contact && (
        <div
          data-name={"request quote"}
          className={"w-full rounded-b-2xl md:rounded-b-[50px] bg-[#D4D5CF] "}
        >
          <div
            className={
              "max-w-screen-2xl px-4 lg:px-14 mx-auto flex flex-col py-10 gap-y-10 "
            }
          >
            <div
              className={
                "flex justify-center md:justify-between gap-4 lg:gap-8"
              }
            >
              <div
                className={"relative hidden md:block md:w-1/2 lg:w-3/5 h-48"}
              >
                <Image
                  src={"/phone.png"}
                  alt={"Image of a phone"}
                  fill
                  objectFit={"cover"}
                />
              </div>
              <div
                className={
                  "md:w-1/2 lg:w-2/5 space-y-8 flex flex-col items-center justify-center"
                }
              >
                <h3
                  className={
                    "text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-medium"
                  }
                >
                  Are you Intrigued?
                </h3>
                <div className={""}>
                  <Magnetic>
                    <Button
                      className={"bg-blue-500 hover:bg-blue-500/80 "}
                      size={"lg"}
                    >
                      <Link href={"/contact-us"}>Request a quote</Link>
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        data-name={"links and info"}
        className={" bg-black rounded-t-2xl md:rounded-t-[50px]"}
      >
        <div className={"max-w-screen-2xl px-4 lg:px-14 mx-auto  py-10"}>
          <div className={"w-full lg:w-[80%] mx-auto"}>
            <div
              className={
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.5fr,1fr,1fr] gap-y-6 gap-x-10"
              }
            >
              <div
                data-name={"logo and text"}
                className={"flex flex-col gap-y-2"}
              >
                <div className={"relative w-16 h-16"}>
                  <Image
                    src={"/white-logo.svg"}
                    alt={"White logo"}
                    fill
                    objectFit={"contain"}
                  />
                </div>
                <p className={"text-white"}>
                  Edubest offers enriching UK tours for children aged 10-17,
                  exploring cultural landmarks like the British Museum and
                  Edinburgh Castle, fostering confidence, curiosity, and growth
                  through educational experiences.
                </p>
              </div>
              <div
                data-name={"quick links"}
                className={"text-white flex flex-col  gap-y-5"}
              >
                <h5 className={"font-bold"}>Quick Links</h5>
                <ul className={"list-none space-y-1 "}>
                  <li
                    className={
                      "list-none text-left cursor-pointer hover:text-yellow-200 transition "
                    }
                  >
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li
                    className={
                      "list-none text-left cursor-pointer hover:text-yellow-200 transition "
                    }
                  >
                    <Link href={"/about-us"}>About Us</Link>
                  </li>
                  <li
                    className={
                      "list-none text-left cursor-pointer hover:text-yellow-200 transition "
                    }
                  >
                    <Link href={"/tour-packages"}>Tour packages</Link>
                  </li>
                  <li
                    className={
                      "list-none text-left cursor-pointer hover:text-yellow-200 transition "
                    }
                  >
                    <Link href={"/gallery"}>Gallery</Link>
                  </li>
                  <li
                    className={
                      "list-none text-left cursor-pointer hover:text-yellow-200 transition "
                    }
                  >
                    <Link href={"/contact-us"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div
                data-name={"contacts"}
                className={"text-white flex flex-col  gap-y-5"}
              >
                <h5 className={"font-bold"}>Contact Us</h5>
                <div>
                  <p className={"space-y-1"}>
                    <span className={"flex items-center"}>
                      <PhoneCall className={"size-4 mr-2"} /> +44 7988096492
                    </span>
                    <span className={"flex items-center"}>
                      <PhoneCall className={"size-4 mr-2"} />
                      +233 256024999
                    </span>
                    <span className={"flex items-center"}>
                      <Mail className={"size-4 mr-2"} />{" "}
                      admin@edubest-travel.co.uk
                    </span>
                  </p>
                  <div className={"flex gap-4 mt-4"}>
                    <span>
                      <Link
                        href={""}
                        className={
                          'cursor-pointer hover:text-yellow-200 transition "'
                        }
                      >
                        <Instagram className={"size-4 "} />
                      </Link>
                    </span>
                    <span>
                      <Link
                        href={""}
                        className={
                          'cursor-pointer hover:text-yellow-200 transition "'
                        }
                      >
                        <Twitter className={"size-4"} />
                      </Link>
                    </span>
                    <span>
                      <Link
                        href={""}
                        className={
                          'cursor-pointer hover:text-yellow-200 transition "'
                        }
                      >
                        <TbBrandTiktok className={"size-4"} />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
