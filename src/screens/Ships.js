import React, { Component } from 'react'
import {
	StyleSheet,
	Dimensions,
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity
} from 'react-native'

// Components
import Currency from '../components/ui/Currency'

// Constants
import shipsList from '../constants/ships'

const { width, height } = Dimensions.get('window')

class Ships extends Component {
	render() {
		const { ships, battleShips } = this.props

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
				<Text style={styles.menuItem}>
					Available ships
				</Text>
				<ScrollView>
					<View style={styles.shipList}>
						{ships.map(({ type, name, level }, i) => (
							<TouchableOpacity key={i}>
								<View style={styles.shipWrapper}>
									<Image
										source={shipsList[type][name].image}
										style={styles.shipImage}
										resizeMode="contain"
									/>
									<Text style={styles.shipText}>
										{name.charAt(0).toUpperCase() + name.slice(1)} Lv. {level}
									</Text>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
				<Text style={styles.menuItem}>
					Current team
				</Text>
				<View style={styles.shipList}>
					{battleShips.map(({ type, name, level }, i) => (
						<TouchableOpacity key={i}>
							<View style={styles.shipWrapper}>
								<Image
									source={shipsList[type][name].image}
									style={styles.shipImage}
									resizeMode="contain"
								/>
								<Text style={styles.shipText}>
									{name.charAt(0).toUpperCase() + name.slice(1)} Lv. {level}
								</Text>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'flex-start'
	},

	topArea: {
		width,
		paddingHorizontal: 12,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	shipList: {
		alignItems: 'flex-start',
		width: width - 24,
		marginHorizontal: 12,
		marginTop: 12,
		backgroundColor: 'rgba(26, 26, 26, .55)',
		borderWidth: 3,
		borderColor: 'rgba(51, 51, 51, .3)',
		borderRadius: 3,
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingHorizontal: 4,
		paddingBottom: 4
	},

	shipWrapper: {
		borderWidth: 1,
		borderColor: 'rgba(126, 126, 126, .3)',
		backgroundColor: 'rgba(81, 81, 81, .3)',
		marginHorizontal: 2,
		marginTop: 4,
		padding: 4

	},

	shipImage: {
		width: (width - 94) / 4,
		height: (width - 94) / 4
	},

	menuItem: {
		marginHorizontal: 12,
		marginTop: 20,
		color: 'rgba(255, 255, 255, .75)',
		fontSize: 24
	},

	shipText: {
		color: 'rgba(255, 255, 255, .75)',
		fontSize: 9
	}
})

export default Ships
