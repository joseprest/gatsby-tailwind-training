const createCategoryPages = require("./dynamic-pages/createCategoryPages");
const createLessonPages = require("./dynamic-pages/createLessonPages");
const createPostPages = require("./dynamic-pages/createPostPages");

exports.createPages = async ({ actions, graphql, reporter }) => {
  await Promise.all([
    createCategoryPages({ createPage: actions.createPage, graphql, reporter }),
    createLessonPages({ createPage: actions.createPage, graphql, reporter }),
    createPostPages({ createPage: actions.createPage, graphql, reporter }),
  ]);
};
