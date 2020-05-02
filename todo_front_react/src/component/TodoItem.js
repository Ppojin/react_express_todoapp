import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    handlerStopPropagation = (e) => {
        e.stopPropagation(); // onToggle 이 실행되지 않도록 함
        this.props.onRemove(this.props.id);
    };

    render() {
        const {todoText, checked, id, onToggle} = this.props;
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={this.handlerStopPropagation}>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}><div>{todoText}</div></div>
                { checked && (<div className="check-mark">✓</div>) }
            </div>
        );
    }
}

export default TodoItem;