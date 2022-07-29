# Cube Markdown Parser

Ever thought of making an application that takes your markdown and renders it for you? Well, Cube Markdown Parser (Cube Package) is the solution. Cube Package takes your markdown and parses it into HTML. It can be plugged with any JS/TS framework and helps you in parsing markdown as -

- String - For you to be able to use it with innerHTML, innerText, or dangerouslySetInnerHTML (this is however not recommended).
- HTMLDivElement - For you to directly use this element with your JavaScript, Typescript or even JSX (yes, it outputs valid JSX)
- Blob - For you to be able to generate URLs that can be used with iFrames in your projects.

## Features

- **Consistency across imports** - Use it with `commonjs` or `module`, it works with both!
- **Typescript support** - I am also shipping the Typescript types used in the package to help you maintain consistency around your code.
- **Smaller bundle size** - Since only distribution files are exported, the bundle size is optimised for all your use-cases.
- **Written in typescript** - Ah, what else do I need to say.
- **Source Maps** - The distribution version of Cube Package also contains source maps for efficient debugging.
- **0 Dependencies** - Having no dependencies makes cube package a great choice for developers who care about getting work done with speed!  

## Usage

### Getting a string from Markdown -

```javascript
import { parseMarkdownWithoutWrapper } from "cube-package";
const parsedMardown = parseMarkdownWithoutWrapper("#heading");

console.log(parsedMarkdown);
//Output - <h1>heading</h1>
```

or

```javascript
const { parseMarkdownWithoutWrapper } from = require("cube-package");
const parsedMardown = parseMarkdownWithoutWrapper("#heading");

console.log(parsedMarkdown);
//Output - <h1>heading</h1>
```

### Getting an HTMLDivElement from Markdown -

This method wraps your markdown into a `div` that has an id attribute `cube-markdown-parser`

```javascript
import { parseMarkdownIntoHTML } from "cube-package";
const parsedMardown = parseMarkdownWithoutWrapper("#heading");

console.log(parsedMarkdown);
//Output - <div id="cube-markdown-parser"> <h1>heading</h1> </div>
```

Or

```javascript
const { parseMarkdownIntoHTML } from = require("cube-package");
const parsedMardown = parseMarkdownWithoutWrapper("#heading");

console.log(parsedMarkdown);
//Output - <div id="cube-markdown-parser"><h1>heading</h1></div>
```

### Getting a Blob from Markdown -

This method results in a blob that can be used with `createObjectURL` to get an URL to be used with an iFrame.

```javascript
import { getBlobFromMarkdown } from "cube-package";
const blob = getBlobFromMarkdown("#heading");

console.log(blob);
//Output - {size: 97, type: "text/html"}
```

or

```javascript
const { getBlobFromMarkdown } = require("cube-package");
const blob = getBlobFromMarkdown("#heading");

console.log(blob);
//Output - {size: 97, type: "text/html"}
```

### Future Scope

- I need help with handling trailing whitespaces
- I need to implement a check that prevents parsing headings if there are more than 6 #s
- I need help with handling sentences or lines that start with bold text. 