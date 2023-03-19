import { featureData } from "./Feature";

const Feature = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {featureData.length > 0 &&
        featureData.map(({ description, title }) => (
          <div
            className="flex flex-col p-12 justify-between bg-white lg:w-[390px] h-80"
            key={title}
          >
            <h4 className="text-black">{description}</h4>
            <p className="text-black font-labil text-2xl leading-7">{title}</p>
          </div>
        ))}
    </div>
  );
};

export default Feature;
