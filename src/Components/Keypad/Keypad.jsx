import React from 'react';
import { Button } from './Button';

export function Keypad(props) {

    const { numBtnClick,
            operatorBtnClick,
            pointBtnClick,
            equalBtnClick,
            delBtnClick,
            clearBtnClick } = props;


    const numBtn = number => {
        return (
            <Button value={number}
                    buttonClick={() => numBtnClick(number)} />
        );
    }

    const operatorBtn = operator => {
        return (
            <Button value={operator}
                    buttonClick={() => operatorBtnClick(operator)} />
        );
    }

    const pointBtn = point => {
        return (
            <Button value={point}
                    buttonClick={() => pointBtnClick(point)} />
        );
    }

    const equalBtn = equal => {
        return (
            <Button value={equal}
                    buttonClick={equalBtnClick} />
        );
    }

    const delBtn = del => {
        return (
            <Button value={del}
                    buttonClick={delBtnClick} />
        );
    }

    const clearBtn = clear => {
        return (
            <Button value={clear}
                    buttonClick={clearBtnClick} />
        );
    }


    return (
        <div id='keypad'>
            <div className='keypad-row'>
                {numBtn(7)}
                {numBtn(8)}
                {numBtn(9)}
                {operatorBtn('÷')}
            </div>
            <div className='keypad-row'>
                {numBtn(4)}
                {numBtn(5)}
                {numBtn(6)}
                {operatorBtn('x')}
            </div>
            <div className='keypad-row'>
                {numBtn(1)}
                {numBtn(2)}
                {numBtn(3)}
                {operatorBtn('-')}
            </div>
            <div className='keypad-row'>
                {numBtn(0)}
                {pointBtn('.')}
                {equalBtn('=')}
                {operatorBtn('+')}
            </div>
            <div className='keypad-row last'>
                {delBtn('←')}
                {clearBtn('C')}
            </div>
        </div>
    );
}

