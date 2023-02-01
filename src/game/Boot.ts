import level1 from '../data/level1.json';
import level2 from '../data/level2.json';
export class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    console.log('Boot.preload()');

    this.load.setCORS('crossOrigin');
    this.load.setBaseURL('https://ninja-code-club.s3.us-west-1.amazonaws.com/');

    this.load.json('level:1', level1);
    this.load.json('level:2', level2);

    this.load.image('background', 'images/background.png');
    this.load.image('ground', 'images/ground.png');
    this.load.image('grass:8x1', 'images/grass_8x1.png');
    this.load.image('grass:6x1', 'images/grass_6x1.png');
    this.load.image('grass:4x1', 'images/grass_4x1.png');
    this.load.image('grass:2x1', 'images/grass_2x1.png');
    this.load.image('grass:1x1', 'images/grass_1x1.png');
  }

  create() {
    console.log('Boot.create()');
    this.scene.start('Play');
  }
}