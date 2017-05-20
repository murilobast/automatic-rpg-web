import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

// Icons
import { currency } from '../../constants/icons'

const Currency = ({ type, amount }) => (
	<View style={styles.wrapper}>
		<Image
			style={styles.icon}
			source={currency[type]}
		/>
		<Text style={styles.text}>
			{amount}
		</Text>
	</View>
)

const styles = StyleSheet.create({
	wrapper: {
		width: 120,
		height: 24,
		paddingHorizontal: 4,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'rgba(74, 74, 74, .55)',
		borderRadius: 8,
		borderColor: 'rgba(155, 155, 155, .65)',
		borderWidth: 1,
		overflow: 'visible'
	},

	icon: {
		width: 22,
		height: 22
	},

	text: {
		fontSize: 14,
		fontWeight: '500',
		color: '#fff',
		textShadowColor: 'rgba(0, 0, 0, .5)',
		textShadowRadius: 4,
		textShadowOffset: {
			width: 1,
			height: 1
		}
	}
})

export default Currency
