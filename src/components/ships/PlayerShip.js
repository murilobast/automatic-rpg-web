import React, { Component } from 'react'
import { Animated, Easing, Dimensions, Image } from 'react-native'

// Constants
import ships from '../../constants/ships'
import bosses from '../../constants/bosses'

const { height, width } = Dimensions.get('window')
const DURATION = 2000

class PlayerShip extends Component {
	state = {
		pan: new Animated.ValueXY()
	}

	getHorizontalRandom = range => Math.random() * range - (range / 2)

	animate() {
		Animated.timing(
			this.state.pan, {
				toValue: {
					x: this.getHorizontalRandom(8),
					y: this.getHorizontalRandom(6)
				},
				duration: DURATION,
				easing: Easing.linear
			}
		).start()
	}

	componentDidMount() {
		this.animate()

		setInterval(() => {
			this.animate()
		}, DURATION)
	}

	getShipData() {
		const { faction, boss, type } = this.props
		return !boss ?
			ships[faction][type] :
			bosses[faction]
	}

	render() {
		const { position, boss } = this.props
		const ship = this.getShipData()
		const rotation = position === 'top' ? '180deg' : '0deg'
		const shipWidth = boss ? (width - 40) * .5 : (width - 40) / 4

		return (
			<Animated.Image
				resizeMode="contain"
				style={[
					{
						width: shipWidth,
						transform: [{ rotate: rotation }]
					},
					this.state.pan.getLayout()
				]}
				source={ship.image}
			/>
		)
	}
}

export default PlayerShip
