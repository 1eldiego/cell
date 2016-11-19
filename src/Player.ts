export default class Player extends Phaser.Sprite {
    size: number = 500;
    accelerationRate: number = 200;

    constructor(game: Phaser.Game) {
        super(game, game.world.centerX, game.world.centerY);

        const circleGraphic: Phaser.Graphics = new Phaser.Graphics(game, 0, 0);
        circleGraphic.beginFill(0x00FF00);
        circleGraphic.drawCircle(this.size / 2, this.size / 2, this.size);
        circleGraphic.endFill();

        const circleTexture: PIXI.Texture = circleGraphic.generateTexture();

        this.loadTexture(circleTexture);
        this.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.game.add.existing(this);

        this.scale.x = 0.1;
        this.scale.y = 0.1;
        this.body.collideWorldBounds = true;
    }

    update() {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.body.velocity.x -= this.accelerationRate;
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.body.velocity.x += this.accelerationRate;
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.body.velocity.y -= this.accelerationRate;
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.body.velocity.y += this.accelerationRate;
        }
    }

    grow() {
        this.scale.x += 0.005;
        this.scale.y += 0.005;
    }
}