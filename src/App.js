import React from 'react';
import Box from './recursion-box/recursion-box'
import './App.scss';
import Todos from "./todos/todos";

function App() {
	return (
		<div className="App">
			<Box key={12}></Box>
			<Todos></Todos>
		</div>
	);
}

export default App;
