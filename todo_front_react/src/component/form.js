import React from 'react';
import './form.css'

function Form({todo, myChange, myKeyPress, myCreate}) {
    return (
        <div className="form">
            <input
                type="text"
                value={todo}
                onChange={myChange}
                onKeyDown={myKeyPress}
            />
            <div className="create-button" onClick={myCreate}>
                추가
            </div>
        </div>
    );
}

export default Form;