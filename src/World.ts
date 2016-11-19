import Player from './Player';
import Enemy from './Enemy';

export default class World extends Phaser.State {
    player: Player;
    enemies: Array<Enemy> = [];
    maxEnemies: number = 30;

    create() {
        for (let index = 0; index < this.maxEnemies; index++) {
            this.enemies.push(this.createRandomEnemy());
        }

        this.player = new Player(this.game);
    }

    createRandomEnemy(): Enemy {
        return new Enemy(
            this.game,
            this.game.world.width * Math.random() - Enemy.size,
            this.game.world.height * Math.random() - Enemy.size
        );
    }

    playerCollision(player: Player, enemy: Enemy): void {
        enemy.kill();
        player.grow();
        this.enemies.splice(this.enemies.indexOf(enemy), 1, this.createRandomEnemy());
    }

    update() {
        this.game.physics.arcade.collide(this.player, this.enemies, this.playerCollision.bind(this));
    }
}