import {
  Markdown,
  ParsedMarkdown,
  WrappedParsedMarkdown,
} from "../types/parser-types";
import { Blob } from "buffer";

/**
 * @param markdownText => markdown passed by the user
 * @returns => parsed markdown of the type string
 */
const parseMarkdownWithoutWrapper = (
  markdownText: Markdown,
): ParsedMarkdown => {
  const parsedMarkdown: ParsedMarkdown = markdownText
    //ol
    /**
     * (1. Ordered list-item)
     */
    .replace(/^\s*\n\d\./gm, "<ol>\n1.")
    .replace(/^(\d\..+)\s*\n([^\d\.])/gm, "$1\n</ol>\n\n$2")
    .replace(/^\d\.(.+)/gm, "<li>$1</li>")

    //ul
    /**
     * (* Unordered list-item)
     */
    .replace(/^\s*\n\*/gm, "<ul>\n*")
    .replace(/^(\*.+)\s*\n([^\*])/gm, "$1\n</ul>\n\n$2")
    .replace(/^\*(.+)/gm, "<li>$1</li>")

    //blockquote
    /**
     * (> blockquote)
     */
    .replace(/^\>(.+)/gm, "<blockquote>$1</blockquote>")

    //h - in descending order to prevent fall-through
    /**
     * (# => h1)
     * (## => h2)
     * (### => h3)
     * (#### => h4)
     * (##### => h5)
     * (###### => h6)
     */
    //TODO: Handling trailing white-spaces
    //TODO: Handling more than 6#s
    .replace(/[\#]{6}(.+)/g, "<h6>$1</h6>")
    .replace(/[\#]{5}(.+)/g, "<h5>$1</h5>")
    .replace(/[\#]{4}(.+)/g, "<h4>$1</h4>")
    .replace(/[\#]{3}(.+)/g, "<h3>$1</h3>")
    .replace(/[\#]{2}(.+)/g, "<h2>$1</h2>")
    .replace(/[\#]{1}(.+)/g, "<h1>$1</h1>")

    //images
    /**
     * (![alt text](image.jpg))
     */
    .replace(
      /\!\[([^\]]+)\]\(([^\)]+)\)/g,
      '<img src="$2" alt="$1"/>',
    )

    //links
    /**
     * 	([title](https://www.example.com))
     */
    .replace(
      /[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g,
      '<a href="$2" title="$4">$1</a>',
    )

    //font styles
    //TODO: handle sentences starting with bold text
    /**
     * (**bold**)
     */
    .replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, "<b>$1</b>")
    /**
     * (_italics_)
     */
    .replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, "<i>$1</i>")
    /**
     * (~~strikethrough~~)
     */
    /**
     * (**_~~order of combinations to be created~~_**)
     */
    .replace(/[\~]{2}([^\~]+)[\~]{2}/g, "<del>$1</del>")

    //pre
    /**
     * (```
     *    preformatted
     * ```)
     */
    .replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">')
    .replace(/^\`\`\`\s*\n/gm, "</pre>\n\n")

    //code
    /**
     * (`Code block`)
     */
    .replace(/[\`]{1}([^\`]+)[\`]{1}/g, "<code>$1</code>")

    //p - placing p as soon as new line is encountered
    //Making sure that other tags are intact against p
    .replace(
      /^\s*(\n)?(.+)/gm,
      (content: ParsedMarkdown): ParsedMarkdown => {
        /**
         * Not taking lines starting with whitespaces or carriage-returns
         */
        return /^\s*(\n)|\<(\/)?(h\d|ul|ol|li|code|blockquote|pre|img|)/.test(
          content,
        )
          ? content
          : "<p>" + content + "</p>";
      },
    )

    //strip p from pre - had p in <pre>
    .replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, "$1$2");

  /**
   * Flattening the white spaces before and after the string
   */
  return parsedMarkdown.trim();
};

/**
 * @param markdown markdown passed by the user
 * @returns parsed markdown of the type HTMLDivElement with an
 * id="cube-markdown-parser"
 */
const parseMarkdownIntoHTML = (
  markdown: Markdown,
): WrappedParsedMarkdown => {
  const parsedMarkdown: ParsedMarkdown =
    parseMarkdownWithoutWrapper(markdown);

  /**
   * Wrapping everything inside a customizable div
   * that is served with a usable id attribute
   * this is not applied by default see src/route/parseMarkdown.ts for more information
   */
  /**
   * Converting of the type string to type HTMLDivElement requires
   * converting the string to unknown first and then HTMLDivElement
   * since string and HTMLDivElement do not overlap and an overlap is
   * needed between the types to create a bridge.
   */
  const wrappedParsedMarkdown: WrappedParsedMarkdown =
    `<div id="cube-markdown-parser">${parsedMarkdown}</div>` as unknown as HTMLDivElement;

  return wrappedParsedMarkdown;
};

/**
 * @param markdown markdown passed by the user
 * @returns binary buffer of an HTML template containing the
 * parsed markdown
 */
const getBlobFromMarkdown = (markdown: Markdown): Blob => {
  const parsedMarkdown: ParsedMarkdown =
    parseMarkdownWithoutWrapper(markdown);

  const template: string = `
    <html>
      <head>
      </head>
      <body>
        ${parsedMarkdown || ""}
      </body>
    </html>`;

  /**
   * Generating a buffer from an HTML template that wraps
   * the parsed markdown. These blobs are of the type `Blob`
   */
  const blobFromMarkdown: Blob = new Blob([template], {
    type: "text/html",
  });

  return blobFromMarkdown;
};

export {
  parseMarkdownIntoHTML,
  parseMarkdownWithoutWrapper,
  getBlobFromMarkdown,
};
