export default class Paddle {
  /**
   * @param {Phaser.Game} game - current game object.
   * @param {Int} player - player in control of paddle.
   * @param {Int} x - x coordinate for sprite.
   * @param {Int} y - initial y coordinate for sprite.
   */
  constructor(game, player, x, y) {
    this.game = game
    this.player = player
    this.x = x
    this.y = y
    this.sprite = this.spriteSetup()
  }
  
  /**
   * Creates and returns a paddle sprite based on x and y values given in constructor.
   */
  spriteSetup() {
    let sprite = this.game.physics.add.sprite(this.x, this.y, "paddle")
    sprite.setCollideWorldBounds(true)
    return sprite
  }

  /**
   * Moves the paddle along the Y axis.
   * @param {Int} speed - speed in which to move paddle (negative to move up, positive to move down).
   */
  move(speed) {
    this.sprite.y += speed
  }
}