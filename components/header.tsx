import React from "react";
import HeaderLogo from "@/components/header-logo";
import Navigation from "@/components/navigation";

const Header = () => {
  return (
    <header className={"bg-white px-4 w-full py-3 lg:px-14 sticky  top-0 z-30"}>
      <div className={"max-w-screen-2xl mx-auto text-black"}>
        <div className={"flex items-center justify-between w-full"}>
          <HeaderLogo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
