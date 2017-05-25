# Color Shorthand [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

[Color Shorthand] lets you define `background-color` within the `color` property in CSS.

```css
/* before */

header {
  color: #abccfc #212231;
}

/* after */

header {
  color: #abccfc;
  background-color: #212231;
}
```

## Options

#### `prefix`

Type: `String`  
Default: `""`

Adds an optional prefix to the `color` property (e.g. `"x"` for `-x-color`). Wrapping dashes (`-`) are automatically applied.

#### `skip`

Type: `String`  
Default: `"*"`

Specifies the skip token used to ignore a length.

## Usage

Add [Color Shorthand] to your build tool:

```bash
npm install postcss-short-color --save-dev
```

#### Node

```js
require('postcss-short-color').process(YOUR_CSS, { /* options */ });
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [Color Shorthand] as a PostCSS plugin:

```js
postcss([
  require('postcss-short-color')({ /* options */ })
]).process(YOUR_CSS, /* options */);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [Color Shorthand] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
  return gulp.src('./src/*.css').pipe(
    postcss([
      require('postcss-short-color')({ /* options */ })
    ])
  ).pipe(
    gulp.dest('.')
  );
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [Color Shorthand] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
        require('postcss-short-color')({ /* options */ })
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[npm-url]: https://www.npmjs.com/package/postcss-short-color
[npm-img]: https://img.shields.io/npm/v/postcss-short-color.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-short-color
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-short-color.svg
[win-url]: https://ci.appveyor.com/project/jonathantneal/postcss-short-color
[win-img]: https://img.shields.io/appveyor/ci/jonathantneal/postcss-short-color.svg
[git-url]: https://gitter.im/postcss/postcss
[  git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[Color Shorthand]: https://github.com/jonathantneal/postcss-short-color
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
