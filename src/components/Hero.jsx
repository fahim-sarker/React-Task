import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="lg:py-60 py-10 bg-hero bg-center bg-cover lg:px-0 px-5 relative after:absolute after:top-0 after:left-0 after:content-[''] after:bg-black after:h-full after:w-full after:opacity-50">
        <div className="container mx-auto z-40 relative">
          <h2 className="lg:text-[45px] text-[14px] lg:pb-0 pb-2 font-pops font-semibold flex justify-center text-center text-white animate-spin">
            We Deliver Parcel on Time with no Hassle.
          </h2>
          <p className="lg:text-[20px] text-[12px] font-pops font-normal text-center lg:px-80 px-5 text-white animate-spin">
            Steadfast courier is a leading courier service company in
            Bangladesh dedicated to delivering reliable and efficient e-
            commerce logistics solutions in time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;