import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

// Components
import Damage from './Damage'

// Constants
import colors from '../../constants/colors'

const DamageIndicator = ({ position, queue, clearDamage }) => (
	<View>
		{queue.map(({ value, id }) => (
			<Damage
				damage={value}
				inverted={position === "bottom"}
				key={id}
				clearDamage={() => clearDamage(id)}
			/>
		))}
	</View>
)

export default DamageIndicator
