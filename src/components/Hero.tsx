import { Link } from "gatsby";
import React from "react";
import { ArrowLeft } from "react-feather";
import backgroundImage from "../helpers/backgroundImage";
import linearGradientFromArray from "../helpers/linearGradientFromArray";

const Hero = ({
  title,
  subtitle,
  description,
  background_color,
  background_image,
}) => {
  return (
    <div
      className="flex flex-wrap category-cover"
      style={{
        background: background_image
          ? backgroundImage(background_image)
          : linearGradientFromArray(background_color),
      }}
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap justify-between">
          <div className="relative flex flex-col justify-center text-center md:text-left w-full md:w-1/2 py-20 md:py-32 md:pr-8">
            <div className="absolute text-white top-4">
              <Link to="/" className="flex flex-wrap">
                <ArrowLeft className="mr-2" /> All Courses
              </Link>
            </div>
            <h1 className="mb-3 text-4xl font-bold text-white uppercase">
              {title}
            </h1>
            <h4 className="mb-4 text-2xl font-medium text-white">{subtitle}</h4>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
