import React from 'react';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import {connect} from 'react-redux';
import './todos.scss';

class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoCounter: 0
		};
		this.updateDidItItem = this.updateDidItItem.bind(this);
	}
	
	render() {
		return (
			<div>
				<AddTodo></AddTodo>
				{this.renderItems()}
			</div>
		);
	}
	
	renderItems() {
		if (this.props.todoList.length > 0) {
			return (
				<TodoList
					todoList={this.props.todoList}
					updateDidItItem={this.updateDidItItem}
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
	
	updateDidItItem(id) {
		let currentUpdateItem = this.state.todoList.filter(item => {
			if (item.id === id) {
				item.didIt = !item.didIt;
			}
			return true;
		});
		
		this.setState({
			todoList: currentUpdateItem
		});
	}
}

const mapStateToProps = (state) => {
	return {
		todoList: state.todos
	}
};

export default connect(mapStateToProps)(Todos);
