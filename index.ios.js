/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, AppRegistry, Image } from 'react-native'

// Constants
import colors from './app/constants/colors'

// Components
import App from './app/main'

const { height, width } = Dimensions.get('window')

class Extraction extends Component {
	render() {
		return (
			<Image
				source={require('./app/assets/images/bg1.jpg')}
				style={styles.container}
				resizeMode="cover"
			>
				<App />
			</Image>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 24,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.dark,
		width
	}
});

AppRegistry.registerComponent('Extraction', () => Extraction);
