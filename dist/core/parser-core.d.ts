import { Markdown, ParsedMarkdown, WrappedParsedMarkdown } from "../types/parser-types";
import { Blob } from "buffer";
declare const parseMarkdownWithoutWrapper: (markdownText: Markdown) => ParsedMarkdown;
declare const parseMarkdownIntoHTML: (markdown: Markdown) => WrappedParsedMarkdown;
declare const getBlobFromMarkdown: (markdown: Markdown) => Blob;
export { parseMarkdownIntoHTML, parseMarkdownWithoutWrapper, getBlobFromMarkdown, };
