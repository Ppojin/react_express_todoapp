import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import {connect} from "react-redux";
import {fetchAllTodos, removeTodo} from "../actions";

class TodoItemList extends Component {
    //life-cycle method: 화면 load 될 때 호출
    componentDidMount() {
        this.props.fetchAllTodos();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const {todos} = this.props;
        const todoListDom = todos.map(({id, checked, text}) => (
            <TodoItem key={id} id={id} text={text} checked={checked} />
        ));
        return (
            <div>
                {todoListDom}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

export default connect(mapStateToProps, { fetchAllTodos })(TodoItemList);