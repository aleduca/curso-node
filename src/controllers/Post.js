const edit = function (request, response) {
  return response.json(request.params["id"]);
};

const store = function (request, response) {
  return response.json(request.body["age"]);
};

const update = function (request, response) {
  return response.json(request.body);
};

const destroy = function (request, response) {
  return response.json(request.params);
};

module.exports = { edit, store, update, destroy };
