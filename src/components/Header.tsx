import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "react-feather";
import Logo from "./logo";
import { MobileNav } from "./MobileNav";
import UserProfile from "./UserProfile";

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
          not_show_in_menu
        }
      }
    }
  }
`;

const Header = () => {
  const { categories } = useStaticQuery(coursesQyery);
  const courses = categories.nodes.map((category) => category.frontmatter);

  const [isOpen, setIsOpen] = useState(false);

  const openMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.querySelector("body").classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="header-area sticky top-0 z-50 bg-white w-full">
        <div className="w-full lg:container mx-auto px-5">
          <div className="flex flex-wrap items-center border-b border-gray-100 py-7">
            <div className="mr-12">
              <Logo />
            </div>
            <div className="flex-1 text-right flex-wrap flex justify-end lg:hidden">
              <div
                className={classNames(
                  "menu-bar flex items-center justify-center flex-col w-12 h-12 rounded-full border-2 border-border-default",
                  {
                    active: isOpen,
                  }
                )}
                onClick={openMobileMenu}
              >
                <span className="bar-icon w-7 h-0.5 rounded block"></span>
                <span className="bar-icon w-7 h-0.5 rounded block"></span>
                <span className="bar-icon w-7 h-0.5 rounded block"></span>
              </div>
            </div>

            <div className="flex-1 lg:flex hidden">
              <ul className="flex flex-wrap space-x-5">
                <li className="relative">
                  <Menu>
                    <Menu.Button className="flex items-center cursor-pointer text-grey-lite hover:text-primary focus-within:outline-none">
                      Our Courses <ChevronDown size={20} />
                    </Menu.Button>
                    <Transition
                      className="absolute z-50 w-72 mt-4 px-6 py-3 bg-white divide-y divide-gray-100 rounded-md shadow-lg top-full ring-1 ring-black ring-opacity-5 focus:outline-none"
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items as="ul" className="focus-within:outline-none">
                        {courses
                          .filter((course) => !course?.not_show_in_menu)
                          .map((course) => (
                            <Menu.Item
                              key={course.slug}
                              as="li"
                              className="py-1"
                            >
                              {({ active }) => (
                                <Link
                                  className={classNames({
                                    "text-grey-lite": !active,
                                    "text-orange font-medium": active,
                                  })}
                                  to={`/categories/${course.slug}`}
                                >
                                  {course.title}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
                <li>
                  <Link
                    to="/about"
                    activeClassName="active"
                    className="text-grey-lite hover:text-orange"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/running-training-environment"
                    className="text-grey-lite hover:text-orange"
                  >
                    Training Virtual Machine
                  </Link>
                </li>

                <li>
                  <Link to="/blog" className="text-grey-lite hover:text-orange">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-grey-lite hover:text-orange"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:flex hidden items-center">
              {/* <div className="flex flex-wrap mr-6 cursor-pointer text-grey-lite">
                    <Search className="mr-3" />
                    Search
                </div> */}
              <UserProfile />
            </div>
          </div>
        </div>
      </div>
      <MobileNav isMenuOpen={isOpen} menuOpen={openMobileMenu} />
    </>
  );
};

export default Header;
