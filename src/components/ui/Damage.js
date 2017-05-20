import React, { Component } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'

// Constants
import colors from '../../constants/colors'

class Damage extends Component {
	state = {
		pos: new Animated.Value(0),
		opacity: new Animated.Value(1)
	}

	animate() {
		const timing = Animated.timing
		const { inverted } = this.props

		Animated.parallel([
			timing(this.state.pos, {
				toValue: inverted ? -100 : 100,
				duration: 1200
			}),
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
		return (
			<Animated.Text
				style={[
					styles.text,
					{ bottom: this.state.pos, opacity: this.state.opacity }
				]}
			>
				{this.props.damage}
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