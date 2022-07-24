import {
  parseMarkdownIntoHTML,
  parseMarkdownWithoutWrapper,
  getBlobFromMarkdown,
} from "./core/parser-core";
import {
  Markdown,
  WrappedParsedMarkdown,
  ParsedMarkdown,
} from "./types/parser-types";

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

export {
  parseMarkdownIntoHTML,
  parseMarkdownWithoutWrapper,
  getBlobFromMarkdown,
  Markdown,
  WrappedParsedMarkdown,
  ParsedMarkdown,
};
