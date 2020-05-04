import {ADD_TODO, FETCH_TODOS, REMOVE_TODO, TOGGLE_TODO} from "../actions";

const initalState = {
    todos: [{
        id: 0,
        text: '',
        checked: false,
    }]
};

//reducer 함수
export const todoReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
        case ADD_TODO:
        case REMOVE_TODO:
        case TOGGLE_TODO:
            return Object.assign({}, state, {todos: action.payload});
        default:
            return state;
    }
};