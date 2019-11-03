import React from 'react';
import TodoItem from "./todoItem";

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                <TodoItem></TodoItem>
            </ul>
        )
    }
}

export default TodoList;
