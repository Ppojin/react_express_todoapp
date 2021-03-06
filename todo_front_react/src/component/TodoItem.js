import React, {Component} from 'react';
import './TodoItem.css';
import {removeTodo, toggleTodo} from "../actions";
import {connect} from "react-redux";

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    handleToggle = (todo) => {
        this.props.toggleTodo(todo);
    };

    handleRemove = (id) => {
        this.props.removeTodo(id);
    };

    render() {
        const {text, checked, id} = this.props;
        return (
            <div className="todo-item" onClick={() => {
                const todo = {id, text, checked: !checked};
                this.handleToggle(todo);
            }}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    this.handleRemove(id)
                }}>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {checked && (<div className="check-mark">✓</div>)}
            </div>
        );
    }
}

export default connect(null, {removeTodo, toggleTodo})(TodoItem);