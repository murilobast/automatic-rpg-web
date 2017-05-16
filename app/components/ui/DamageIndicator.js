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
		const queue = [...this.state.queue]
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
			this.pushItem()
		}, 300)
	}

	generateKey(damage) {
		return `${(Math.random() * 20).toFixed(0)}-item-${damage}`
	}

	unmountItem(_id) {
		setTimeout(() => {
			const queue = [...this.state.queue].filter(({id}) => id !== _id)

			this.setState({ queue })
		}, 1200)
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