import { connect } from 'react-redux'

// Components
import ShipsView from '../screens/Ships'

// Ducks
import { navigatePop } from '../ducks/navigation'
import { enemyKilled } from '../ducks/battle'

const mapStateToProps = ({ game, player }) => ({
	ships: game.ships,
	battleShips: game.battleShips
})

const mapDispatchToProps = dispatch => ({
	backToStart: () => dispatch(navigatePop()),
	enemyKilled: () => dispatch(enemyKilled())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShipsView)
