import React from 'react'
import { StyleSheet, Dimensions, View, Text } from 'react-native'

// Constants
import colors from '../../constants/colors'

const { height, width } = Dimensions.get('window')

const Bar = ({ fillAmount, text }) => (
	<View style={styles.bar}>
		<Text style={styles.text}>
			{text}
		</Text>
		<View
			style={[ styles.filled, { width: fillAmount * (width - 40) } ]}
		/>
	</View>
)

const styles = StyleSheet.create({
	bar: {
		zIndex: 5,
		marginHorizontal: 20,
		width: width - 40,
		height: 24,
		borderRadius: 2,
		overflow: 'hidden',
		backgroundColor: colors.bluishGray,
		borderWidth: 2,
		borderColor: colors.dark,
		alignItems: 'center',
		justifyContent: 'center'
	},

	filled: {
		position: 'absolute',
		left: 0,
		top: 0,
		height: 24,
		backgroundColor: colors.green,
		opacity: .45
	},

	text: {
		color: '#fff',
		fontWeight: '300',
		fontSize: 12
	}
})

export default Bar
