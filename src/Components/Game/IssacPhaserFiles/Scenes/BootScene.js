import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }
  preload() {
    this.load.image("phaser-logo", "assets/logo.png");
  }

  create(data) {
    this.scene.start("Preloader", data);
  }
}
