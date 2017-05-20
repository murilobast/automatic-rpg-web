import { handleActions } from 'redux-actions'

// Local
import initialState from './initialState'
import { TEST } from '../constants/actionTypes'

export const test = (data) => ({
	type: TEST,
	data
})

export const gameReducer = handleActions({
	TEST: (state, action) => {
		return {
			...state
		}
	}
}, initialState.game)
