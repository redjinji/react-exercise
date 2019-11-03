import React from 'react';

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<li key={0}>some list</li>
		)
	}
}

export default TodoItem;
