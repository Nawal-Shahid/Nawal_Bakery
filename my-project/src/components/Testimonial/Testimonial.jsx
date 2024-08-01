import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialData = [
  {
    id: 1,
    name: "Amna",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/200/300/?blur=3",
  },
  {
    id: 2,
    name: "Abigail",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/200/300/?blur=2",
  },
  {
    id: 3,
    name: "Fatma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/200/300?grayscale",
  },
  {
    id: 4,
    name: "Shadya",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='py-14 mb-10'>
      <div className="container">
        {/* Header Section */}
        <div data-aos="fade-up" className="text-center mb-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonial
          </h1>
        </div>
        {/* Card */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data, index) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                  {/* Image section */}
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={`${data.name}'s testimonial`}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* Content section */}
                  <div className='flex flex-col items-center gap-4 '>
                    <p className="text-xs text-gray-500">{data.text}</p>
                    <h1 className="text-xl font-bold text-black/70 font-cursive">
                      {data.name}
                    </h1>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                </div>
                
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
