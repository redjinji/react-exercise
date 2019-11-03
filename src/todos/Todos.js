import React from 'react';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import './todos.scss';

class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoList: [],
			todoCounter: 0
		};
		this.addToList = this.addToList.bind(this);
	}
	
	render() {
		return (
			<div>
				<AddTodo
					addToList={this.addToList}
				></AddTodo>
				{this.renderItems()}
			</div>
		);
	}
	
	renderItems(){
		if(this.state.todoList.length > 0) {
			return (
				<TodoList
					todoList={this.state.todoList}
				></TodoList>
			)
		} else {
			return (<h2>no list yet</h2>)
		}
	}
	
	addToList(text) {
		const newTodoItem = {
			text: text,
			didIt: false,
			id: this.state.todoCounter
		};
		this.setState({
			todoList: [...this.state.todoList, newTodoItem],
			todoCounter: this.state.todoCounter + 1
		});
	}
}


export default Todos;
