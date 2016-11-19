export default class Enemy extends Phaser.Sprite {
    static size: number = 10;
    maxSpeed: number = 15;
    updateIndex: number = 15;
    currentIndex: number = 0;

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y);

        const circleGraphic: Phaser.Graphics = new Phaser.Graphics(game, 0, 0);
        circleGraphic.beginFill(0xCBCBCB);
        circleGraphic.drawCircle(Enemy.size / 2, Enemy.size / 2, Enemy.size);
        circleGraphic.endFill();

        const circleTexture: PIXI.Texture = circleGraphic.generateTexture();

        this.loadTexture(circleTexture);
        this.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.game.add.existing(this);
    }

    update() {
        if (this.currentIndex === this.updateIndex) {
            this.currentIndex = 0;
            this.body.velocity.x = this.maxSpeed * Math.random() * (Math.round(Math.random()) ? -1 : 1);
            this.body.velocity.y = this.maxSpeed * Math.random() * (Math.round(Math.random()) ? -1 : 1);
        }

        this.currentIndex++;
    }
}