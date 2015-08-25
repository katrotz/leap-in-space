'use strict';
'format es6';

Promise.all([
  System.import('config.game'),
  System.import('game/index'),
]).then(function(moduleExports){
    let cfgModuleExports = moduleExports[0];
    let gameModuleExports = moduleExports[1];

    let gameConfig = cfgModuleExports.default;
    let LIS = gameModuleExports.default;

    let game = new LIS.PHASER.Phaser.Game(gameConfig);

    game.state.add('boot', LIS.STATES.BootState);
    game.state.add('preload', LIS.STATES.PreLoadState);
    game.state.add('menu', LIS.STATES.MenuState);
    game.state.add('play', LIS.STATES.PlayState);
    game.state.add('gameover', LIS.STATES.GameOverState);

    game.state.start('boot');

  }).catch(function(e) {
    window.setTimeout(function(){
      console.log(e);
    }, 0);
  });
