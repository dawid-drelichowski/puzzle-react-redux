# Puzzle based on React and Redux [![Build Status](https://travis-ci.org/dawid-drelichowski/puzzle-react-redux.svg?branch=master)](https://travis-ci.org/dawid-drelichowski/puzzle-react-redux) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

Simple drag and drop puzzle game which uses native HTML 5 drag and drop feature, based on [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/).

## Requirements

* [Node.js](https://nodejs.org/) version 4.6.0 or higher.
* Optionally [Yarn](https://yarnpkg.com/lang/en/) as alternative to [NPM](https://www.npmjs.com/) package manager.

## Installation

Depending on preferred package manager execute `yarn install` or `npm install` command.  
There is no build assets version attached with this repository. To build them run `npm run build`.  

## Usage

Run **index.html** in favorite browser.

## Tests

Based on [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme).

Command: `npm test`

## Development

To rebuild assets every time they change execute `npm run build:dev`.  
There is a better way: `npm run watch` command will continue running in terminal and watch all relevant files for changes.  
[Webpack](https://webpack.github.io/) will then automatically recompile assets when it detects a change.  

Minified version of assets can be build with `npm run build`.


## NPM scripts

Available [NPM](https://www.npmjs.com/) scripts:

* `npm run build` combine related scripts/styles and minimizes them with [Webpack](https://webpack.github.io/).
* `npm run build:dev` combine related scripts/styles with [Webpack](https://webpack.github.io/).
* `npm run lint` runs [ESLint](http://eslint.org/) source code check.
* `npm test` runs tests.
* `npm run watch` runs combination of related scripts/styles in [Webpack's watch mode](https://webpack.github.io/docs/tutorials/getting-started/#watch-mode).
