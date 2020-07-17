export const handleEqualBtnClick = 
    (computation,
     handleDeleteBtnClick,
     operators,
     lastCharacter,
     secToLastCharacter, 
     delLastCharacter, 
     setResult) => {
    /* This variable is used to commit the rules when the computation
    ends with operator(s) or point: */
    let newComputation;

    if (computation.length === 1 && computation === '-') {
        handleDeleteBtnClick();
        return;
    }
    else if (operators.includes(lastCharacter) && computation.length > 1) {
        if (operators.includes(secToLastCharacter)) { 
            const delLastTwoValues = computation.slice(0, -2);
            handleDeleteBtnClick(delLastTwoValues);
            newComputation = computation.slice(0, -2);
        }
        else {
        handleDeleteBtnClick(delLastCharacter);
        newComputation = delLastCharacter;
        }
    }
    else if (lastCharacter === '.') {
        handleDeleteBtnClick(delLastCharacter);
        newComputation = delLastCharacter;
    }
    else {
        newComputation = computation;
    }
    /*Breaks string on pieces that match all digits (with or without dot),
    or all of non digits (operators), and puts all of the results into array: */
    const computationArr = newComputation.match(/[\d.]+|\D+/g);

    const operation = {
        'x': (a, b) => parseFloat(a) * parseFloat(b),
        'x-': (a ,b) => parseFloat(a) *- parseFloat(b),
        '÷': (a, b) => parseFloat(a) / parseFloat(b),
        '÷-': (a, b) => parseFloat(a) /- parseFloat(b),
        '+': (a, b) => parseFloat(a) + parseFloat(b),
        '+-': (a ,b) => parseFloat(a) +- parseFloat(b),
        '-': (a, b) => parseFloat(a) - parseFloat(b)
    };

    //Variable that will hold calculated number value from operation object:
    let calculateNum;
    
    const calculateMulDiv = compArr => {
        const operatorsMulDiv = ['x', 'x-', '÷', '÷-'];
        if (!operatorsMulDiv.some(operator => compArr.includes(operator))) {
            return compArr;
        }
        else {
            for (let i = 0; i < compArr.length; i++) {
                if (compArr[i].includes('x') || compArr[i].includes('÷')) {
                    switch (compArr[i]) {
                        case 'x':
                            calculateNum = operation['x'](compArr[i - 1], compArr[i + 1]);
                            break;
                        case 'x-': 
                            calculateNum = operation['x-'](compArr[i - 1], compArr[i + 1]);
                            break;
                        case '÷': 
                            calculateNum = operation['÷'](compArr[i - 1], compArr[i + 1]);
                            break;
                        case '÷-':
                            calculateNum = operation['÷-'](compArr[i - 1], compArr[i + 1]);                               
                            break;
                        default: // do nothing;
                    }
                    // Removes operator and numbers behind and in front of it,
                    // and puts in the new calculated value:
                    compArr.splice(i - 1, 3, calculateNum.toString());
                    // Sets i to 0, so that it can loop from the beggining
                    // of array again if it's needed:
                    i = 0;
                }
            }
            return compArr;
        }   
    }

    const calculateAddSub = compArr => {
        const operatorsAddSub = ['+', '+-', '-'];
        if (!operatorsAddSub.some(operator => compArr.includes(operator))) {
            return compArr;
        }
        else {
            for (let i = 0; i < compArr.length; i++) {
                if (compArr[i] === '+' || compArr[i] === '+-' || compArr[i] === '-') {
                    switch (compArr[i]) {
                        case '+':
                            calculateNum = operation['+'](compArr[i - 1], compArr[i + 1]);
                            break;
                        case '+-': 
                            calculateNum = operation['+-'](compArr[i - 1], compArr[i + 1]);
                            break;
                        case '-': 
                            // When the operator '-' is first in array, transforms the first
                            // number behind it, so that it has a negative value:
                            !compArr[i - 1] ? calculateNum = -1 * parseFloat(compArr[i + 1]) 
                          : calculateNum = operation['-'](compArr[i - 1], compArr[i + 1]);                              
                            break;
                        default: // do nothing;
                    }
                    // When the operator '-' is first in array, replaces only first
                    // two values ('-' and some number) with one negative number:
                    i === 0 ? compArr.splice(i, 2, calculateNum.toString()) 
                  : compArr.splice(i - 1, 3, calculateNum.toString());
                    i = 0;
                }
            }
            return compArr;
        }   
    }

    calculateAddSub(calculateMulDiv(computationArr));
    const calcResult = Math.round(10000000000000 * computationArr.toString()) / 10000000000000;
    setResult('=' + calcResult);
}