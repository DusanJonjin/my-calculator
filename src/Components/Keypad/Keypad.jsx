import React from 'react';
import { Button } from './Button';

export function Keypad(props) {

    const { 
        numBtnClick,
        operatorBtnClick,
        pointBtnClick,
        equalBtnClick,
        delBtnClick,
        clearBtnClick 
    } = props;

    const btn = (char, fnBtnClick) => {
        const operatorsAndPoint = ['+', '-', 'x', '÷', '.'];
        const charIsNumOperatorPoint = typeof char === 'number' || operatorsAndPoint.includes(char);
        return (
            <Button 
                value={char}
                buttonClick={charIsNumOperatorPoint ? () => fnBtnClick(char) : fnBtnClick} 
            />
        );
    };

    return (
        <div id='keypad'>
            <div className='keypad-row'>
                {btn(7, numBtnClick)}
                {btn(8, numBtnClick)}
                {btn(9, numBtnClick)}
                {btn('÷', operatorBtnClick)}
            </div>
            <div className='keypad-row'>
                {btn(4, numBtnClick)}
                {btn(5, numBtnClick)}
                {btn(6, numBtnClick)}
                {btn('x', operatorBtnClick)}
            </div>
            <div className='keypad-row'>
                {btn(1, numBtnClick)}
                {btn(2, numBtnClick)}
                {btn(3, numBtnClick)}
                {btn('-', operatorBtnClick)}
            </div>
            <div className='keypad-row'>
                {btn(0, numBtnClick)}
                {btn('.', pointBtnClick)}
                {btn('=', equalBtnClick)}
                {btn('+', operatorBtnClick)}
            </div>
            <div className='keypad-row last'>
                {btn('←', delBtnClick)}
                {btn('C', clearBtnClick)}
            </div>
        </div>
    );
}

