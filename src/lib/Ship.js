class Ship {
	constructor(data, level = 1) {
		this.stats = { ...data }
		this.isDead = false
		this.level = level

		if (this.level > 1)
			this.generateStas()
	}

	generateStas() {
		for (let prop in this.stats) {
			let stat = this.stats[prop]
			stat += parseInt((stat * (this.level * .07)).toFixed(0))

			this.stats[prop] = stat
		}
	}

	attack(enemy) {
		const { attack } = this.stats
		const { defense } = enemy.stats
		const variableAttack = attack + attack * (Math.random() * .30 / 2)
		const damage = parseInt((variableAttack * (attack / (attack + defense))).toFixed(0))

		enemy.takeDamage(damage)
	}

	takeDamage(damage) {
		if (this.stats.hp - damage <= 0) {
			this.stats.hp = 0

			this.isDead = true
			return
		}

		this.stats.hp -= damage

		// console.log('ouch!', this.stats.hp)
	}

	heal() {
		this.stats.hp = this.stats.maxHp
	}
}

export default Ship