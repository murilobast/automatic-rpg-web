import Ship from './Ship'
import { AsyncStorage } from 'react-native'
import * as defaults from '../constants/defaults'

class Game {
	constructor() {
		this.id = 'user1'
		this.player = defaults.playerData
		this.getPlayerData()
			.then(data => this.player = data)
	}

	getPlayerData = async () => {
		const value = await AsyncStorage.getItem(this.id)
		console.log(value)

		if (value !== null) {
			return JSON.parse(value)
		} else {
			return AsyncStorage
				.setItem(this.id, JSON.stringify(defaults.playerData))
				.then(data => data)
		}
	}

	batle() {
		let level = 1
		let enemy = new Ship(defaults.enemyBase, level)
		const player = new Player(this.player.stats)

		this.setPhases(enemy, player)
	}

	setPhases(enemy, player) {
		let pTimer = setInterval(() => {

		}, defaults.speedBase / player.speed * 25)
	}

	increaseGold(amount) {
		console.log(amount, this.player.gold)
		this.player.gold = this.player.gold + amount

		this.updateStorage()
	}

	updateStorage() {
		return AsyncStorage
			.setItem(this.id, JSON.stringify(this.player))
			.then(data => data)
	}
}

export default Game
