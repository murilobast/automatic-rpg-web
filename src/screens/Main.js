import React, { Component } from 'react'
import {
	StyleSheet,
	Dimensions,
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native'

// Components
import Currency from '../components/ui/Currency'
import CharacterResume from '../components/ui/CharacterResume'

// Libs
import Game from '../lib/Game'

const { width, height } = Dimensions.get('window')

class Main extends Component {
	render() {
		const { game, startBattle, manageShips } = this.props

		return (
			<View style={styles.wrapper}>
				<View style={styles.topArea}>
					<Currency
						type="gold"
						amount={3000}
					/>
					<Currency
						type="diamond"
						amount={3000}
					/>
				</View>
				<Image
					style={styles.logo}
					resizeMode="contain"
					source={require('../assets/images/logo.png')}
				/>
				<CharacterResume
					avatarId={0}
					stats={{
						attack: 100,
						defense: 100,
						speed: 100,
						maxHp: 100
					}}
					worldCount={3}
					shipCount={8}
				/>
				<View style={styles.menuList}>
					<TouchableOpacity onPress={() => startBattle()}>
						<Text style={[ styles.menuItem, styles.menuItemMain ]}>
							EXPLORE
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => manageShips()}>
						<Text style={styles.menuItem}>
							SHIPS
						</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuItem}>
							STATS
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center'
	},

	topArea: {
		width,
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	logo: {
		width: width - 40,
		marginTop: 20,
		height: height / 4
	},

	menuList: {
		alignItems: 'center'
	},

	menuItem: {
		margin: 6	,
		color: 'rgba(255, 255, 255, .75)',
		fontSize: 28
	},

	menuItemMain: {
		color: '#fff',
		fontSize: 36
	}
})

export default Main
