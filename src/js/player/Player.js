import Paddle from "../obstacles/Paddle.js"

export default class Player {
  constructor(game, upCode, downCode, direction, x) {
    this.game = game
    this.direction = direction
    this.paddle = new Paddle(game, this, x, 300)
    this.speed = 10
    this.upKey = game.input.keyboard.addKey(upCode)
    this.downKey = game.input.keyboard.addKey(downCode)
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

  wonRound() {
    this.game.ball.initializeVelocity(this.direction)
  }
}