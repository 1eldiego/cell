export default class MainMenu extends Phaser.State {
    title: Phaser.Text;
    subTitle: Phaser.Text;
    anyKey: Phaser.Text;
    blinkTimer: Phaser.Timer;

    create() {
        this.title = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'C E L L', {
            font: '56px Arial',
            fill: '#00FF00',
            align: 'center'
        });

        this.subTitle = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 50, 'THE GAME', {
            font: '36px Arial',
            fill: '#00AA00',
            align: 'center'
        });

        this.anyKey = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 250, 'PRESS ANY KEY TO START', {
            font: '16px Arial',
            fill: '#CCCCCC',
            align: 'center'
        });

        this.title.anchor.set(0.5);
        this.subTitle.anchor.set(0.5);
        this.anyKey.anchor.set(0.5);

        this.input.keyboard.onDownCallback = this.startGame.bind(this);

        this.blinkTimer = this.time.create();
        this.blinkTimer.repeat(800, Infinity, this.blinkAnyKey, this);
        this.blinkTimer.start();
    }

    startGame() {
        this.blinkTimer.destroy();
        this.input.keyboard.onDownCallback = null;
        this.game.state.start('World');
    }

    blinkAnyKey() {
        if (this.anyKey.alpha) {
            this.anyKey.alpha = 0;
        } else {
            this.anyKey.alpha = 1;
        }
    }
}