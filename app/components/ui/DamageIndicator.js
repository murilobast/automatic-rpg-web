import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

// Components
import Damage from './Damage'

// Constants
import colors from '../../constants/colors'

class DamageIndicator extends Component {
	state = {
		queue: []
	}

	pushItem() {
		const { queue } = this.state
		const damage = (Math.random() * 1500).toFixed(0)
		const id = this.generateKey(damage)

		queue.push({
			value: damage,
			id
		})

		this.setState({ queue })

		this.unmountItem(id)
	}

	componentDidMount() {
		setInterval(() => {
			// this.pushItem()
		}, 300)
	}

	generateKey(damage) {
		return `${(Math.random() * 20).toFixed(0)}-item-${damage}`
	}

	unmountItem(id) {

		setTimeout(() => {
			let { queue } = this.state
			let index = queue.findIndex((item) => item.id === id)
			queue = queue.splice(index, 1)

			this.setState({ queue })
		}, 2000)
	}

	render() {
		const { queue } = this.state

		return (
			<View>
				{queue.map(({ value, id }) => (
					<Damage
						damage={value}
						key={id}
					/>
				))}
			</View>
		)
	}
}

export default DamageIndicator