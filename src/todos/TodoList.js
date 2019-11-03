import React from 'react';
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	
	render() {
		return (
			<ul>
					<TodoItem></TodoItem>
			</ul>
		)
	}
}

export default TodoList;
