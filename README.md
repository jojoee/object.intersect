# object.intersect

[![Travis](https://img.shields.io/travis/jojoee/object.intersect.svg)](https://travis-ci.org/jojoee/object.intersect)
[![Dependency Status](https://david-dm.org/jojoee/object.intersect.svg)](https://david-dm.org/jojoee/object.intersect) 
[![Codecov](https://img.shields.io/codecov/c/github/jojoee/object.intersect.svg)](https://codecov.io/github/jojoee/object.intersect)
[![Version - npm](https://img.shields.io/npm/v/object.intersect.svg)](https://www.npmjs.com/package/object.intersect)
[![License - npm](https://img.shields.io/npm/l/object.intersect.svg)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Fast object.intersect key / PHP `array_intersect_key` with no dependencies

## Installation

```
// npm
npm install object.intersect
const intersect = require('object.intersect')
```

## Example usage

```javascript
intersect() // {}
intersect({}) // {}
intersect(null) // {}
intersect(undefined) // {}

const obj1 = { a: 'a', b: 'b', c: 'c' }
const obj1 = { a: 'a', b: 'x', c: 'c' }
const obj3 = { a: 'a', c: 'c' } // subset of obj
intersect(obj1, obj2) // { a: 'a', b: 'b', c: 'c' }
intersect(obj1, obj3, obj2) // { a: 'a', c: 'c' }
```

## Contribute for owner

```
$ npm install -g semantic-release-cli
$ semantic-release-cli setup

Using above command to setup "semantic-release"
```

## Reference
- [PHP: array_intersect_key - Manual](http://php.net/manual/en/function.array-intersect-key.php)
