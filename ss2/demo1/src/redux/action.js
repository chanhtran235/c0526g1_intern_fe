import {checkLogin} from "../service/accountService";

// export const login = (account) => {
//     return {
//         type: 'LOGIN',
//         payload: account
//     }
// };
//
// export const logout = () => {
//     return {
//             type: 'LOGOUT'
//     }
// };

export const login = (username,password) => {
    return async (dispatch) => {
        // xử lý nghiệp vụ trước khi dispatch
        const account = await checkLogin(username,password);
        console.log("-----------return account ---------" + account)
        if (account){
            console.log("-------------ok-----------")
            dispatch({
                type: 'LOGIN',
                payload: account,
            })
            return true;
        }else {
            console.log("-------------not ok-----------")
            return false;
        }

    }
};
export const logout = () => {
    return async (dispatch) => {
        // xử lý nghiệp vụ trước khi dispath

        dispatch({
            type: 'LOGOUT'
        })
    }
};
