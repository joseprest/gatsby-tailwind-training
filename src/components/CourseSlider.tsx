import React from "react";
import Slider from "react-slick";
import CourseCard from "./CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseSlider = ({ data, limit = -1, card_background_color }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="relative -mx-2 md:-mx-4">
      <Slider {...settings}>
        {data.slice(0, limit).map((course, i) => (
          <CourseCard
            moveToCategoryArchieve={true}
            background_color={card_background_color}
            key={course.slug}
            course={course}
            order={i + 1}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CourseSlider;
