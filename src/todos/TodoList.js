import React from 'react';
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<ul className='todoList'>
          {this.props.todoList && this.props.todoList.map(item => <TodoItem key={item.id} {...item}></TodoItem>)}
			</ul>
		)
	}
}

export default TodoList;
