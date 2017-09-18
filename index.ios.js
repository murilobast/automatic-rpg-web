/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, StatusBar, StyleSheet, View, AppRegistry, Image } from 'react-native'

// Constants
import colors from './src/constants/colors'

// Components
import App from './src/containers/App'

const { height, width } = Dimensions.get('window')

class Extraction extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					translucent={true}
					hidden={true}
					backgroundColor="rgba(0, 0, 0, 0.1)"
				/>
				<Image
					source={require('./src/assets/images/bg1.jpg')}
					style={styles.imageContainer}
					resizeMode="cover"
				>
					<App />
				</Image>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dark
	},

	imageContainer: {
		width,
		paddingVertical: 24,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

	}
});

AppRegistry.registerComponent('Extraction', () => App);
