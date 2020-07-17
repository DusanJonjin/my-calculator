import React from 'react';

export function ResultDisplay({ result }) {

    const newClass = length => {
        if (length > 14) {
            if (length > 18) {
                if (length > 22) {
                    return ` very_small`;
                }  
                return ` small`;    
            }
            return ` medium`;
        }
        else return ``;       
    }

    return (
        <div className={`result-display${newClass(result.length)}`}>
            {result}
        </div>

    );
}