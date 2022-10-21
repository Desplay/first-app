export const defaultCaculator = {
    firstValue: '0',
    operator: null,
    secondValue: null,
}

export const handleNumber = (value, state) => {
    if(state.firstValue === '0') {
        return { firstValue: `${value}` };
    }
    return {firstValue: `${state.firstValue}${value}`}
}

export const handleEqual = state => {
    const {firstValue, operator, secondValue} = state;
    const first = parseFloat(firstValue);
    const second = parseFloat(secondValue);
    const resetState = {
        operator: null,
        secondValue: null,
    };
    switch (operator) {
        case "+": 
            return {
            firstValue: first + second,
            ...resetState
            }
        case '-': 
            return {
            firstValue: first - second,
            ...resetState
            }
        case '*': 
            return {
            firstValue: first * second,
            ...resetState
            }
        case '/': 
            return {
            firstValue: first / second,
            ...resetState
            }
        default:
    }
    return state;
};

const calculator = (type, value, state) => {
    switch (type) {
        case 'number':
            return handleNumber(value, state);
        case 'operator':
            return {
                firstValue: "0",
                operator: value,
                secondValue: state.firstValue,
            }
        case "equal":
            return handleEqual(state);
        case "clear":
            return defaultCaculator;
        case "changeValue":
            return {
                firstValue: `${parseFloat(state.firstValue) * -1}`
            };
        case "percent":
            return {
                firstValue: `${parseFloat(state.firstValue) * 0.01}`
            };
        default:
            return state;
    }
};


export default calculator;