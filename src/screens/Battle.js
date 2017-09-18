import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

// Components
import Ship from '../components/ships/PlayerShip'
import Stats from '../components/ui/Stats'
import DamageIndicator from '../components/ui/DamageIndicator'

const Battle = ({ player, enemy, squad, getShipByIndex, battle, clearDamage }) => (
	<View style={styles.container}>
		<Stats hp={enemy.stats.hp} maxHp={enemy.stats.maxHp} />
		<View style={styles.field}>
			{squad.map((ship, i) => (
				<Ship {...ship} position="top" key={i} />
			))}
		</View>
		<DamageIndicator
			queue={battle.damageQueue}
			clearDamage={clearDamage}
		/>
		<View style={styles.field}>
			<Ship faction="void" type={getShipByIndex('void', 2)} position="bottom" />
			<Ship faction="void" type={getShipByIndex('void', 3)} position="bottom" />
			<Ship faction="void" type={getShipByIndex('void', 0)} position="bottom" />
			<Ship faction="void" type={getShipByIndex('void', 1)} position="bottom" />
		</View>
		<Stats hp={player.stats.hp} maxHp={player.stats.maxHp} position="bottom" />
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 24
	},

	field: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
		padding: 20
	}
})

export default Battle
