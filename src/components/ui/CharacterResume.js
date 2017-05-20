import React from 'react'
import { StyleSheet, Dimensions, View, Image, Text } from 'react-native'

// Icons
import avatars from '../../constants/avatars'

const { width, height } = Dimensions.get('window')

const CharacterResume = ({ avatarId, stats, worldCount, shipCount }) => (
	<View style={styles.wrapper}>
		<Image
			style={styles.avatar}
			source={avatars[avatarId]}
		/>
		<View style={styles.info}>
			<Text style={styles.text}>
				{worldCount} Planets
			</Text>
			<Text style={styles.text}>
				{shipCount} Ships
			</Text>
			<Text style={styles.text}>
				{stats.attack} A {stats.speed} S {stats.defense} D {stats.maxHp} HP
			</Text>
		</View>
	</View>
)

const styles = StyleSheet.create({
	wrapper: {
		width: width - 20,
		backgroundColor: 'rgba(20, 32, 36, .55)',
		marginHorizontal: 20,
		marginBottom: 20,
		flexDirection: 'row',
		padding: 8,
		borderColor: 'rgba(83, 108, 126, .25)',
		borderWidth: 1,
		borderRadius: 3,
		elevation: 1
	},

	avatar: {
		width: 64,
		height: 64
	},

	info: {
		paddingLeft: 12,
		flexDirection: 'column'
	},

	text: {
		fontSize: 16,
		color: '#fff',
		textShadowColor: 'rgba(0, 0, 0, .5)',
		textShadowRadius: 4,
		textShadowOffset: {
			width: 1,
			height: 1
		}
	}
})

export default CharacterResume
