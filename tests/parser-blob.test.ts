import {
  Markdown,
  ParsedMarkdown,
  getBlobFromMarkdown,
} from "../src/index";
import { Blob } from "buffer";

describe("parser behaviour over different markdown commands", () => {
  it("should render an HTML-Div as a wrapper", () => {
    const markdown: Markdown = "#h1";

    const template: string = `
    <html>
      <head>
      </head>
      <body>
        <h1>h1</h1>
      </body>
    </html>`;

    const blob = new Blob([template], {
      type: "text/html",
    });

    expect(getBlobFromMarkdown(markdown)).toEqual(blob);
  });
});
