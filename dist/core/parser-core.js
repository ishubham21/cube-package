"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlobFromMarkdown = exports.parseMarkdownWithoutWrapper = exports.parseMarkdownIntoHTML = void 0;
const buffer_1 = require("buffer");
const parseMarkdownWithoutWrapper = (markdownText) => {
    const parsedMarkdown = markdownText
        .replace(/^\s*\n\d\./gm, "<ol>\n1.")
        .replace(/^(\d\..+)\s*\n([^\d\.])/gm, "$1\n</ol>\n\n$2")
        .replace(/^\d\.(.+)/gm, "<li>$1</li>")
        .replace(/^\s*\n\*/gm, "<ul>\n*")
        .replace(/^(\*.+)\s*\n([^\*])/gm, "$1\n</ul>\n\n$2")
        .replace(/^\*(.+)/gm, "<li>$1</li>")
        .replace(/^\>(.+)/gm, "<blockquote>$1</blockquote>")
        .replace(/[\#]{6}(.+)/g, "<h6>$1</h6>")
        .replace(/[\#]{5}(.+)/g, "<h5>$1</h5>")
        .replace(/[\#]{4}(.+)/g, "<h4>$1</h4>")
        .replace(/[\#]{3}(.+)/g, "<h3>$1</h3>")
        .replace(/[\#]{2}(.+)/g, "<h2>$1</h2>")
        .replace(/[\#]{1}(.+)/g, "<h1>$1</h1>")
        .replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1"/>')
        .replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>')
        .replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, "<b>$1</b>")
        .replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, "<i>$1</i>")
        .replace(/[\~]{2}([^\~]+)[\~]{2}/g, "<del>$1</del>")
        .replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">')
        .replace(/^\`\`\`\s*\n/gm, "</pre>\n\n")
        .replace(/[\`]{1}([^\`]+)[\`]{1}/g, "<code>$1</code>")
        .replace(/^\s*(\n)?(.+)/gm, (content) => {
        return /^\s*(\n)|\<(\/)?(h\d|ul|ol|li|code|blockquote|pre|img|)/.test(content)
            ? content
            : "<p>" + content + "</p>";
    })
        .replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, "$1$2");
    return parsedMarkdown.trim();
};
exports.parseMarkdownWithoutWrapper = parseMarkdownWithoutWrapper;
const parseMarkdownIntoHTML = (markdown) => {
    const parsedMarkdown = parseMarkdownWithoutWrapper(markdown);
    const wrappedParsedMarkdown = `<div id="cube-markdown-parser">${parsedMarkdown}</div>`;
    return wrappedParsedMarkdown;
};
exports.parseMarkdownIntoHTML = parseMarkdownIntoHTML;
const getBlobFromMarkdown = (markdown) => {
    const parsedMarkdown = parseMarkdownWithoutWrapper(markdown);
    const template = `
    <html>
      <head>
      </head>
      <body>
        ${parsedMarkdown || ""}
      </body>
    </html>`;
    const blobFromMarkdown = new buffer_1.Blob([template], {
        type: "text/html",
    });
    return blobFromMarkdown;
};
exports.getBlobFromMarkdown = getBlobFromMarkdown;
//# sourceMappingURL=parser-core.js.map