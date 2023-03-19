import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import SocialPolicyLinks from "@/components/social-policy-links";
import WhatWeOffer from "@/components/what-we-offer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-5 md:px-10 lg:mx-20">
        <Hero />
        <WhatWeOffer />
        <SocialPolicyLinks />
      </div>
    </>
  );
}
