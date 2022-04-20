import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { graphql } from "gatsby";
import PostCard from "../components/PostCard";
import Hero from "../components/Hero";
import SEO from "../components/layouts/SEO";

export default function blog({ data }) {
  const posts = data?.posts?.nodes;
  const meta = data?.meta?.siteMetadata;
  console.log(meta);
  return (
    <DefaultLayout>
      <SEO
        title="Blog | Timeflow Academy"
        url={`${meta.siteUrl}/blog`}
        desc={meta.description}
        ogImage={`${meta.siteUrl}/assets/img/dbt.png`}
      />
      <Hero
        title="Timeflow Blog"
        subtitle="Latest Thinking From The Timeflow Team"
        description=""
        background_color="#cf0808"
        background_image="/assets/img/dbt.png"
      />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8">
            {posts.map((post, index) => (
              <PostCard
                post={post}
                key={index}
                background_color={post.background_color}
                order={posts.length - index}
                noSpacing
              />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const query = graphql`
  query {
    posts: allMdx(
      filter: { fields: { source: { eq: "blog" } } }
      sort: { fields: frontmatter___order, order: DESC }
    ) {
      nodes {
        frontmatter {
          date_updated
          title
          excerpt
          background_color
        }
        id
        slug
        excerpt
      }
    }
    meta: site {
      siteMetadata {
        description
        title
        siteUrl
      }
    }
  }
`;
