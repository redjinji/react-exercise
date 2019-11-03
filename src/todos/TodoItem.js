import React from 'react';

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		
		this.checkedMe = this.checkedMe.bind(this);
		
		this.state = {
			didIt: this.props.didIt
		}
	}
	
	render() {
		let classNames = `todoList--item todoList--item__checked-${this.state.didIt}`;
		return (
			<li className={classNames}>
				<p className='todoItem--text'>
					{this.props.text}
				</p>
				<input type='checkbox' className='todoItem--checkbox' onChange={this.checkedMe} checked={this.state.didIt}/>
			</li>
		)
	}
	
	checkedMe(){
		this.setState({didIt: !this.state.didIt});
	}
}

export default TodoItem;
