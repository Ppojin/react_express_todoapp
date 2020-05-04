import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTodo} from "../actions";
import './form.css';

class Form extends Component {
    state = { todo: '' };
    
    handleChange = (event) => {
        this.setState({todo: event.target.value});
    };
    
    handleCreate = () => {
        const {todo} = this.state;
        this.props.addTodo({ text: todo });
        this.setState({ todo: '' })
    };

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleCreate();
        }
    };
    
    render() {
        const {todo} = this.state;
        const {handleChange, handleKeyPress, handleCreate} = this;
        return (
            <div className="form">
                <input
                    type="text"
                    value={todo}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                />
                <div className="create-button" onClick={handleCreate}>
                    추가
                </div>
            </div>
        );
    }
}



export default connect(null, {addTodo})(Form);

