import * as React from "react";
import { graphql } from "gatsby";
import CourseCategory from "../components/CourseCategory";
import DefaultLayout from "../components/layouts/DefaultLayout";
import lessionMapper from "../helpers/lessionMapper";
import HomeCarousel from "../components/HomeCarousel";
import Authenticated from "../components/layouts/Authenticated";
import SEO from "../components/layouts/SEO";
import { Preloader } from "../components/Preloader";

// test
const IndexPage = ({ data }) => {
  const dbt = lessionMapper(data.dbt);
  const clickhouse = lessionMapper(data.clickhouse);
  const snowflake = lessionMapper(data.snowflake);
  const kafka = lessionMapper(data.kafka);
  const spark = lessionMapper(data.spark);

  const dbt_category = data?.dbt_category?.frontmatter;
  const clickhouse_category = data?.clickhouse_category?.frontmatter;
  const snowflake_category = data?.snowflake_category?.frontmatter;
  const kafka_category = data?.kafka_category?.frontmatter;
  const spark_category = data?.spark_category?.frontmatter;

  React.useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);
  return (
    <>
      <Preloader />
      <SEO
        url={data?.site?.siteMetadata?.siteUrl}
        title={data?.site?.siteMetadata?.title}
        desc={data?.site?.siteMetadata?.description}
        ogImage={`${data?.site?.siteMetadata?.siteUrl}/assets/img/home.png`}
      />
      <DefaultLayout>
        <HomeCarousel />
        <CourseCategory
          section_name="DBT For Data Engineers"
          category_name="dbt"
          background={"bg-grey-500"}
          contents={dbt}
          card_background_color={dbt_category?.background_color}
          limit={20}
        />
        <CourseCategory
          section_name="Kafka For Data Engineers"
          category_name="kafka"
          background={"bg-grey-500"}
          contents={kafka}
          card_background_color={kafka_category?.background_color}
          limit={20}
        />
        <CourseCategory
          section_name="Clickhouse For Data Engineers"
          category_name="clickhouse"
          background={"bg-grey-500"}
          contents={clickhouse}
          card_background_color={clickhouse_category?.background_color}
          limit={20}
        />
        <CourseCategory
          section_name="Snowflake For Data Engineers"
          category_name="snowflake"
          background={"bg-grey-500"}
          contents={snowflake}
          card_background_color={snowflake_category?.background_color}
          limit={20}
        />
      </DefaultLayout>
    </>
  );
};

export const query = graphql`
  query lessons {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }

    dbt_category: mdx(
      slug: { regex: "/dbt/i" }
      fields: { source: { eq: "categories" } }
    ) {
      frontmatter {
        title
        background_color
        custom_excerpt
        premium_content
      }
    }

    clickhouse_category: mdx(
      slug: { regex: "/clickhouse/i" }
      fields: { source: { eq: "categories" } }
    ) {
      frontmatter {
        title
        background_color
        custom_excerpt
        premium_content
      }
    }

    snowflake_category: mdx(
      slug: { regex: "/snowflake/i" }
      fields: { source: { eq: "categories" } }
    ) {
      frontmatter {
        title
        background_color
        custom_excerpt
        premium_content
      }
    }

    kafka_category: mdx(
      slug: { regex: "/kafka/i" }
      fields: { source: { eq: "categories" } }
    ) {
      frontmatter {
        title
        background_color
        custom_excerpt
        premium_content
      }
    }

    spark_category: mdx(
      slug: { regex: "/spark/i" }
      fields: { source: { eq: "categories" } }
    ) {
      frontmatter {
        title
        background_color
        custom_excerpt
        premium_content
      }
    }

    dbt: allMdx(
      filter: {
        fields: { source: { eq: "lessons" } }
        frontmatter: { category: { regex: "/dbt/i" } }
      }
      sort: { fields: frontmatter___order }
      limit: 20
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

    clickhouse: allMdx(
      filter: {
        fields: { source: { eq: "lessons" } }
        frontmatter: { category: { regex: "/clickhouse/i" } }
      }
      sort: { fields: frontmatter___order }
      limit: 20
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
    snowflake: allMdx(
      filter: {
        fields: { source: { eq: "lessons" } }
        frontmatter: { category: { regex: "/snowflake/i" } }
      }
      sort: { fields: frontmatter___order }
      limit: 20
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
    kafka: allMdx(
      filter: {
        fields: { source: { eq: "lessons" } }
        frontmatter: { category: { regex: "/kafka/i" } }
      }
      sort: { fields: frontmatter___order }
      limit: 20
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
    spark: allMdx(
      filter: {
        fields: { source: { eq: "lessons" } }
        frontmatter: { category: { regex: "/spark/i" } }
      }
      sort: { fields: frontmatter___order }
      limit: 20
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

export default IndexPage;
