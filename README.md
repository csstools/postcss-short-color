# PostCSS Short Color [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS Short Color] lets you define `background-color` within the `color`
property in CSS.

```pcss
header {
  color: #abccfc #212231;
}

/* becomes */

header {
  background-color: #212231;
  color: #abccfc;
}
```

## Usage

Add [PostCSS Short Color] to your project:

```bash
npm install postcss-short-color --save-dev
```

Use [PostCSS Short Color] to process your CSS:

```js
const postcssShortColor = require('postcss-short-color');

postcssShortColor.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssShortColor = require('postcss-short-color');

postcss([
  postcssShortColor(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS Short Color] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

#### prefix

The `prefix` option defines a prefix required by properties being transformed.
Wrapping dashes are automatically applied, so that `x` would transform
`-x-color`.

```js
postcssShortColor({ prefix: 'x' });
```

```pcss
header {
  -x-color: #abccfc #212231;
}

/* becomes */

header {
  background-color: #212231;
  color: #abccfc;
}
```

#### skip

The `skip` option defines the skip token used to ignore portions of the
shorthand.

```js
postcssShortColor({ skip: '-' });
```

```pcss
header {
  color: - #212231;
}

/* becomes */

header {
  background-color: #212231;
}
```

[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-short-color.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-short-color
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-short-color.svg
[npm-url]: https://www.npmjs.com/package/postcss-short-color

[PostCSS]: https://github.com/postcss/postcss
[PostCSS Short Color]: https://github.com/jonathantneal/postcss-short-color
