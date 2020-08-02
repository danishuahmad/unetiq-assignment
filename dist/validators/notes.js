"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = _interopRequireDefault(require("../utility/constants"));

var add = function add() {
  var note = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  try {
    note = note.toString().trim();

    if (note) {
      return {
        status: true,
        note: note
      };
    } else {
      return {
        status: false,
        errors: "Invalid note provided"
      };
    }
  } catch (e) {
    return {
      status: false,
      errors: _constants["default"].catch_error
    };
  }
};

var _default = {
  add: add
};
exports["default"] = _default;