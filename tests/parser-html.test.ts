import {
  Markdown,
  ParsedMarkdown,
  parseMarkdownIntoHTML,
} from "../src/index";

describe("parser behaviour over different markdown commands", () => {
  it("should render an HTML-Div as a wrapper", () => {
    const markdown: Markdown = "#h1";
    const expectedParsedMarkdown: ParsedMarkdown = `<div id="cube-markdown-parser"><h1>h1</h1></div>`;

    expect(parseMarkdownIntoHTML(markdown)).toEqual(
      expectedParsedMarkdown,
    );
  });
});
