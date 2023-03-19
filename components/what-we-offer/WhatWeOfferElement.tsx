interface IwhatWeOfferElement {
  index: number;
  title: string;
  description: string;
}

const WhatWeOfferElement = ({
  index,
  title,
  description,
}: IwhatWeOfferElement) => {
  return (
    <>
      <hr></hr>
      <div className="mt-8 mb-11 flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-center">
        <div className="flex mr-auto items-center justify-center h-24 w-24 rounded-full border border-white text-xl">
          <p>0{index + 1}</p>
        </div>
        <div className="flex-1 text-base lg:text-xl">
          <h4>{title}</h4>
          <p className="mt-12 font-labil text-lg xl:text-[32px] leading-5 md:leading-10">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default WhatWeOfferElement;
