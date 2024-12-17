import React from "react";
import Link from "next/link";
import CldImage from "@/components/cld-image";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <div className={"w-[75px] h-[75px] relative"}>
        <CldImage
          src={"media/logo.svg"}
          alt={"logo"}
          fill
          objectFit={"contain"}
        />{" "}
        <CldImage
          src={"media/logo.svg"}
          alt={"logo"}
          fill
          objectFit={"contain"}
        />
      </div>
    </Link>
  );
};

export default HeaderLogo;
