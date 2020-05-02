import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.todoArr !== nextProps.todoArr;
    // }

    render() {
        const {myToggle, myRemove, todoArr} = this.props;
        const todoListDom = todoArr.map(({id, checked, todoStr}) => (
            <TodoItem
                key={id}
                id={id}
                todoStr={todoStr}
                checked={checked}
                myToggle={myToggle}
                myRemove={myRemove}
            />
        ));
        return (
            <div>
                {todoListDom}
            </div>
        );
    }
}

export default TodoItemList;