import React from "react";
import Banner from "@/components/banner";
import ContactForm from "@/components/contact-form";

import { FaSquarePhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { Transition } from "@/components/transition";

const ContactUsPage = () => {
  return (
    <Transition>
      <Banner />
      <div className={"py-28 max-w-screen-2xl px-4 mx-auto lg:px-14"}>
        <div
          className={
            "p-4 md:px-10 py-10 xl:py-10 xl:px-20 w-full md:w-4/5  mx-auto bg-[#EFEFEF] rounded-lg"
          }
        >
          <div
            className={
              "grid grid-cols-1 lg:grid-cols-[1.9fr,4fr] gap-y-10 gap-x-10 "
            }
          >
            <div className={"flex flex-col justify-between gap-y-4  lg:py-10 "}>
              <div className={"space-y-2 w-full text-center lg:text-start"}>
                <h4 className={"text-4xl text-blue-500 font-medium"}>
                  Let&apos;s Talk
                </h4>
                <p>Ask us anything</p>
              </div>
              <div
                className={
                  " flex flex-col sm:flex-row  gap-y-4 sm:space-x-4 items-center justify-center lg:flex-col lg:gap-y-0 lg:items-start lg:space-x-0"
                }
              >
                <span className={"flex items-center"}>
                  <FaSquarePhone className={"size-5 mr-2 text-blue-500"} /> +44
                  4443 44334
                </span>
                <span className={"flex items-center"}>
                  <IoMailSharp className={"size-5 mr-2 text-blue-500"} />
                  info@edubest.com
                </span>
              </div>
            </div>
            <div className={"w-full "}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ContactUsPage;
