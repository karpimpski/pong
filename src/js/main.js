import Player from "./player/Player.js"
import Ball from "./obstacles/Ball.js"

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

function preload() {
  this.load.image("paddle", "../assets/paddle.png")
  this.load.image("ball", "../assets/ball.png")
}

function create() {
  this.playerOne = new Player(this, Phaser.Input.Keyboard.KeyCodes.W, Phaser.Input.Keyboard.KeyCodes.S, -10, 50)
  this.playerTwo = new Player(this, Phaser.Input.Keyboard.KeyCodes.UP, Phaser.Input.Keyboard.KeyCodes.DOWN, 10, config.width - 50)
  this.ball = new Ball(this)
  setupCollisions(this)
}

function update() {
  this.playerOne.update()
  this.playerTwo.update()
  this.ball.update()
}

function setupCollisions(g) {
  g.physics.add.collider(g.ball.sprite, g.playerTwo.paddle.sprite, g.ball.bounce, null, g.ball)
  g.physics.add.collider(g.ball.sprite, g.playerOne.paddle.sprite, g.ball.bounce, null, g.ball)
}