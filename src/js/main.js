import Player from "./player/Player.js"

const config = {
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

function preload() {
  this.load.image("paddle", "../assets/paddle.png")
}

function create() {
  playerOne = new Player(this)
}

function update() {
  playerOne.update()
}
