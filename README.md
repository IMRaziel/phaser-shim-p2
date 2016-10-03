# Phaser Shim

A shim to make Phaser HTML5 game engine from NPM work with Webpack, and build properly. **(NOW WITH P2!!!!)**

> [Phaser doesn't work with Webpack and require](https://github.com/photonstorm/phaser/issues/1974)

## Installation

```sh
npm install phaser-shim-p2 --save
```

## Usage

This version can be used in the same way as the original `phaser-shim`.

### Module

```js
// game.js

require('phaser-shim-p2');

var game = new Phaser.Game(800, 600);
```

or ES6:

```js
// Game.js

import 'phaser-shim-p2';

class Game extends Phaser.Game {
  constructor (width, height) {
    super(width, height);
  }
}
```

```js
// game.js

import Game from './Game';

const game = new Game(800, 600);
```

or several per module:

```js
import {Game, State} from 'phaser-shim-p2';
```

or TypeScript:

```typescript
/// <reference path="../node_modules/phaser-shim-p2/typescript/phaser.comments.d.ts" />

declare module 'phaser-shim' {
  export = Phaser;
}
```

### Webpack

```js
// webpack.config.js

module: {
  // ...
  loaders: [{
    loader: 'script',// script-loader
    test: /(pixi|phaser).js/
  }],
  // ...
}
```

## Development

If you want to use other Phaser version (old or new) in yourself:

1. Fork this repo and git clone to local.
2. `npm install` with node v4.x
3. `npm run build` to building `dist/pixi` and `dist/phaser`
4. now you can `require` or `import` your `phaser-shim`

## Contributors

- @AnimaMundi
- @thosakwe
