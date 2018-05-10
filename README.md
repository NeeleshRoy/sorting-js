# [sorting-js](https://github.com/neeleshroy/sorting-js)

[![npm version](https://badge.fury.io/js/sorting-javascript.svg?style=flat-square)](https://badge.fury.io/js/sorting-javascript)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://lbesson.mit-license.org/)
[![Build Status](https://travis-ci.org/NeeleshRoy/sorting-js.svg?branch=develop)](https://travis-ci.org/NeeleshRoy/sorting-js)
[![Coverage Status](https://coveralls.io/repos/github/NeeleshRoy/sorting-js/badge.svg?style=flat-square)](https://coveralls.io/github/NeeleshRoy/sorting-js)
[![dependencies Status](https://david-dm.org/neeleshroy/sorting-js/status.svg?style=flat-square)](https://david-dm.org/neeleshroy/sorting-js)

> Sorting algorithms implemented in JS

### How to Install

```sh
$ npm install sorting-javascript
```

### Getting Started

ES6 - Use named imports
```javascript
  import { insertionSort } from 'sorting-javascript'
  insertionSort([7, 2, 5]) // Output - [2, 5, 7]
```

Node.JS require
```javascript
  var sort = require('sorting-javascript')
  sort.insertionSort([7, 2, 5]) // Output - [2, 5, 7]
```

There is an extra utility function called ArrayTestBed which generates random numbers
to test the sorting algorithms.
```javascript
  import { ArrayTestBed } from 'sorting-javascript'
  const test = new ArrayTestBed(1000);
  test.setData() // test variable will have 1000 randomly generated numbers between 0-1000
```
By default, it will contain unique elements. If you pass random = false to the setData function, then the result will contain duplicates.
eg:
```javascript
  test.setData(false) // [5, 6, 6, 8, 3, 2, 2]
  test.setData() // [1, 7, 6, 8, 3, 2, 5]
```

## For Geeks :P
### How to Test

Run one, or a combination of the following commands to lint and test your code:

```sh
$ npm run lint          # Lint the source code with ESLint
$ npm test              # Run unit tests with Mocha
$ npm run test:watch    # Run unit tests with Mocha, and watch files for changes
$ npm run test:cover    # Run unit tests with code coverage by Istanbul
```

To launch the documentation site, run:

```sh
$ npm install -g easystatic
$ npm start
```

### License

MIT © 2016 Neelesh Roy
