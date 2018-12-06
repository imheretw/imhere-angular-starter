# imhere-angular-starter ![CircleCI Build Status](https://circleci.com/gh/imheretw/imhere-angular-starter.svg?style=shield&circle-token=86e04f476d21b9b2164053879588dc4e676fc520)

Seed project for ES6 modules via Webpack4 with ES6 syntax using Babel7 that lazy-load and bundle build with AngularJS.

This project does:

- AngularJS 1.7.x + ui-router 1.0.0
- ES6 Syntax via Babel7 with source maps
- ES6 Modules via Webpack
- Single source of truth for state with ngRedux
- Mocha / Chai unit tests with coverage report
- Lazy-loading modules via routes with AngularJS
- Easy watch/browser-sync/lint/test/build setup via Webpack
- SASS CSS Support with source maps and minification
- AngularJS Template Compilation
- AngularJS Annotatation
- Bundle builds via Webpack
- Use `Webpack Bundle Analyzer` to analyze bundle treemap
- Demonstrates on-demand theme loading
- Component-based design
- Configuration management by .env

### Install & Run

#### Prerequisite
  - Node 10+
  - Ruby 2.0+

#### Install tools
```shell
$ npm install -g yarn webpack
$ gem install bundler # for capistrano to deploy
```

#### Install dependencies
```shell
$ yarn
$ bundle install
$ gem install compass
```

#### Config

```shell
$ cp .env.example .env
```

and change the setting.

#### Run

```
$ yarn start
```
Browse to `http://localhost:3000`

### Tasks

- `yarn start` to run karma tests
- `yarn test` to run karma tests
- `yarn test:watch` to watch and run karma tests
- `yarn build` to bundle, cache busting, and minify
