import Feature from "@/components/feature";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import OurWords from "@/components/our-words";
import SocialPolicyLinks from "@/components/social-policy-links";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="mx-5 md:px-10 lg:mx-20">
        <Hero />
        <Feature />
        <OurWords />
        <SocialPolicyLinks />
      </div>
    </>
  );
};

export default PrivacyPolicy;
