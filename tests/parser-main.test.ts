import {
  Markdown,
  ParsedMarkdown,
  parseMarkdownWithoutWrapper,
} from "../src/index";

describe("parser behaviour over different markdown commands", () => {
  describe("parse headings", () => {
    it("should parse h1", () => {
      const markdown: Markdown = "#h1";
      const expectedParsedMarkdown: ParsedMarkdown = `<h1>h1</h1>`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse h2", () => {
      const markdown: Markdown = "##h2";
      const expectedParsedMarkdown: ParsedMarkdown = `<h2>h2</h2>`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse h3", () => {
      const markdown: Markdown = "###h3";
      const expectedParsedMarkdown: ParsedMarkdown = `<h3>h3</h3>`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse h4", () => {
      const markdown: Markdown = "####h4";
      const expectedParsedMarkdown: ParsedMarkdown = `<h4>h4</h4>`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse h5", () => {
      const markdown: Markdown = "#####h5";
      const expectedParsedMarkdown: ParsedMarkdown = `<h5>h5</h5>`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse h6", () => {
      const markdown: Markdown = "######h6";
      const expectedParsedMarkdown: ParsedMarkdown = `<h6>h6</h6>`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });
  });

  describe("parse lists", () => {
    it("should parse un-ordered lists", () => {
      const markdown: Markdown = `\n*item-1\n*item-2\n*item-3\n `;
      const expectedParsedMarkdown: ParsedMarkdown = `<ul>\n<li>item-1</li>\n<li>item-2</li>\n<li>item-3</li>\n</ul>`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse ordered lists", () => {
      const markdown: Markdown = `\n1.item-1\n2.item-2\n3.item-3\n `;
      const expectedParsedMarkdown: ParsedMarkdown = `<ol>\n<li>item-1</li>\n<li>item-2</li>\n<li>item-3</li>\n</ol>`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });
  });

  describe("parse blockquotes", () => {
    it("should parse blockquote text", () => {
      const markdown: Markdown = `>I'm a blockquote`;
      const expectedParsedMarkdown: ParsedMarkdown = `<blockquote>I'm a blockquote</blockquote>`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });
  });

  describe("parse images", () => {
    it("should parse images into <img> tags", () => {
      const markdown: Markdown = `![Alt text](https://dummy.com)`;
      const expectedParsedMarkdown: ParsedMarkdown = `<img src="https://dummy.com" alt="Alt text"/>`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });
  });

  describe("parse links", () => {
    it("should parse link into <a> tags", () => {
      const markdown: Markdown = `[I'm a link](https://dummy.com)`;
      const expectedParsedMarkdown: ParsedMarkdown = `<a href="https://dummy.com" title="">I'm a link</a>`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });
  });

  describe("parse font styles", () => {
    it("should parse bold commands", () => {
      const markdown: Markdown = `some **bold** text`;
      const expectedParsedMarkdown: ParsedMarkdown = `some <b>bold</b> text`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse italic commands", () => {
      const markdown: Markdown = `some _italic_ text`;
      const expectedParsedMarkdown: ParsedMarkdown = `some <i>italic</i> text`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse strikethrough commands", () => {
      const markdown: Markdown = `some ~~strike~~ text`;
      const expectedParsedMarkdown: ParsedMarkdown = `some <del>strike</del> text`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });

    it("should parse a combination of font commands", () => {
      const markdown: Markdown = `some **_~~strike~~_** text`;
      const expectedParsedMarkdown: ParsedMarkdown = `some <i><b><del>strike</del></b></i> text`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });
  });

  describe("parse code blocks", () => {
    it("should parse code blocks", () => {
      const markdown: Markdown = "`code`";
      const expectedParsedMarkdown: ParsedMarkdown = `<code>code</code>`;

      expect(parseMarkdownWithoutWrapper(markdown)).toEqual(
        expectedParsedMarkdown,
      );
    });
  });
});
