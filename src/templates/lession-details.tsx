import React, { useContext } from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import DefaultLayout from "../components/layouts/DefaultLayout";
import TableOfContents from "../components/TableOfContents";
import classNames from "classnames";
import linearGradientFromArray from "../helpers/linearGradientFromArray";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import styled from "@emotion/styled";
import CopyToClipboard from "../components/CopyToClipboard";
import { AuthContext } from "../contexts/AuthContext";
import SEO from "../components/layouts/SEO";

deckDeckGoHighlightElement();

const TopRibbon = ({ data, background_color }) => (
  <>
    <div
      className={classNames("sticky top-24 z-30 py-5 text-white", {
        "pink-gradient": !background_color,
      })}
      style={{ background: linearGradientFromArray(background_color) }}
    >
      <div className="container relative items-center h-full px-5 mx-auto">
        <div
          className={classNames(
            "lg:grid items-center lg:grid-cols-12 lg:gap-20 relative lg:px-0",
            {
              "px-12": !(data.category[0] === "general"),
            }
          )}
        >
          <div className="lg:col-span-3">
            {!(data.category[0] === "general") && (
              <Link
                className="absolute left-0 flex flex-wrap items-center justify-center w-10 h-10 transform -translate-y-1/2 border border-white rounded-full lg:transform-none lg:translate-y-0 lg:relative top-1/2 lg:top-auto lg:left-auto lg:border-0 border-opacity-20 lg:w-auto lg:h-auto lg:justify-start"
                to={`/categories/${data.category[0]}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lg:mr-2"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span className="hidden capitalize lg:block">
                  All {data.category[0]} Lessons
                </span>
              </Link>
            )}
          </div>

          <h1 className="text-2xl font-bold text-center lg:text-left lg:col-span-8">
            {data.title}
          </h1>
        </div>
      </div>
    </div>
  </>
);

const StyledPaginationLink = styled(Link)`
  &:hover {
    background: ${(props) => linearGradientFromArray(props.background_color)};
  }

  &[disabled] {
    pointer-events: none;
    cursor: not-allowed;
    color: #ccc;
  }
`;

const ContentPaginator = ({ data, background_color }) => (
  <div className="flex justify-between">
    <StyledPaginationLink
      disabled={!data.prev}
      background_color={background_color}
      className={classNames(
        "py-4 text-sm px-14 hover:text-white font-semibold no-underline uppercase transition duration-150 border rounded-md",
        {
          "hover:border-orange hover:bg-orange ": !Boolean(background_color),
        }
      )}
      to={`${data.prev ? `/${data.prev}` : `/#`}`}
    >
      prev
    </StyledPaginationLink>

    <StyledPaginationLink
      disabled={!data.next}
      background_color={background_color}
      className={classNames(
        "py-4 text-sm px-14 hover:text-white font-semibold no-underline uppercase transition duration-150 border rounded-md",
        {
          "hover:border-orange hover:bg-orange ": !Boolean(background_color),
        }
      )}
      to={`${data.next ? `/${data.next}` : `/#`}`}
    >
      next
    </StyledPaginationLink>
  </div>
);

const PremiumCard = ({ category, visible = false }) => {
  if (!visible) return null;

  return (
    <div
      className={classNames(
        "w-full rounded-lg flex items-center py-10 text-center flex-col mb-10 px-6",
        { "pink-gradient": !category?.background_color }
      )}
      style={{
        background: linearGradientFromArray(category?.background_color),
      }}
    >
      <h2 className="text-2xl font-bold text-white mb-7">
        This Post Requires A Membership
      </h2>
      <Link
        className="px-10 py-3 bg-white text-primary rounded-xl mb-7"
        to="/auth/register"
      >
        Sign Up
      </Link>
      <p className="text-white">
        Already A Member?{" "}
        <Link to="/auth/login" className="hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
};

const LessionDetails = ({ data, pageContext }) => {
  const lession = { ...data.lession };
  const category = { ...data.category?.frontmatter };
  let { isAuthenticated } = useContext(AuthContext);
  const siteUrl = data.site.siteMetadata.siteUrl;
  const categoryName = lession.frontmatter.category[0];
  return (
    <>
      <SEO
        title={`${lession.frontmatter.title} | Timeflow Academy`}
        url={`${siteUrl}/${lession.frontmatter.slug}`}
        desc={
          lession.frontmatter.custom_excerpt
            ? lession.frontmatter.custom_excerpt
            : lession.excerpt
        }
        ogImage={`${
          categoryName === "general"
            ? `${siteUrl}/assets/img/dbt.png`
            : `${siteUrl}${category?.background_image}`
        }`}
      />
      <DefaultLayout>
        <TopRibbon
          data={lession.frontmatter}
          background_color={category.background_color}
        />

        <div className="container px-5 mx-auto my-12">
          <div className="items-start lg:grid lg:grid-cols-12 lg:gap-20 ">
            <div className="sticky hidden col-span-3 top-44 lg:block">
              <TableOfContents toc={lession.tableOfContents.items} />
              <div className="my-6">
                <ContentPaginator
                  data={pageContext.pagination}
                  background_color={category.background_color}
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <article
                className={classNames("mb-8 prose prose-lg max-w-none", {
                  "protected-content relative overflow-hidden":
                    !isAuthenticated && lession.frontmatter.premium_content,
                })}
              >
                <MDXProvider
                  components={{
                    pre: CopyToClipboard,
                  }}
                >
                  <MDXRenderer>{lession.body}</MDXRenderer>
                </MDXProvider>
              </article>
              {!isAuthenticated && (
                <PremiumCard
                  category={category}
                  visible={lession.frontmatter.premium_content}
                />
              )}

              <div className="lg:hidden">
                <ContentPaginator
                  data={pageContext.pagination}
                  background_color={category.background_color}
                />
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!, $category_slug: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }

    category: mdx(
      slug: { regex: $category_slug }
      fields: { source: { eq: "categories" } }
    ) {
      frontmatter {
        background_color
        background_image
      }
    }

    lession: mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        premium_content
        slug
        custom_excerpt
      }
      excerpt(pruneLength: 160)
      body
      tableOfContents
    }
  }
`;

export default LessionDetails;
