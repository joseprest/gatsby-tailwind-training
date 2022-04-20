import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql, Link, useStaticQuery } from "gatsby";
import classNames from "classnames";
import linearGradientFromArray from "../helpers/linearGradientFromArray";

const homeSliderQuery = graphql`
  {
    slides: allMdx(
      filter: { fields: { source: { eq: "home-slider" } } }
      sort: { fields: frontmatter___order }
    ) {
      totalCount
      nodes {
        frontmatter {
          title
          subtitle
          description
          link
          background_color
          image
          order
        }
      }
    }
  }
`;

const Slide = ({
  title,
  subtitle,
  description,
  slug,
  background_color,
  image,
}) => {
  return (
    <div
      className={classNames("flex flex-wrap px-40", {
        "pink-gradient": !background_color,
      })}
      style={{ background: linearGradientFromArray(background_color) }}
    >
      <div className="w-1/2 py-16">
        <h2 className="mb-3 text-4xl font-bold text-white uppercase ">
          {title}
        </h2>
        <h4 className="mb-4 text-2xl font-medium text-white">{subtitle}</h4>
        <p className="text-white">{description}</p>
        <Link
          to={`/categories/${slug}`}
          className="inline-flex px-5 py-2 mt-6 bg-white rounded-md text-orange"
        >
          Learn More
        </Link>
      </div>
      <div className="w-1/2">
        <img src="/assets/img/cover.png" alt={title} />
      </div>
    </div>
  );
};

const HomeCarousel = () => {
  const data = useStaticQuery(homeSliderQuery);

  const slides = data?.slides.nodes.map((slide) => slide.frontmatter);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="md:mt-10 md:pb-10">
      <div className="w-full mx-auto lg:container">
        <div className="relative cover-slider">
          <Slider {...settings}>
            <div
              className={classNames(
                "flex flex-wrap px-10 lg:px-10 home-cover "
              )}
            >
              <div className="w-full py-16 md:w-3/5">
                <h1 className="mb-3 text-4xl font-bold text-white">
                  Hands On Training For Data Engineers
                </h1>
                <p className="mb-3 text-white">
                  <a href="http://timeflow.systems/">Timeflow</a> Academy is an
                  online, hands-on platform for learning about Data Engineering
                  using open source and leading cloud native platforms including
                  DBT, Clickhouse, Snowflake, Kafka, Spark and Airflow.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
