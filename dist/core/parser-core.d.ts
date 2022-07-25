import { Markdown, ParsedMarkdown, WrappedParsedMarkdown } from "../types/parser-types";
import { Blob } from "buffer";
/**
 * @param markdownText => markdown passed by the user
 * @returns => parsed markdown of the type string
 */
declare const parseMarkdownWithoutWrapper: (markdownText: Markdown) => ParsedMarkdown;
/**
 * @param markdown markdown passed by the user
 * @returns parsed markdown of the type HTMLDivElement with an
 * id="cube-markdown-parser"
 */
declare const parseMarkdownIntoHTML: (markdown: Markdown) => WrappedParsedMarkdown;
/**
 * @param markdown markdown passed by the user
 * @returns binary buffer of an HTML template containing the
 * parsed markdown
 */
declare const getBlobFromMarkdown: (markdown: Markdown) => Blob;
export { parseMarkdownIntoHTML, parseMarkdownWithoutWrapper, getBlobFromMarkdown, };
