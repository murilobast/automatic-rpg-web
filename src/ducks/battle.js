import { handleActions } from 'redux-actions'

// Local imports
import initialState from './initialState'
import randomBetween from '../lib/helpers/randomBetween'

const TAKE_DAMAGE = 'battle/TAKE_DAMAGE'
const CLEAR_DAMAGE = 'battle/CLEAR_DAMAGE'
const ENEMY_KILLED = 'battle/ENEMY_KILLED'

export const enemyKilled = () => ({
	type: ENEMY_KILLED
})

export const takeDamage = damage => ({
	type: TAKE_DAMAGE,
	damage
})

export const clearDamage = _id => ({
	type: CLEAR_DAMAGE,
	_id
})

const generateID = damage => `${(new Date().getTime() * Math.random() * 20).toFixed(0)}-item-${damage}`

export const battleReducer = handleActions({
	[TAKE_DAMAGE]: (state, { damage }) => {
		const id = generateID(damage)
		const damageObject = {
			value: damage,
			id
		}
		return {
			...state,
			damageQueue: [
				...state.damageQueue,
				damageObject
			]
		}
	},
	[CLEAR_DAMAGE]: (state, { _id }) => {
		const damageQueue = [...state.damageQueue].filter(({ id }) => id !== _id)
		return {
			...state,
			damageQueue
		}
	},
	[ENEMY_KILLED]: (state) => {
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
