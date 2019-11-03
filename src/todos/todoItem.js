import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
            <li>
                <input type='text'/>
                <input type='checkbox'/>
            </li>
        )
    }
}

export default TodoItem;
