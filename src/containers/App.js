import React, { PureComponent } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
// Local imports
import rootReducer from '../ducks'
import AppNavigator from '../navigation/AppNavigator'

const args = [ thunk, promise ]


const createStoreWithMiddleware = applyMiddleware(...args)(createStore)
const store = createStoreWithMiddleware(rootReducer)

class App extends PureComponent {
	render() {
		return (
			<Provider store={store}>
				<AppNavigator />
			</Provider>
		)
	}
}

export default App
