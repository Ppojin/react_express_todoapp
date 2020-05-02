console.log(Redux);

//=================== 액션 ======================
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//가변적인 값이 들어가야 하면 파라미터를 넣어서 액션을 만든다.
const increment = (diff) => ({
    type: INCREMENT,
    diff: diff
});

//값을 감소시키는 액션
const decrement = (diff) => ({
    type: DECREMENT,
    diff: diff
});

//=================== 리듀서 ======================
const initialState = {
    number: 10,
    foo: 'bar',
    baz: 'qux'
}
function counter(state = initialState, action) {
    console.log('reducer called...')
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + action.diff
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - action.diff
            };
        default:
            return state;
    }
}
//=================== 스토어 ======================
const {createStore} = Redux;
const store = createStore(counter);
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('>>> subscribe called...')
  console.log(store.getState());
})

//=================== 디스패치 ======================
store.dispatch(increment(10)); //10
store.dispatch(decrement(5)); //5
store.dispatch(decrement(5)); //8

// console.log(counter(undefined, increment(10)));
// console.log(counter(undefined, decrement(3)));