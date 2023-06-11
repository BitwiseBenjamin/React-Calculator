//ACTIONS
export const addDigit = (digit) => ({
type: 'ADD_DIGIT',
payload: digit
});

export const deleteDigit = () => ({
type: 'DELETE_DIGIT'
});

export const setEquation = (equation) => ({
type: 'SET_EQUATION',
payload: equation
});

export const addEquation = (equation) => ({
type: 'ADD_EQUATION',
payload: equation
});

export const deleteEquation = () => ({
type: 'DELETE_EQUATION'
});