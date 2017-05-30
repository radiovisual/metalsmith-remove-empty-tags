# metalsmith-remove-empty-tags

[![Build Status](https://travis-ci.org/radiovisual/metalsmith-remove-empty-tags.svg?branch=master)](https://travis-ci.org/radiovisual/metalsmith-remove-empty-tags)

> Remove empty HTML tags from your metalsmith template files.

:warning: **Not fully tested or production ready**. Use at your own risk. There are a few items on the
[roadmap to `v1.0`](https://github.com/radiovisual/metalsmith-remove-empty-tags/issues),
but I am not sure when I will get around to this, so Pull Requests are welcome
to help extend test coverage and close some issues.

## Install

```
$ npm install --save metalsmith-remove-empty-tags
```


## Usage

```js
var Metalsmith = require("metalsmith");
var removeEmptyTags = require("metalsmith-remove-empty-tags");

Metalsmith(__dirname)
  // ... state when html files are available
  .use(removeEmptyTags(['p']))
  // ..
```


## API

### removeEmptyTags(tags)

#### tags

Type: `array`

An array of HTML tags to look for.

## TODO

- [x] supply tag names to remove
- [ ] remove all empty tags by default (if no tags are supplied)
- [ ] option to ignore files
- [ ] option to ignore tags with certain classes
- [ ] better test coverage

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
