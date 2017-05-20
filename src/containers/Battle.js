import { connect } from 'react-redux'

// Components
import BattleView from '../screens/Battle'

// Ducks
import { navigatePop } from '../ducks/navigation'
import { enemyKilled } from '../ducks/battle'

const mapStateToProps = ({ battle, game }) => ({
	battle,
	game
})

const mapDispatchToProps = dispatch => ({
	backToStart: () => dispatch(navigatePop()),
	enemyKilled: () => dispatch(enemyKilled())
})

export default connect(mapStateToProps, mapDispatchToProps)(BattleView)
