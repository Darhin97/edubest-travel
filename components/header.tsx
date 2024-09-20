import React from "react";
import HeaderLogo from "@/components/header-logo";
import Navigation from "@/components/navigation";

const Header = () => {
  return (
    <header className={"bg-white px-4 py-3 lg:px-14 sticky top-0 z-20"}>
      <div className={"max-w-screen-2xl mx-auto text-black"}>
        <div className={"flex items-center justify-between"}>
          <HeaderLogo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
