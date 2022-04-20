import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";
import { ArrowRight } from "react-feather";
import linearGradientFromArray from "../helpers/linearGradientFromArray";

export default function CourseCard({
  course,
  noSpacing = false,
  order = 1,
  background_color,
  moveToCategoryArchieve = false,
}) {
  return (
    <div
      className={classNames("flex flex-col", { "px-2 md:px-4": !noSpacing })}
    >
      <div className="relative flex mb-5">
        <div
          className={classNames("w-full h-48", {
            "pink-gradient": !background_color,
          })}
          style={{
            background: linearGradientFromArray(background_color),
          }}
        ></div>
        <span className="absolute text-white left-4 top-4">#{order}</span>

        {course?.premium_content && (
          <div className="absolute top-0 right-0 z-10 px-3 py-1 rounded-bl-lg premium-content">
            Membership Required
          </div>
        )}
      </div>
      <h2 className="mb-2 text-xl font-bold text-black hover:text-orange">
        <Link to={`/${course?.slug}`}>{course?.title}</Link>
      </h2>
      <p className="mb-4 text-grey-lite line-clamp-2">
        {Boolean(course?.custom_excerpt)
          ? course?.custom_excerpt
          : course?.excerpt}
      </p>
      <Link
        to={`/${
          moveToCategoryArchieve
            ? `categories/${course.category[0]}`
            : course?.slug
        }`}
        className="flex items-center text-orange"
      >
        View {moveToCategoryArchieve ? "lessons" : "lesson"}{" "}
        <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  );
}
