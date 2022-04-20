const _ = require("lodash");
const path = require("path");

const createCategoryPages = async ({ createPage, graphql, reporter }) => {
  const query = await graphql(`
    {
      categories: allMdx(filter: { fields: { source: { eq: "lessons" } } }) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);

  if (query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  query.data.categories.group.forEach((category) => {
    createPage({
      path: `/categories/${_.kebabCase(category.fieldValue)}/`,
      component: path.resolve("src/templates/category.tsx"),
      context: {
        category_slug: `/${category.fieldValue}/i`,
      },
    });
  });
};

module.exports = createCategoryPages;
