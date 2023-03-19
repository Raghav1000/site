import Link from "next/link";
import { navItemsData } from "./NavItemsData";

const NavItemsMobile = () => {
  return (
    <>
      <div className="flex flex-col mx-5 lg:ml-0 pt-14 lg:pt-0 lg:flex-row">
        {navItemsData.length > 0 &&
          navItemsData.map(({ title, link }) => (
            <div className="relative" key={link}>
              <hr className="h-1/2 absolute top-0 w-full"></hr>
              <Link
                href={link}
                className="flex flex-col my-5 gap-3 font-normal py-3 group"
              >
                <h4 className="font-labil text-3xl">{title}</h4>
                <hr className="absolute w-0 group-hover:transition-all group-hover:duration-300 W group-hover:w-full bottom-0"></hr>
              </Link>
            </div>
          ))}
        <hr className="h-1/2"></hr>
      </div>
    </>
  );
};

export default NavItemsMobile;
