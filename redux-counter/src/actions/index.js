import * as types from './ActionTypes';

//Action 생성함수 선언
export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

export const set_color = (color) => ({
    type: types.DECREMENT,
    color: color
});