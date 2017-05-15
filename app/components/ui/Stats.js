import React from 'react'
import { StyleSheet, Dimensions, View, Text } from 'react-native'

// Constants
import colors from '../../constants/colors'

// Components
import Bar from './Bar'

const { height, width } = Dimensions.get('window')

const Stats = ({ hp, maxHp }) => (
	<View style={styles.stats}>
		<Bar
			text={`${hp}/${maxHp}`}
			fillAmount={hp / maxHp}
		/>
	</View>
)

const styles = StyleSheet.create({
	stats: {
		
	}
})

export default Stats
