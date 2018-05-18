import Player from "./player/Player.js"

const config = {
  height: 600,
  width: 800,
  type: Phaser.AUTO,
  physics: {
    default: "arcade"
  },
  parent: "#canvas",
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  color: "#FFFFFF"
}

const game = new Phaser.Game(config)
let playerOne
let playerTwo

function preload() {
  this.load.image("paddle", "../assets/paddle.png")
}

function create() {
  playerOne = new Player(this, Phaser.Input.Keyboard.KeyCodes.W, Phaser.Input.Keyboard.KeyCodes.S, 50)
  playerTwo = new Player(this, Phaser.Input.Keyboard.KeyCodes.UP, Phaser.Input.Keyboard.KeyCodes.DOWN, config.width - 50)
}

function update() {
  playerOne.update()
  playerTwo.update()
}
