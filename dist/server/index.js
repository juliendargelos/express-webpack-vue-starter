"use strict";

var _application = _interopRequireDefault(require("./application"));

require("./router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 8080;

_application.default.listen(port, function () {
  return console.log("Listening on localhost:".concat(port));
});