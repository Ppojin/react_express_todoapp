import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    render() {
        return (
            <div>
                <TodoItem todoText="할일1" checked={true}/>
                <TodoItem todoText="할일2" />
                <TodoItem todoText="할일3" />
            </div>
        );
    }
}

export default TodoItemList;