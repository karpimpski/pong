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

function preload() {
}

function create() {

}

function update() {

}
