"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _notes = _interopRequireDefault(require("../services/notes"));

var _notes2 = _interopRequireDefault(require("../validators/notes"));

var _helpers = require("../utility/helpers");

var all = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var notes_service, notes;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            notes_service = new _notes["default"]();
            _context.next = 3;
            return notes_service.getAll({});

          case 3:
            notes = _context.sent;
            res.status(200).json({
              status: true,
              notes: notes
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function all(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var add = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var note, validation_response, header_text, notes_service, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            note = req.body.note; //	validate request data

            validation_response = _notes2["default"].add(note); //	if valid
            //	? create header and insert
            //	: return error

            if (!validation_response.status) {
              _context2.next = 11;
              break;
            }

            //	get heading/title for note
            header_text = (0, _helpers.createHeading)(note); //	enter into database

            notes_service = new _notes["default"]();
            _context2.next = 7;
            return notes_service.create({
              title: header_text,
              body: note
            });

          case 7:
            data = _context2.sent;
            res.status(201).json({
              status: true,
              note: data
            });
            _context2.next = 12;
            break;

          case 11:
            res.status(400).json(validation_response);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function add(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var edit = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, note, id, validation_response, header_text, notes_service, data;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, note = _req$body.note, id = _req$body.id; //	validate request data

            validation_response = _notes2["default"].add(note); //	if valid
            //	? create header and insert
            //	: return error

            if (!validation_response.status) {
              _context3.next = 11;
              break;
            }

            //	get heading/title for note
            header_text = (0, _helpers.createHeading)(note); //	update database

            notes_service = new _notes["default"]();
            _context3.next = 7;
            return notes_service.edit(header_text, note, id);

          case 7:
            data = _context3.sent;
            res.status(200).json({
              status: true,
              note: data
            });
            _context3.next = 12;
            break;

          case 11:
            res.status(400).json(validation_response);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function edit(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  all: all,
  add: add,
  edit: edit
};
exports["default"] = _default;