const { MASTER_DIR } = require("../helpers/constants");

const index = function (request, response) {
  request.session.name = "Alexandre";
  return response.render("home", { layout: MASTER_DIR, title: "Home" });
};

module.exports = { index };
