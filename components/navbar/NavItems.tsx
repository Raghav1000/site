import Link from "next/link";
import { navItemsData } from "./NavItemsData";

const NavItems = () => {
  return (
    <>
      {navItemsData.length > 0 &&
        navItemsData.map(({ title, link }) => (
          <div className="relative" key={link}>
            <Link
              href={link}
              className="flex flex-col gap-3 font-normal py-3 group"
            >
              <h4>{title}</h4>
              <hr className="absolute w-0 group-hover:transition-all group-hover:duration-300 group-hover:w-full bottom-0"></hr>
            </Link>
          </div>
        ))}
    </>
  );
};

export default NavItems;
