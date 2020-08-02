"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var BaseService = /*#__PURE__*/function () {
  function BaseService() {
    (0, _classCallCheck2["default"])(this, BaseService);
  }

  (0, _createClass2["default"])(BaseService, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var criteria,
            fields,
            options,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                criteria = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                fields = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
                options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                _context.next = 5;
                return this.className.find(criteria, fields, options);

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "getOne",
    value: function () {
      var _getOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(criteria) {
        var fields,
            options,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fields = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : [];
                options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
                _context2.next = 4;
                return this.className.findOne(criteria, fields, options);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getOne(_x) {
        return _getOne.apply(this, arguments);
      }

      return getOne;
    }()
  }, {
    key: "count",
    value: function () {
      var _count = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(criteria) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.className.countDocuments(criteria);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function count(_x2) {
        return _count.apply(this, arguments);
      }

      return count;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(criteria) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.className.deleteOne(criteria);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _delete(_x3) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "deleteMany",
    value: function () {
      var _deleteMany = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(criteria) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.className.deleteMany(criteria);

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteMany(_x4) {
        return _deleteMany.apply(this, arguments);
      }

      return deleteMany;
    }()
  }, {
    key: "updateOne",
    value: function () {
      var _updateOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(criteria, data) {
        var upsert,
            _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                upsert = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : true;
                _context6.next = 3;
                return this.className.findOneAndUpdate(criteria, data, {
                  "new": false,
                  useFindAndModify: false,
                  upsert: upsert
                }, function (err, doc) {
                  if (err) {
                    return err;
                  } else {
                    return doc;
                  }
                });

              case 3:
                return _context6.abrupt("return", _context6.sent);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateOne(_x5, _x6) {
        return _updateOne.apply(this, arguments);
      }

      return updateOne;
    }()
  }, {
    key: "updateMultiple",
    value: function () {
      var _updateMultiple = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(criteria, data) {
        var upsert,
            _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                upsert = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : true;
                _context7.next = 3;
                return this.className.updateMany(criteria, data, {
                  upsert: upsert
                });

              case 3:
                return _context7.abrupt("return", _context7.sent);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function updateMultiple(_x7, _x8) {
        return _updateMultiple.apply(this, arguments);
      }

      return updateMultiple;
    }()
  }]);
  return BaseService;
}();

var _default = BaseService;
exports["default"] = _default;