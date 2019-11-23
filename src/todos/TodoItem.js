import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions/actionTodo'

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		
		this.checkedMe = this.checkedMe.bind(this);
	}
	
	render() {
		let classNames = `todoList--item todoList--item__checked-${this.props.didIt}`;
		return (
			<li className={classNames}>
				<p className='todoItem--text'>
					{this.props.text}
				</p>
				<input type='checkbox' className='todoItem--checkbox' onChange={this.checkedMe} checked={this.props.didIt}/>
			</li>
		)
	}
	
	checkedMe(){
		this.props.dispatch(toggleTodo(this.props.id));
	}
}

export default connect()(TodoItem);
