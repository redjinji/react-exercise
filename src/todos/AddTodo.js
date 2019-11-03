import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoText: ''
    };
    
    this.addToList = this.addToList.bind(this);
    this.updateText = this.updateText.bind(this);
    
    this.inputTask = React.createRef();
  }
	render() {
		return (
			<div>
				<input ref={this.inputTask} onChange={this.updateText} type='text'/>
        <button onClick={this.addToList} type='submit'>add me please</button>
			</div>
		)
	}
	
	updateText(e){
    let newText = e.target.value;
    this.setState({
      newTodoText: newText
    })
  }
	
	addToList(e) {
    e.preventDefault();
    if(this.inputTask.current.value !== '') {
      this.inputTask.current.value = '';
      this.props.addToList(this.state.newTodoText);
    }
  }
}

export default AddTodo;
