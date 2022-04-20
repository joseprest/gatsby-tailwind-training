import classNames from "classnames";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import { User, X } from "react-feather";
import { AuthContext } from "../contexts/AuthContext";

export const MobileNav = ({ isMenuOpen = false, menuOpen }) => {
  const { categories } = useStaticQuery(coursesQyery);
  const courses = categories.nodes.map((category) => category.frontmatter);
  let { isAuthenticated, user } = useContext(AuthContext);
  return (
    <div
      className={classNames(
        "flex-col lg:hidden fixed top-0 w-full h-screen z-50 bg-white",
        {
          hidden: !isMenuOpen,
          flex: isMenuOpen,
        }
      )}
    >
      <div className="flex items-center justify-between w-full px-5 py-8 border-b border-grey-lite border-opacity-20">
        <Link
          to={isAuthenticated ? "/account/profile" : "/auth/login"}
          className="flex items-center"
        >
          <div className="flex items-center justify-center mr-3 rounded-full w-7 h-7 bg-grey-lite">
            {user?.avatar ? (
              <img src={`${user?.avatar}?${Date.now()}`} />
            ) : (
              <User size={20} color="#fff" />
            )}
          </div>
          <span className="text-black">My Account</span>
        </Link>
        <div className="flex items-center close-icon" onClick={menuOpen}>
          <X size={30} />
        </div>
      </div>
      <div className=" bg-grey-500 py-6 px-5">
        <h4 className=" text-black text-opacity-50 text-sm mb-5">
          Our Courses
        </h4>
        <ul className="flex flex-col text-black font-bold text-lg space-y-4">
          {courses.map((course) => (
            <li key={course.slug} className="">
              <Link to={`/categories/${course.slug}`}>{course.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex flex-col text-lg px-5 w-full pt-5">
        <li className="border-b border-grey-lite border-opacity-20 py-4">
          <Link className="block" to="/about">
            About Us
          </Link>
        </li>
        <li className="border-b border-grey-lite border-opacity-20 py-4">
          <Link className="block" to="/running-training-environment">
            Training Virtual Machine
          </Link>
        </li>
        <li className="border-b border-grey-lite border-opacity-20 py-4">
          <Link className="block" to="/blog">
            Blog
          </Link>
        </li>
        <li className="border-b border-grey-lite border-opacity-20 py-4">
          <Link className="block" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

const coursesQyery = graphql`
  {
    categories: allMdx(
      filter: { fields: { source: { eq: "categories" } } }
      sort: { fields: frontmatter___order }
    ) {
      totalCount
      nodes {
        frontmatter {
          title
          subtitle
          description
          slug
          background_color
          order
        }
      }
    }
  }
`;
