export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_VALUE ='MEMORY_VALUE';
export const MEMORY_ADD = 'MEMORY_ADD'
export const MEMORY_RESET = 'MEMORY_RESET'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY})
}
export const memoryValue = () => {
    return ({type:MEMORY_VALUE})
}
export const memoryAdd = () => {
    return ({type:MEMORY_ADD})
}
export const memoryReset = () => {
    return ({type:MEMORY_RESET})
}