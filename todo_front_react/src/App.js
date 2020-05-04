import React, {Component} from 'react';
import TodoListTemplate from "./component/TodoListTemplate";
import Form from "./component/form";
import TodoItemList from "./component/TodoItemList";

class App extends Component {
    render() {
        // const {text} = this.state;
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
