import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center text-center gap-4 my-56">
      <h2 className="font-labil text-5xl leading-[57px]">
        left <br /> to tell.
      </h2>
      <div className="relative w-fit">
        <Link href={"/"} className="flex flex-col gap-3 font-normal py-3 group">
          <h4>WRITING</h4>
          <hr className="absolute group-hover:transition-all group-hover:duration-300  group-hover:w-0 w-full bottom-0"></hr>
        </Link>
      </div>
      <div className="flex gap-5 mt-6">
        <Link href={"https://instagram.com"}>
          <Image
            src="/images/facebook.svg"
            alt="instagram-icon"
            height={17.5}
            width={24}
          />
        </Link>
        <Link href={"https://instagram.com"}>
          <Image
            src="/images/instagram.svg"
            alt="instagram-icon"
            height={17.5}
            width={24}
          />
        </Link>
        <Link href={"https://twitter.com"}>
          <Image
            src="/images/twitter.png"
            alt="instagram-icon"
            height={17.5}
            width={24}
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
