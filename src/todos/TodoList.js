import React from 'react';
import {connect} from 'react-redux';
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
	render() {
		return (
			<ul className='todoList'>
				{this.props.todoList && this.props.todoList.map(item => {
					console.log(item);
					return <TodoItem
						key={item.id}
						updateDidItItem={this.props.updateDidItItem}
						{...item}></TodoItem>
				})}
				{this.props.fetchTodo && this.loadingTodo()}
			</ul>
		)
	}
	
	loadingTodo(){
		return (
			<li className={'fetch-todo'}>alek loading</li>
		)
	}
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(TodoList);
