export default class Ball {
  constructor(game) {
    this.game = game
    this.maxInitialY = 10
    this.initializeSprite()
    this.initializeVelocity()
  }

  initializeSprite() {
    this.sprite = this.game.physics.add.sprite(400, 300, "ball")
  }

  initializeVelocity(xVelocity = null) {
    this.sprite.x = 400
    this.sprite.y = 400
    this.velocity = { x: xVelocity || this.getInitialX(), y: this.getInitialY() }
  }

  getInitialX() {
    const xOptions = [10, -10]
    return xOptions[Math.floor(Math.random()*xOptions.length)];
  }

  getInitialY() {
    const max = this.maxInitialY
    const min = this.maxInitialY * -1
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  update() {
    this.checkVerticalBounds()
    this.checkHorizontalBounds()
    this.sprite.x += this.velocity.x
    this.sprite.y += this.velocity.y
  }

  checkVerticalBounds() {
    if(this.sprite.y >= 595 || this.sprite.y <= 5) this.velocity.y *= -1
  }

  checkHorizontalBounds() {
    if(this.sprite.x >= 800) this.game.playerOne.wonRound()
    if(this.sprite.x <= 0) this.game.playerTwo.wonRound()
  }

  bounce() {
    this.velocity.x *= -1
    
    let paddle
    if(this.game.playerOne.paddle.sprite.x === this.sprite.x) paddle = this.game.playerOne.paddle
    else paddle = this.game.playerTwo.paddle

    this.velocity.y = ((paddle.sprite.y - this.sprite.y) * -1 + this.velocity.y)/8
  }
}