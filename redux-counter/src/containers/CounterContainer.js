import {connect} from 'react-redux';
import Counter from "../components/Counter";
import * as actions from '../actions';
import {getRandomColor} from "../utils";

//store 에 어장된 상태변수를 Counter의 props로 연결
const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number,
});

//Action생성함수를 dispatch하고, Counter의 function props로 연결한다
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.set_color(color));
    },
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;