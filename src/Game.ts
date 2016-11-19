/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />

import Boot from './Boot';
import MainMenu from './MainMenu';
import World from './World';

export default class Game extends Phaser.Game {
    constructor() {
        super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'content', null);

        this.state.add('Boot', Boot, false);
        this.state.add('MainMenu', MainMenu, false);
        this.state.add('World', World, false);
        this.state.start('Boot');
    }
}