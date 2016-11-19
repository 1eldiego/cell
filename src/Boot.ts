export default class Boot extends Phaser.State {
    create() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.game.state.start('MainMenu');
    }
}