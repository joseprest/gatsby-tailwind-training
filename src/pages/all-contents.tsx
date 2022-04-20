import { graphql } from "gatsby";
import React from "react";

const contents = ({ data }) => {
  return (
    <pre>
      {JSON.stringify(
        data.lessons.group.map((g) => g.nodes).flat(),
        undefined,
        4
      )}
    </pre>
  );
};

export const query = graphql`
  {
    lessons: allMdx(
      filter: { fields: { source: { eq: "lessons" } } }
      sort: { fields: frontmatter___order, order: ASC }
      limit: 1000000
    ) {
      group(field: frontmatter___category) {
        fieldValue
        nodes {
          frontmatter {
            slug
            category
            order
          }
        }
      }
    }
  }
`;

export default contents;
