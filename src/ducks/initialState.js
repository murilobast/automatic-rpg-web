export default {
	game: {
		gold: 2000,
		diamonds: 150,
		worlds: 8,
		ships: [
			{ name: 'destroyer', level: 1, type: 'alien' },
			{ name: 'destroyer', level: 1, type: 'red' },
			{ name: 'cargo', level: 1, type: 'human' },
			{ name: 'carrier', level: 1, type: 'void' },
			{ name: 'cruiser', level: 1, type: 'alien' }
		],

		battleShips: [
			{ name: 'destroyer', level: 32, type: 'alien' },
			{ name: 'cruiser', level: 44, type: 'red' },
			{ name: 'cargo', level: 20, type: 'human' },
			{ name: 'carrier', level: 12, type: 'krost' }
		]
	},

	player: {
		attack: 100,
		defense: 100,
		speed: 100,
		maxHp: 500
	},

	enemy: {
		attack: 10,
		defense: 100,
		speed: 100,
		maxHp: 500
	},

	battle: {
		level: 0,
		baseGold: 25,
		totalGold: 0
	},

	navigation: {
		index: 0,
		routes: [
			{ key: 'Main' }
		]
	}
}
