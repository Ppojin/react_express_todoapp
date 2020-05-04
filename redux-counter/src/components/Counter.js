import React from 'react';
import propTypes from 'prop-types';
import './Counter.css'

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div className="Counter"
             onClick={onIncrement}
             onContextMenu={(event => {
                 event.preventDefault();
                 onDecrement();
             })}
             onDoubleClick={onSetColor}
             style={{backgroundColor: color}}
        >
            {number}
        </div>
    );
};

Counter.propTypes = {
    number: propTypes.number,
    color: propTypes.string,
    onIncrement: propTypes.func,
    onDecrement: propTypes.func,
    onSetColor: propTypes.func
};

Counter.defaultProps = {
    number:0,
    color:'orange',
    onIncrement:() => console.log('OnIncrement not defined'),
    onDecrement:() => console.log('onDecrement not defined'),
    onSetColor:() => console.log('OnSetColor not defined')
};

export default Counter;