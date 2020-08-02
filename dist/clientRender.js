"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _Application = _interopRequireDefault(require("../client/components/Application"));

var clientRenderer = function clientRenderer(req, res) {
  try {
    var filePath = _path["default"].resolve(__dirname, '..', 'build', 'index.html');

    _fs["default"].readFile(filePath, 'utf8', /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, htmlData) {
        var context, markup, markupWithApp, RenderedApp;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!err) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", res.status(502).end());

              case 2:
                context = {};
                markup = (0, _server.renderToString)(null);

                if (context.url) {
                  // Somewhere a `<Redirect>` was rendered
                  res.redirect(302, context.url);
                } else {
                  // we're good, send the response
                  markupWithApp = "<div id=\"app\">".concat(markup, "</div>");
                  RenderedApp = htmlData.replace('<div id="app"></div>', markupWithApp);
                  res.send(RenderedApp);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  } catch (e) {
    console.log(e);
  }
};

var _default = clientRenderer;
exports["default"] = _default;