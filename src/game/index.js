'use strict';
'format es6';

/*LIBRARIES*/
import PhaserLib from 'photonstorm/phaser';

/*GAME STATES*/
import BootState from 'game/states/boot';
import GameOverState from 'game/states/gameover';
import MenuState from 'game/states/menu';
import PreLoadState from 'game/states/preload';
import PlayState from 'game/states/play';

export default {
  PHASER: {
    Phaser: PhaserLib.Phaser
  },
  STATES: {
    BootState: BootState,
    PreLoadState: PreLoadState,
    MenuState: MenuState,
    PlayState: PlayState,
    GameOverState: GameOverState
  },
};