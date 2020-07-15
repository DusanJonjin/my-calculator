import React, {useState} from 'react';
import { Keypad } from './Keypad/Keypad';
import { Display } from './Display/Display';

export function CalculatorApp() {

    const [computation, setComputation] = useState('0');
    const [result, setResult] = useState('0');

    return (
        <section id='calculator'>
            <Display computation={computation}
                     result={result} />
            <Keypad />
        </section>
    );
}