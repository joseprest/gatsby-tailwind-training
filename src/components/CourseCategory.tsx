import classNames from "classnames";
import { Link } from "gatsby";
import { kebabCase } from "lodash";
import React from "react";
import CourseSlider from "./CourseSlider";

export default function CourseCategory(props: {
  background: string;
  section_name: string;
  category_name: string;
  card_background_color: string;
  contents: any;
  limit: number;
}) {
  if (!props.contents.total) return null;

  return (
    <div className={classNames("py-10 md:pt-16 md:pb-20", props.background)}>
      <div className="container mx-auto px-5">
        <div className="flex md:flex-wrap items-center mb-8">
          <h2 className="mr-8 text-2xl font-bold text-black">
            {props.section_name}
          </h2>
          <div className="px-5 py-1 text-grey-lite rounded-2xl bg-grey-lite bg-opacity-10 whitespace-nowrap hidden md:block">
            {props.contents.total} lessons
          </div>
        </div>

        <CourseSlider
          card_background_color={props.card_background_color}
          limit={props.limit}
          data={props.contents.data}
        />

        <div className="relative mt-10 md:mt-20 text-center border-b border-gray">
          <div
            className={classNames(
              "absolute transform -translate-x-2/4 -translate-y-2/4 inline-flex px-6",
              props.background
            )}
          >
            <Link
              to={`/categories/${kebabCase(props.category_name)}`}
              className="inline-flex px-5 md:px-12 py-3 text-white uppercase rounded-md bg-orange text-sm md:text-base whitespace-nowrap"
            >
              View all
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
