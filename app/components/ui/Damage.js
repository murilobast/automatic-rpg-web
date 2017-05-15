import React, { Component } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'

// Constants
import colors from '../../constants/colors'

class Damage extends Component {
	state = {
		pos: new Animated.Value(0),
		opacity: new Animated.Value()
	}

	animate() {
		const timing = Animated.timing;

		Animated.sequence([
			timing(this.state.pos, {
				toValue: 100,
				duration: 1200
			}),
			Animated.delay(400),
			timing(this.state.opacity, {
				toValue: 0,
				duration: 1200
			})
		]).start()
	}

	componentWillMount() {
		this.animate()
	}

	render() {
		const { damage, id } = this.props
		const { pos, opacity } = this.state

		console.log('spawn', id)

		return (
			<Animated.Text
				style={[
					styles.text,
					{ bottom: pos }
				]}
			>
				{damage}
			</Animated.Text>
		)
	}
}

const styles = StyleSheet.create({
	text: {
		position: 'absolute',
		color: colors.red,
		fontWeight: '500',
		paddingHorizontal: 4 
	}
})

export default Damage