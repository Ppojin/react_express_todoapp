import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }


    handlerStopPropagation = (e) => {
        const {myRemove, id} = this.props;
        e.stopPropagation(); // myToggle 이 실행되지 않도록 함
        myRemove(id);
    };

    render() {
        const {todoStr, checked, id, myToggle} = this.props;
        return (
            <div className="todo-item" onClick={() => myToggle(id)}>
                <div className="remove" onClick={this.handlerStopPropagation}>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}><div>{todoStr}</div></div>
                { checked && (<div className="check-mark">✓</div>) }
            </div>
        );
    }
}

export default TodoItem;