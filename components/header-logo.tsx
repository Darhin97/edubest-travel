import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <div className={""}>
        <Image src={"/logo.svg"} alt={"logo"} width={75} height={75} />
      </div>
    </Link>
  );
};

export default HeaderLogo;
