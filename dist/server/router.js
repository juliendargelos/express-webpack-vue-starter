"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _application = _interopRequireDefault(require("./application"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_application.default.use(_express.default.static(_path.default.join(__dirname, '../client')));