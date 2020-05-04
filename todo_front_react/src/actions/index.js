import axios from 'axios';

//Action Type 변수선언
export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

//Server URL
const api_url = process.env.REACT_APP_APIURL;

// 3. todo갱신
export const toggleTodo = (todo) => {
    return (dispatch) => {
        axios.put(`${api_url}/${todo.id}`, todo)
            .then(res => {
                // console.log(res);
                dispatch({
                    type: TOGGLE_TODO,
                    payload: res.data
                })
            })
            .catch(error => {
                console.error(error);
                throw(error);
            });
    };
}; // removeTodo

// 3. todo삭제
export const removeTodo = (id) => {
    return (dispatch) => {
        axios.delete(`${api_url}/${id}`)
            .then(res => {
                // console.log(res);
                dispatch({
                    type: REMOVE_TODO,
                    payload: res.data
                })
            })
            .catch(error => {
                console.error(error);
                throw(error);
            });
    };
}; // removeTodo

// 2. todo등록
export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post(api_url, todo)
            .then(res => {
                // console.log(res);
                dispatch({
                    type: ADD_TODO,
                    payload: res.data
                })
            })
            .catch(error => {
                console.error(error);
                throw(error);
            });
    };
}; // addTodo

// 1. todo목록
export const fetchAllTodos = () => {
    return (dispatch) => {
        axios.get(api_url)
            .then(res => {
                // console.log(res);
                dispatch({
                    type: FETCH_TODOS,
                    payload: res.data
                })
            })
            .catch(error => {
                console.error(error);
                throw(error);
            });
    };
}; // fetchAllTodos
