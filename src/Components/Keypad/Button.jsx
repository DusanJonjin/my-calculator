import React from 'react';

export function Button({ buttonClick, value }) {

    return (
        <button id='btn' onClick={buttonClick} >
            {value}
        </button>
    );
}