"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeading = void 0;

var createHeading = function createHeading(text) {
  var header_array = text.split(" ");
  var header_text = "";

  for (var i = 0; i < header_array.length; i++) {
    //	if index is at third word
    //  ? then stop;
    //	: DO NOTHING
    if (i === 3) {
      break;
    }

    header_text += header_array[i] + " ";
  }

  header_text = header_text.trim();
  header_text += '...';
  return header_text;
};

exports.createHeading = createHeading;