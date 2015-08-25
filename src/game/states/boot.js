'use strict';
'format es6';

import PhaserLib from 'photonstorm/phaser';

export default class BootState{
  constructor() {

  }

  init() {
    //Align the game canvas
    this.game.scale.scaleMode = PhaserLib.Phaser.ScaleManager.NO_SCALE; //EXACT_FIT | NO_SCALE | SHOW_ALL | RESIZE
    this.game.scale.pageAlignVertically = true;
    this.game.scale.pageAlignHorizontally = true;
  }

  preload() {
    this.game.stage.backgroundColor = '#182d3b';
  }

  create() {

  }

  start() {

  }

  loadStart() {

  }

  update() {

  }
}