import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import DefaultLayout from "../components/layouts/DefaultLayout";
import TableOfContents from "../components/TableOfContents";
import classNames from "classnames";
import linearGradientFromArray from "../helpers/linearGradientFromArray";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
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
        <div className="relative items-center px-12 lg:grid lg:grid-cols-12 lg:gap-20 lg:px-0">
          <div className="lg:col-span-3">
            <Link
              className="absolute left-0 flex flex-wrap items-center justify-center w-10 h-10 transform -translate-y-1/2 border border-white rounded-full lg:transform-none lg:translate-y-0 lg:relative top-1/2 lg:top-auto lg:left-auto lg:border-0 border-opacity-20 lg:w-auto lg:h-auto lg:justify-start"
              to="/blog"
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
              <span className="hidden capitalize lg:block">All posts</span>
            </Link>
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
        "py-4 text-sm px-14 hover:text-white font-semibold no-underline uppercase transition duration-150 border rounded-sm",
        {
          "hover:border-orange hover:bg-orange ": !Boolean(background_color),
        }
      )}
      to={`/${data.prev}`}
    >
      prev
    </StyledPaginationLink>

    <StyledPaginationLink
      disabled={!data.next}
      background_color={background_color}
      className={classNames(
        "py-4 text-sm px-14 hover:text-white font-semibold no-underline uppercase transition duration-150 border rounded-sm",
        {
          "hover:border-orange hover:bg-orange ": !Boolean(background_color),
        }
      )}
      to={`/${data.next}`}
    >
      next
    </StyledPaginationLink>
  </div>
);

const PostDetails = ({ data, pageContext }) => {
  
  const { post } = data;

  var image;

  // if( !post.frontmatter ) {
  //     console.log( "Null frontmatter ")
  //     console.log( post );
  //     return;
  // }
  // else  
  //   image = getImage(post.frontmatter.featured_image);
  
  return (
    <>
      {
        post && (
          <DefaultLayout>
            <SEO
              title={`${post.frontmatter?.title} | Timeflow Academy`}
              url={`${data?.site?.siteMetadata?.siteUrl}/${post.frontmatter?.slug}`}
              desc={
                post.frontmatter?.excerpt ? post.frontmatter?.excerpt : post.excerpt
              }
              ogImage={`${data?.site?.siteMetadata?.siteUrl}/assets/img/dbt.png`}
            />
            <TopRibbon
              data={post.frontmatter}
              background_color={post.frontmatter?.background_color}
            />

            <div className="container px-5 mx-auto my-12">
              <div className="items-start gap-20 lg:grid lg:grid-cols-12 ">
                <div className="sticky hidden col-span-3 top-44 lg:block">
                  <TableOfContents toc={post.tableOfContents.items} />
                </div>
                <div className="lg:col-span-8">
                  <div className="mb-10">
                    {/* <GatsbyImage
                      image={image}
                      alt={post.frontmatter?.featured_image_alt}
                    /> */}
                  </div>
                  <article className="mb-8 prose prose-lg max-w-none">
                    <MDXRenderer>{post.body}</MDXRenderer>
                  </article>
                </div>
              </div>
            </div>
          </DefaultLayout>
        )
      }
    </>
  );
};

export const query = graphql`
  query ($slug: String) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    post: mdx(slug: { eq: $slug }) {
      body
      tableOfContents
      excerpt
      frontmatter {
        date_updated
        title
        background_color
        slug
        excerpt
      }
    }
  }
`;

export default PostDetails;
