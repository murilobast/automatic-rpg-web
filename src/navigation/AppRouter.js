import React from 'react'
import Main from '../containers/Main'
import Battle from '../containers/Battle'
import Ships from '../containers/Ships'

const AppRouter = props => {
	const { key } = props

	if (key === 'scene_Main') {
		return <Main />
	}

	if (key === 'scene_Battle') {
		return (
			<Battle />
		)
	}

	if (key === 'scene_Ships') {
		return (
			<Ships />
		)
	}

	throw new Error('Unknown navigation key: ' + key)
}

export default AppRouter
