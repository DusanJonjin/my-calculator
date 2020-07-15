import React from 'react';
import { ComputationDisplay } from './ComputationDisplay';
import { ResultDisplay } from './ResultDisplay';

export function Display({ computation, result }) {

    return (
        <div id='display'>
            <ComputationDisplay computation={computation} />
            <ResultDisplay result={result} />
        </div>
    );
}
