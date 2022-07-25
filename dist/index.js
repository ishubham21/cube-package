"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _parsercore = require("./core/parser-core");

var _parsertypes = require("./types/parser-types");

/**
 * parseMarkdownIntoHTML - returns a <div> with user-provided
 * markdown parsed into it with an id `cube-markdown-parser`.
 * NOTE - It is of the type `HTMLDivElement` that is being type-
 * casted from `string` -> `unknown` -> `HTMLDivElement`. You can read
 * more about this decision from the function
 *
 * parseMarkdownWithoutWrapper - return a string with the user-
 * provided markdown parsed into it. It can be directly used with
 * `innerHTML` or `innerText` by the user.
 * React users can use `dangerouslySetInnerHTML` to consume the output
 * of these functions
 *
 * Markdown - a `type` that is used across this package. Shipping it along
 * to maintain consistency.
 *
 * WrappedParsedMarkdown - a type that inheritently makes use of the type
 * HTMLDivElement. It is the return type of the  function `parseMarkdwnIntoHTML`
 *
 * ParsedMarkdown - a type that is associated with the resultant markdown
 */

exports.parseMarkdownIntoHTML = _parsercore.parseMarkdownIntoHTML;
exports.parseMarkdownWithoutWrapper =
  _parsercore.parseMarkdownWithoutWrapper;
exports.getBlobFromMarkdown = _parsercore.getBlobFromMarkdown;
exports.Markdown = _parsertypes.Markdown;
exports.WrappedParsedMarkdown = _parsertypes.WrappedParsedMarkdown;
exports.ParsedMarkdown = _parsertypes.ParsedMarkdown;
