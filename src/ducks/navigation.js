import { handleActions } from 'redux-actions'
import { NavigationExperimental } from 'react-native'
import initialState from './initialState'

console.log(NavigationExperimental)

const { StateUtils: NavigationStateUtils } = NavigationExperimental

const NAVIGATION_POP = 'NAVIGATION_POP'
const NAVIGATION_PUSH = 'NAVIGATION_PUSH'
const NAVIGATION_RESET = 'NAVIGATION_RESET'
const NAVIGATION_JUMP_TO_KEY = 'NAVIGATION_JUMP_TO_KEY'
const NAVIGATION_JUMP_TO_INDEX = 'NAVIGATION_JUMP_TO_INDEX'

export function navigatePush(state) {
	state = typeof state === 'string' ? { key: state, title: state } : state

	return {
		type: NAVIGATION_PUSH,
		state
	}
}

export function navigatePop() {
	return {
		type: NAVIGATION_POP
	}
}

export function navigateJumpToKey(key) {
	return {
		type: NAVIGATION_JUMP_TO_KEY,
		key
	}
}

export function navigateJumpToIndex(index) {
	return {
		type: NAVIGATION_JUMP_TO_INDEX,
		index
	}
}

export function navigateReset(routes, index) {
	return {
		type: NAVIGATION_RESET,
		index,
		routes
	}
}

export const navigationReducer = handleActions({
	NAVIGATION_PUSH: (state, action) => {
		if (state.routes[state.index].key === (action.state && action.state.key))
			return state

		return NavigationStateUtils.push(state, action.state)
	},

	NAVIGATION_POP: (state, action) => {
		if (state.index === 0 || state.routes.length === 1)
			return state

		return NavigationStateUtils.pop(state)
	},

	NAVIGATION_JUMP_TO_KEY: (state, { key }) =>
		NavigationStateUtils.jumpTo(state, key),

	NAVIGATION_JUMP_TO_INDEX: (state, { index }) =>
		NavigationStateUtils.jumpToIndex(state, index),

	NAVIGATION_RESET: (state, { index, routes }) => ({
		...state,
		index: index,
		routes: routes
	})
}, initialState.navigation)
