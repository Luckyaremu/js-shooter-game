import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('lucky', 'src/assets/images/lucky.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}