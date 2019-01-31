
/**
 * 
 * Login Reducer Created to perform action related to login
 * 
 * @param {Object} state 
 * @param {Object} action 
 */

const loginReducer = (state = {  //has some initial state
    isLoggedIn:false,
}, action) => {
    state.isLoggedIn = action.payload; 
    
    return state;
}

export default loginReducer;