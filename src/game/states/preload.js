'use strict';
'format es6';

export default class PreLoadState{
  constructor() {}

  preload() {}

  create() {}

  update() {
    return this.game.state.start('menu');
  }
}