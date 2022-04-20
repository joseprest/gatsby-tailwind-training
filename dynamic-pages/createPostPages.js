const path = require("path");

const nextPageurl = (nextPage, currentPage) => {
  if (nextPage) {
    return nextPage.id === currentPage.id
      ? nextPage?.slug
      : null;
  }

  return null;
};

const prevPageurl = (prevPage, currentPage) => {
  if (prevPage) {
    return prevPage.id === currentPage.id
      ? prevPage?.slug
      : null;
  }

  return null;
};

const createPostPages = async ({ createPage, graphql, reporter }) => {
  const query = await graphql(`
    {
      posts: allMdx(
        filter: { fields: { source: { eq: "blog" } } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 1000000
      ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          body
          slug
        }
      }
    }
  `);

  if (query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = query.data.posts.nodes;

  posts.forEach((post, i) => {
    createPage({
      path: `/blog/${post.slug}`,
      component: path.resolve("src/templates/post-details.tsx"),
      context: {
        pagination: {
          next: nextPageurl(posts[i + 1], post),
          prev: prevPageurl(posts[i - 1], post),
        },
        slug: post.slug,
      },
    });
  });
};

module.exports = createPostPages;
