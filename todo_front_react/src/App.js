import React, {Component} from 'react';
import TodoListTemplate from "./component/TodoListTemplate";
import Form from "./component/form";
import TodoItemList from "./component/TodoItemList";

class App extends Component {
    state = {
        todo: ""
    };

    render() {
        // const {todo} = this.state;
        return (
            <div>
                <TodoListTemplate form={<Form/>}>
                    <TodoItemList/>
                </TodoListTemplate>
            </div>
        );
    }
}

export default App;
