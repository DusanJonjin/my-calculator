import React, {useState} from 'react';
import { Keypad } from './Keypad/Keypad';
import { Display } from './Display/Display';

export function CalculatorApp() {

    const [computation, setComputation] = useState('0');

    const [result, setResult] = useState('0');

    const [decimalAllowed, setDecimalAllowed] = useState(true);


    const operators = ['+', '-', 'x', '÷'];

    const lastCharacter = computation.slice(-1);

    const secToLastCharacter = computation.charAt(computation.length - 2);

    const delLastCharacter = computation.slice(0, -1);

    const delFirstCharacter = char => {
        const delFirst = computation.slice(0, 0);
        setComputation(delFirst + char);
    }
    

    const handleNumBtnClick = number => {
        const zeroOperators = ['+0', '-0', 'x0', '÷0'];
        const lastTwoCharacters = computation.slice(-2);
        // Max size number, because of math.round accuracy issue (rounded on 14 digits):
        if (computation.length >= 14) {
            if (!operators.some(operator => computation.includes(operator))) {
                return;
            }
            else if (computation.length >= 19) return;
        }
        if (computation.length === 1 && computation === '0') {
            delFirstCharacter(number);
        }
        else if (zeroOperators.includes(lastTwoCharacters)) {
            return;
        }
        else 
            setComputation(computation + number);
            setResult('0');
    }


    const handleOperatorBtnClick = operator => {
        if (computation.length >= 19) {
            return;
        }

        if (computation.length === 1 && computation === '0') {
            if (operator === '-') {
                delFirstCharacter(operator);
                setResult('0');
            }
            else return;
        }

        else if (operators.includes(lastCharacter)) {
            if (computation.length <= 1) {
                return;
            }
            else if (computation.length > 1 && operator !== '-' && !operators.includes(secToLastCharacter)) {
                setComputation(delLastCharacter + operator);
                setResult('0');
            }
            else if (operators.includes(secToLastCharacter)) {
                return;
            }
           else if (operator === '-' && operator === lastCharacter) {
                return;
            }
           else {
               setComputation(computation + operator);
               setResult('0')
           }
        }

        else if (lastCharacter === '.') {
            setComputation(computation + '0' + operator)
            setDecimalAllowed(true);
            setResult('0')
        }

        else {
            setComputation(computation + operator); 
            setDecimalAllowed(true);
            setResult('0');
        }
    }


    const handlePointBtnClick = point => {
        if (computation.length >= 19) {
            return;
        }       
        if (decimalAllowed) {
            if (operators.includes(lastCharacter)) {
                setComputation(computation + '0' + point);
                setDecimalAllowed(false);
            }
            else {
                setComputation(computation + point);
                setDecimalAllowed(false);
                setResult('0');
            }
        }
    }


    const handleClearBtnClick = () => {
        setComputation('0');
        setResult('0');
        setDecimalAllowed(true);
    }

    
    return (
        <section id='calculator'>
            <Display computation={computation}
                     result={result} />
            <Keypad numBtnClick={handleNumBtnClick}
                    operatorBtnClick={handleOperatorBtnClick}
                    pointBtnClick={handlePointBtnClick}
                    clearBtnClick={handleClearBtnClick} />
        </section>
    );
}