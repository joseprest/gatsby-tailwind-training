import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { graphql } from "gatsby";
import lessionMapper from "../helpers/lessionMapper";
import CourseCard from "../components/CourseCard";
import Hero from "../components/Hero";
import SEO from "../components/layouts/SEO";

export default function category({ data }) {
  const category = data?.category?.frontmatter;
  const lessons = lessionMapper(data.category_contents);

  const siteUrl = data.site.siteMetadata.siteUrl;

  console.log(category);

  return (
    <>
      <SEO
        title={`${category?.title} | Timeflow Academy`}
        desc={category?.description}
        url={`${siteUrl}/categories/${category?.slug}`}
        ogImage={`${siteUrl}${category?.background_image}`}
      />
      <DefaultLayout>
        {category && (
          <Hero
            title={category?.title}
            subtitle={category?.subtitle}
            description={category?.description}
            background_color={category?.background_color}
            background_image={category?.background_image}
          />
        )}

        <div className="py-16">
          <div className="container px-5 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8">
              {lessons.data.map((lession, index) => (
                <CourseCard
                  course={lession}
                  key={index}
                  background_color={category?.background_color}
                  order={index + 1}
                  noSpacing
                />
              ))}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export const pageQuery = graphql`
  query ($category_slug: String) {
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
        title
        subtitle
        description
        background_color
        background_image
        heading_title
        slug
      }
    }

    category_contents: allMdx(
      filter: {
        fields: { source: { eq: "lessons" } }
        frontmatter: { category: { regex: $category_slug } }
      }
      limit: 5000
      sort: { fields: frontmatter___order }
    ) {
      totalCount
      nodes {
        frontmatter {
          title
          tocTitle
          slug
          category
          custom_excerpt
          section
          premium_content
        }
        excerpt
      }
    }
  }
`;
