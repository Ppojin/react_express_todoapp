import React, {Component} from 'react';
import TodoListTemplate from "./component/TodoListTemplate";
import Form from "./component/form";
import TodoItemList from "./component/TodoItemList";

const initialTodos = new Array(500).fill(0).map(
    (item, idx) => ({ id: idx, todoStr: `일정 ${idx}`, checked: true })
);

class App extends Component {
    id = 5;
    state = {
        todoStr: "",
        todoArr: initialTodos,
        // todoArr: [
        //     {id: 0, checked:false, todoStr:'오징어'},
        //     {id: 1, checked:true, todoStr:'땅콩'},
        //     {id: 2, checked:false, todoStr:'사실그렇게'},
        //     {id: 3, checked:false, todoStr:'맛있지는'},
        //     {id: 4, checked:false, todoStr:'않아'},
        // ],
    };

    handleChange = (event) => {
        this.setState({todoStr: event.target.value});
    };

    handleCreate = () => {
        const {todoArr, todoStr} = this.state;
        const newTodo = {id: this.id++, checked: false, todoStr};
        const newTodoArr = todoArr.concat(newTodo);
        console.log(newTodoArr)
        this.setState({
            todoStr: '',
            todoArr: newTodoArr,
        })
    };

    handlePressEnter = () => {
        this.handleCreate();
    };

    handleRemove = (id) => {
        const {todoArr} = this.state;
        const newTodoArr = todoArr.filter(v => v.id!==id);
        this.setState({
            todoArr: newTodoArr
        })
    };
    handleToggle = (index) => {
        const {todoArr} = this.state;
        const newTodoArr = todoArr.map(v => {
            if (v.id === index) return {...v, checked: !v.checked};
            else return v;
        });
        this.setState({
            todoArr: newTodoArr
        })
    };

    render() {
        const {todoStr, todoArr} = this.state;
        return (
            <div>
                <TodoListTemplate form={
                    <Form
                        todo={todoStr}
                        myCreate={this.handleCreate}
                        myChange={this.handleChange}
                        myPressEnter={this.handlePressEnter}
                    />
                }>
                    <TodoItemList
                        todoArr={todoArr}
                        myToggle={this.handleToggle}
                        myRemove={this.handleRemove}
                    />
                </TodoListTemplate>
            </div>
        );
    }
}

export default App;
