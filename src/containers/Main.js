import { connect } from 'react-redux'

// Components
import MainView from '../screens/Main'

// Ducks
import { navigatePush } from '../ducks/navigation'

const mapStateToProps = ({ game }) => ({
	game
})

const mapDispatchToProps = dispatch => ({
	startBattle: () => dispatch(navigatePush({ key: 'Battle' })),
	manageShips: () => dispatch(navigatePush({ key: 'Ships' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
