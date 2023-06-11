//INITIAL STATE
const initialState = {
    equation: '0',
    equationArray: []
}

let newEquation;

//MAIN REDUCER
 const reducer = (state = initialState, action) => {

    switch(action.type) {

    case 'ADD_DIGIT': 
        newEquation = state.equation === '0' ? String(action.payload) : String(state.equation) + String(action.payload);
        return {...state,
            equation: newEquation};

    case 'DELETE_DIGIT':
        return {...state,
            equation: state.equation.slice(0, -1)};

    case 'SET_EQUATION':
        return {...state,
            equation: action.payload}
    
    case 'ADD_EQUATION':
        return {...state,
            equationArray: [...state.equationArray, String(action.payload)]};

    case 'DELETE_EQUATION':
       return{...state,
        equation: '0'};

    default:
        return state;
    
}}

export default reducer;