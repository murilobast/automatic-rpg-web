import { connect } from 'react-redux'
import {
	compose,
	withState,
	lifecycle,
	withHandlers
} from 'recompose'

// Components
import BattleView from '../../screens/Battle'

// Ducks
import { navigatePop } from '../../ducks/navigation'
import { enemyKilled, takeDamage, clearDamage } from '../../ducks/battle'

// Lib
import ShipLogic from '../../lib/Ship'
import randomBetween from '../../lib/helpers/randomBetween'

// Constants
import ships from '../../constants/ships'

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

const playerInterval = null
const enemyInterval = null

const getMileseconds = speed => Math.min(1000, Math.max(200, 1000 / speed * 10))

const mapStateToProps = ({ battle, game }) => ({
	battle,
	game
})

const mapDispatchToProps = dispatch => ({
	takeDamage: damage => dispatch(takeDamage(damage)),
	clearDamage: id => dispatch(clearDamage(id)),
	backToStart: () => dispatch(navigatePop()),
	enemyKilled: () => dispatch(enemyKilled())
})

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withState('player', 'updatePlayer', new ShipLogic(playerStats)),
	withState('enemy', 'updateEnemy', new ShipLogic(enemyStats)),
	withState('squad', 'updateSquad', []),
	withHandlers({
		generateSquad: ({ updateSquad }) => () => {
			const shipFactions = Object.keys(ships)
			const squad = [1, 2, 3, 4].map(() => {
				const faction = shipFactions[randomBetween(0, 3)]
				const type = Object.keys(ships[faction])[randomBetween(0, 3)]
				return {
					faction,
					type
				}
			})
			updateSquad(squad)
		},
	}),
	withHandlers({
		getShipByIndex: () => (faction, index) =>
			Object.keys(ships[faction])[index],
		death: ({ backToStart }) => () => {
			clearInterval(playerInterval)
			clearInterval(enemyInterval)
			backToStart()
		},
		enemyAttack: ({ enemy, player }) => update => {
			clearInterval(enemyInterval)
			enemyInterval = setInterval(() => {
				enemy.attack(player)
				update()
			}, getMileseconds(enemy.stats.speed))
		}
	}),
	lifecycle({
		componentWillMount() {
			const { generateSquad } = this.props
			generateSquad()
		},
		componentDidMount() {
			const {
				death,
				takeDamage,
				updateEnemy,
				enemyKilled,
				enemyAttack,
				generateSquad,
				player: { stats },
			} = this.props
			let level = 1
			enemyAttack(() => this.forceUpdate())
			playerInterval = setInterval(() => {
				const {
					enemy,
					player,
				} = this.props
				const damage = player.attack(enemy)
				console.log(damage)
				takeDamage(damage)
				if (enemy.isDead) {
					level++
					player.heal()
					generateSquad()
					enemyKilled()
					updateEnemy(new ShipLogic(enemyStats, level))
					enemyAttack(() => this.forceUpdate())
				}
				if (player.isDead) {
					player.reset()
					death()
					return
				}
				this.forceUpdate()
			}, getMileseconds(stats.speed))
		},
		componentWillUnmount() {
			clearInterval(playerInterval)
			clearInterval(enemyInterval)
		}
	})
)(BattleView)
