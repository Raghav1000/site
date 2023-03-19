import Link from "next/link";

const policyLinksData = [
  "Babel Agency SNC",
  "P. VAT 03648750044",
  "Privacy Policy",
  "Cookie Policy",
  "Credits",
];

const PolicyLinks = () => {
  return (
    <div className="flex flex-col lg:flex-row text-center justify-between mb-5">
      {policyLinksData.length > 0 &&
        policyLinksData.map((item) => (
          <div className="relative" key={item}>
            <Link
              href={"/privacy-policy"}
              className="flex flex-col gap-3 font-normal py-3 group"
            >
              <h4>{item}</h4>
              <hr className="absolute w-0 group-hover:transition-all group-hover:duration-300 group-hover:w-full bottom-0"></hr>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PolicyLinks;
