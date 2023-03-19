import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavItems from "./NavItems";
import clsx from "clsx";
import NavItemsMobile from "./NavItemsMobile";

const Navbar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState<boolean>(false);
  return (
    <div className="bg-[#232221] fixed w-screen z-[99] lg:sticky top-0 h-max lg:flex lg:items-center lg:justify-between py-8 lg:px-20">
      <div className="flex justify-between px-5">
        <Link href="/">
          <h3 className="text-lg font-normal leading-6 tracking-[11px]">
            BABEL
          </h3>
          <hr className="w-[90%]"></hr>
        </Link>

        <div className="flex items-center lg:hidden">
          <Image
            src="/images/hamburger.png"
            onClick={() => setToggleMobileNav(!toggleMobileNav)}
            alt="hamburger"
            height={15}
            width={20}
          />
        </div>
      </div>

      <div
        className={clsx(
          "fixed w-full duration-700 ease-out",
          toggleMobileNav ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="z-50 w-screen lg:hidden bg-[#232221] h-screen sc">
          <div className="h-full w-full">
            <NavItemsMobile />
          </div>
        </div>
      </div>

      <div className="gap-10 hidden lg:flex">
        <NavItems />
      </div>
    </div>
  );
};

export default Navbar;
