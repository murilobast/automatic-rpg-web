import React, { Component } from 'react'
import {
	NavigationExperimental,
	BackAndroid,
	StyleSheet,
	StatusBar,
	Dimensions,
	View,
	Image
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { navigatePop } from '../ducks/navigation'
// Local imports
import colors from '../constants/colors'
import AppRouter from './AppRouter'

const { height, width } = Dimensions.get('window')

const {
	Transitioner: NavigationTransitioner,
	Card: NavigationCard
} = NavigationExperimental

@connect(state => ({
	navigationState: state.navigation
}), dispatch => ({
	backAction: () => dispatch(navigatePop())
}))

class AppNavigator extends Component {
	static propTypes = {
		navigationState: PropTypes.object,
		backAction: PropTypes.func.isRequired
	}

	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress', () => {
			console.log('state', this.props.navigationState)
			if (this.props.navigationState.index) {
				this.props.backAction()

				return true
			}

			return false
		})
	}

	render() {
		let { navigationState, backAction } = this.props

		return (
			<View style={styles.container}>
				<Image
					source={require('../assets/images/bg1.jpg')}
					style={styles.imageContainer}
					resizeMode="cover"
				>
					<StatusBar
						barStyle="light-content"
						translucent={true}
						hidden={true}
					/>
					<NavigationTransitioner
						navigationState={navigationState}
						style={styles.container}
						render={props => (
							<View style={styles.container}>
								<NavigationCard
									{...props}
									style={styles.container}
									onNavigateBack={backAction}
									renderScene={({ scene }) => AppRouter(scene)}
									key={props.scene.route.key}
									panHandlers={null}
								/>
							</View>
						)}
					/>
				</Image>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	imageContainer: {
		width,
		paddingVertical: 24,
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0)'
	},

	container: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0)'
	}
})

export default AppNavigator
