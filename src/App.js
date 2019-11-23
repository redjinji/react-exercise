import React from 'react';
import Box from './recursion-box/recursion-box'
import './App.scss';
import Todos from "./todos/Todos";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import todoReducer from "./reducers/reduceTodo";

function App() {
	const store = createStore(todoReducer,applyMiddleware(thunk));
	return (
		<div className="App">
			<Box key={12}></Box>
			<Provider store={store}>
				<Todos></Todos>
			</Provider>
		</div>
	);
}

export default App;
