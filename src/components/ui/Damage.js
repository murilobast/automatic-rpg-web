import React, { Component } from 'react'
import {
	Animated: { parallel, Text, Value, timing },
	StyleSheet,
	Text
} from 'react-native'

// Constants
import colors from '../../constants/colors'

class Damage extends Component {
	state = {
		pos: new Value(0),
		opacity: new Value(1)
	}

	animate() {
		const { inverted } = this.props
		parallel([
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
		setTimeout(() => {
			this.props.clearDamage()
		}, 500)
	}

	render() {
		return (
			<Text
				style={[
					styles.text,
					{ bottom: this.state.pos, opacity: this.state.opacity }
				]}
			>
				{this.props.damage}
			</Text>
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
