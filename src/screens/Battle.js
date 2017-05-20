import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

// Constants
import ships from '../constants/ships'

// Components
import Ship from '../components/ships/PlayerShip'
import Stats from '../components/ui/Stats'
import DamageIndicator from '../components/ui/DamageIndicator'

// Libs
import ShipLogic from '../lib/Ship'
import randomBetween from '../lib/helpers/randomBetween'

const playerStats = {
	attack: 320,
	defense: 240,
	hp: 3000,
	maxHp: 3000,
	speed: 240
}

const enemyStats = {
	attack: 80,
	defense: 60,
	hp: 500,
	maxHp: 500,
	speed: 60
}

class App extends Component {
	static state = {
		player: null,
		enemy: null,
		squad: []
	}

	death() {
		clearInterval(this.interval)
		this.props.backToStart()
	}

	componentWillMount() {
		const player = new ShipLogic(playerStats)
		const enemy = new ShipLogic(enemyStats)

		this.generateSquad()
		this.setState({ player, enemy })
	}

	componentDidMount() {
		let { player, enemy } = this.state
		let level = 1

		this.interval = setInterval(() => {
			player.attack(enemy)
			enemy.attack(player)


			if (enemy.isDead) {
				level++
				player.heal()
				enemy = new ShipLogic(enemyStats, level)
				this.generateSquad()
				this.props.enemyKilled()
				this.setState({ enemy })
			}

			if (player.isDead) {
				this.death()
				return
			}

			this.forceUpdate()
		}, 100)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	generateSquad() {
		const shipFactions = Object.keys(ships)
		const squad = [1, 2, 3, 4].map(() => ({
			faction: shipFactions[randomBetween(0, 3)],
			type: randomBetween(0, 3)
		}))

		this.setState({ squad })
	}

	render() {
		const { player, enemy, squad } = this.state

		return (
			<View style={styles.container}>
				<Stats hp={enemy.stats.hp} maxHp={enemy.stats.maxHp} />
				<View style={styles.field}>
					{squad.map((ship, i) => (
						<Ship {...ship} position="top" key={i} />
					))}
				</View>
				<View style={styles.field}>
					<Ship faction="dark-void" type={2} position="bottom" />
					<Ship faction="dark-void" type={3} position="bottom" />
					<Ship faction="dark-void" type={0} position="bottom" />
					<Ship faction="dark-void" type={1} position="bottom" />
				</View>
				<Stats hp={player.stats.hp} maxHp={player.stats.maxHp} position="bottom" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	field: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
		padding: 20
	}
})

export default App
