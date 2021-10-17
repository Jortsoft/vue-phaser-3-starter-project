
import { Scene } from 'phaser'
import { game } from '../game.js'

export default class play extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  create() {
      console.log('this is play scene :)')
  }

  update() {

  }
}