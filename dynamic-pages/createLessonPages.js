const path = require("path");

const nextPageurl = (nextPage, currentPage) => {
  if (nextPage) {
    return nextPage.category[0] === currentPage.category[0]
      ? nextPage?.slug
      : null;
  }

  return null;
};

const prevPageurl = (prevPage, currentPage) => {
  if (prevPage) {
    return prevPage.category[0] === currentPage.category[0]
      ? prevPage?.slug
      : null;
  }

  return null;
};

const createLessonPages = async ({ createPage, graphql, reporter }) => {
  const query = await graphql(`
    {
      lessons: allMdx(
        filter: { fields: { source: { eq: "lessons" } } }
        sort: { fields: frontmatter___order, order: ASC }
        limit: 1000000
      ) {
        group(field: frontmatter___category) {
          nodes {
            frontmatter {
              slug
              category
            }
          }
        }
      }
    }
  `);

  if (query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const lessons = query.data.lessons.group.map((g) => g.nodes).flat();

  lessons.forEach((lession, i) => {
    createPage({
      path: `/${lession.frontmatter.slug}`,
      component: path.resolve("src/templates/lession-details.tsx"),
      context: {
        pagination: {
          next: nextPageurl(lessons[i + 1]?.frontmatter, lession.frontmatter),
          prev: prevPageurl(lessons[i - 1]?.frontmatter, lession.frontmatter),
        },
        slug: lession.frontmatter.slug,
        category_slug: `/${lession.frontmatter.category[0]}/i`,
      },
    });
  });
};

module.exports = createLessonPages;
