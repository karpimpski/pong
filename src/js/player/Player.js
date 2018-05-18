import Paddle from "../obstacles/Paddle.js"

export default class Player {
  constructor(game) {
    this.game = game
    this.paddle = new Paddle(game, 10, 50, 300)
    this.speed = 10
    this.createKeys()
  }

  /**
   * Creates variables for movement keys.
   */
  createKeys() {
    this.upKey = this.game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.downKey = this.game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
  }

  update() {
    this.movePaddle()
  }
  
  /**
   * Checks keyboard input and moves paddle in the appropriate direction.
   */
  movePaddle() {
    if(this.upKey.isDown) this.paddle.move(this.speed * -1)
    if(this.downKey.isDown) this.paddle.move(this.speed)
  }
}