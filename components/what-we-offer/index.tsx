import { whatWeOfferData } from "./WhatWeOffer";
import WhatWeOfferElement from "./WhatWeOfferElement";

const WhatWeOffer = () => {
  return (
    <>
      {whatWeOfferData.length > 0 &&
        whatWeOfferData.map(({ title, description }, index) => (
          <WhatWeOfferElement
            key={title}
            index={index}
            title={title}
            description={description}
          />
        ))}
      <hr className="mb-11"></hr>
    </>
  );
};

export default WhatWeOffer;
