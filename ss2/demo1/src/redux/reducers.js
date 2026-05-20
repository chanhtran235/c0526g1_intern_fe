import {combineReducers} from "redux";
const initAccount = null;
const userReducer = (state = initAccount, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return null;
        default:
            return state;
    }
};


// Kết hợp tất cả reducers thành một rootReducer
export const rootReducer = combineReducers({
    user: userReducer,

});