import { combineReducers } from 'redux'
import { gameReducer } from './game'
import { battleReducer } from './battle'
import { navigationReducer } from './navigation'

const rootReducer = combineReducers({
	game: gameReducer,
	battle: battleReducer,
	navigation: navigationReducer
})

export default rootReducer
