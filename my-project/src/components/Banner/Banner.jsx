import React from 'react';
import BannerImg from "../../assets/cake2.png";
import BgTexture from "../../assets/bgImage.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
    <span id="about"></span>
      <div style={bgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image Section */}
            <div data-aos="zoom-in">
              <img src={BannerImg} alt="" className="max-w-[430px] w-full mx-auto spin drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]" />
            </div>
            {/* Text content Section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-cursive">
                Hygienic & Healthy
              </h1>
              <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">
              Nawal's Bakery isn't just about traditional treats. The bakery is also known for its creative and innovative flavor combinations, which are sure to tantalize even the most adventurous palates. From matcha green tea cake to strawberry basil tarts, there's always something new and exciting to try.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                <div data-aos="fade-up" className="flex items-center gap-3">
                  <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                  <span>Premium Food</span>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-3">
                  <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
                  <span>Hot Food</span>
                </div>
                <div data-aos="fade-up" data-aos-delay="500" className="flex items-center gap-3">
                  <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                  <span>Fast Delivery</span>
                </div>
                </div>
                <div data-aos="slide-left" className='border-l-4 border-primary/50 pl-6 space-y-3'>
                  <h1 className='text-2xl font-semibold font-cursive'>A Community Hub</h1>
                  <p className='text-gray-500 text-sm'>
                    {" "}
                    Nawal's Bakery is more than just a place to grab a quick bite or pick up a few treats. It's a community hub, where friends and neighbors gather to catch up and share in the joy of good food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
