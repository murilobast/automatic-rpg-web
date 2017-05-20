import { handleActions } from 'redux-actions'

// Local imports
import initialState from './initialState'
import randomBetween from '../lib/helpers/randomBetween'

const ENEMY_KILLED = 'ENEMY_KILLED'

export const enemyKilled = () => ({
	type: ENEMY_KILLED
})

export const battleReducer = handleActions({
	ENEMY_KILLED: (state) => {
		const { level, baseGold, totalGold } = state
		const newLevel = level +1
		const levelGold = parseInt((baseGold + level) * (randomBetween(85, 115) / 100))
		const newGold = totalGold + levelGold

		return {
			...state,
			totalGold: newGold,
			level: newLevel
		}
	}
}, initialState.battle)
