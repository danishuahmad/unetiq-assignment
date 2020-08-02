"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _notes = _interopRequireDefault(require("../controllers/notes"));

var router = (0, _express.Router)();
/** NOTES **/

router.get("/notes", _notes["default"].all);
router.post("/note/add", _notes["default"].add);
router.post("/note/edit", _notes["default"].edit);
var _default = router;
exports["default"] = _default;