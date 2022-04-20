import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";
import { ArrowRight } from "react-feather";
import linearGradientFromArray from "../helpers/linearGradientFromArray";

export default function PostCard({
  post,
  noSpacing = false,
  order = 1,
  background_color,
}) {
  return (
    <div className={classNames("flex flex-col", { "px-4": !noSpacing })}>
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
      </div>
      <h2 className="mb-2 text-xl font-bold text-black hover:text-orange">
        <Link to={`/blog/${post?.slug}`}>{post?.frontmatter?.title}</Link>
      </h2>
      <p className="mb-4 text-grey-lite line-clamp-2">
        {post?.frontmatter?.excerpt
          ? post?.frontmatter?.excerpt
          : post?.excerpt}
      </p>
      <Link
        to={`/blog/${post?.slug}`}
        className="flex items-center text-orange"
      >
        View post
        <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  );
}
