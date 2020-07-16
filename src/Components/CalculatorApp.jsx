import React, {useState} from 'react';
import { Keypad } from './Keypad/Keypad';
import { Display } from './Display/Display';

export function CalculatorApp() {

    const [computation, setComputation] = useState('0');

    const [result, setResult] = useState('0');


    const operators = ['+', '-', 'x', '÷'];

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

    return (
        <section id='calculator'>
            <Display computation={computation}
                     result={result} />
            <Keypad numBtnClick={handleNumBtnClick} />
        </section>
    );
}