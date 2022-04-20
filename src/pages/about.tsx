import { graphql } from "gatsby";
import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SEO from "../components/layouts/SEO";

const about = () => {
  return (
    <DefaultLayout>
      <SEO
        title="About Us | Timeflow Academy"
        url="https://timeflow.academy/about"
        desc="Timeflow Academy is an online, hands-on platform for improving your Data Engineering skills using open source and cloud native platforms incluuding DBT, Clickhouse, Snowflake, Kafka, Spark and Airflow"
        ogImage="https://timeflow.academy/assets/img/home.png"
      />
      <div
        className="bg-right-top bg-no-repeat bg-cover py-9"
        style={{ backgroundImage: "url(/assets/img/page-cover.png)" }}
      >
        <div className="container mx-auto px-5">
          <h1 className="text-3xl font-bold text-center text-white">
            About Us
          </h1>
        </div>
      </div>

      <div className="container py-12 md:py-20 px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-y-5">
          <div className="flex md:justify-end col-span-1">
            <h2 className="md:max-w-sm text-2xl md:text-4xl text-black">
              The Leading Hands On Training For Data Engineers
            </h2>
          </div>
          <div className="col-span-1 space-y-4 text-black ">
            <p>
              Data Engineers are the people responsible for capturing,
              transforming and delivering data to Data Analysts, Data
              Scientists, and business users using reliable, trusted and fast data delivery pipelines.
            </p>

            <p>
              Though this a role growing in importance, there is a huge shortage
              of talent and experience in this field due to the rapid growth in
              the data and analytics market, and rapid evolution in the tools and 
              platforms which businesses are deploying.
            </p>

            <p>
              With this in mind, we have developed <u><a href="/">Timeflow Academy</a></u> to provide
              high quality training for a new generation of Data Engineers,
              allowing both new and experienced people to move into the field by
              learning the latest tooling and best practices.
            </p>

            <p>
              We focus on a number of powerful Open Source and Cloud Native
              tools available to us such as DBT, Airflow, Snowflake, Kafka and
              Spark. These tools and platforms offer real value to data teams,
              but they do have a learning curve, particuarly when it comes to
              best practices and building production quality pipelines and
              solutions. For this reason, we take a very hands on and practical
              approach which is all about gaining experience and confidence with
              them.
            </p>

            <p>
              More importantly than specific tools are the practices and mindset of Data Engineering.  
              Where before Data could be moved around ad-hoc, businesses now need to build repeatable, trusted, 
              performant and secure pipelines.  This calls for a more rigorous and professional approach to 
              Data Engineering.  You can read more about our Data Engineering in our <a  href="/blog/what-is-data-engineering">blog post here</a>.
            </p>

            
          </div>
        </div>
      </div>

      <div className="container py-4 px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="col-span-1">
            <img
              className="w-full"
              src="/assets/img/image-1.jpg"
              alt="about image"
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full"
              src="/assets/img/image-2.jpg"
              alt="about image"
            />
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-20 px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-6">
          <div className="flex md:justify-end col-span-1">
            <h2 className="md:max-w-sm text-2xl md:text-4xl text-black">
              About The Course Content
            </h2>
          </div>
          <div className="col-span-1 space-y-4 text-black">
            <p>
              We currently offer courses in four of the most common technologies
              being used by Data Engineers today:
            </p>

            <p>
              <ul>
                <li>
                  <a href="https://www.getdbt.com/">DBT</a>
                </li>
                <li>
                  <a href="https://kafka.apache.org/">Kafka</a>
                </li>
                <li>
                  <a href="https://clickhouse.com/">Clickhouse</a>
                </li>
                <li>
                  <a href="https://www.snowflake.com/">Snowflake</a>
                </li>
              </ul>
            </p>

            <p>
              The courses are aimed at Data Engineers who are responsible for
              building solutions and preparing data using these technologies.
              The courses will be less relevant to end users such as Data
              Analysts and Data Scientists.
            </p>

            <p>
              For now, all of our content is free, though some requires a{" "}
              <a href="/auth/register">free membership</a> to access.
            </p>

            <p>
              If you have any feedback or requests regarding our content, please{" "}
              <a href="/contact">get in touch</a>.
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

export default about;
