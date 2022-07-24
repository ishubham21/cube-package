import {
  Markdown,
  ParsedMarkdown,
  parseMarkdownWithoutWrapper,
} from "../src/index";

describe("parser behaviour over different markdown commands", () => {
  describe("parse headings", () => {
    it("should parse h1", () => {
      const markdown: Markdown = "#h1";
      const expectedParsedMarkdown: Markdown = `<h1>h1</h1>`;
      
      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse h2", () => {
      const markdown: Markdown = "##h2";
      const expectedParsedMarkdown: Markdown = `<h2>h2</h2>`;
      
      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse h3", () => {
      const markdown: Markdown = "###h3";
      const expectedParsedMarkdown: Markdown = `<h3>h3</h3>`;
      
      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse h4", () => {
      const markdown: Markdown = "####h4";
      const expectedParsedMarkdown: Markdown = `<h4>h4</h4>`;
      
      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse h5", () => {
      const markdown: Markdown = "#####h5";
      const expectedParsedMarkdown: Markdown = `<h5>h5</h5>`;
      
      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse h6", () => {
      const markdown: Markdown = "######h6";
      const expectedParsedMarkdown: Markdown = `<h6>h6</h6>`;
      
      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });
  });
});
