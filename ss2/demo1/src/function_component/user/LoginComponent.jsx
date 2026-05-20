
import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkLogin} from "../../service/accountService";
import {login} from "../../redux/action";
import {useNavigate} from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginComponent() {
    const userInfo = useSelector(state=>state.user);
    const navigate = useNavigate();
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const dispatch = useDispatch();
    const  handleLogin=  async ()=>{
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        let isSuccess =dispatch(login(username, password))
        if (isSuccess){
            navigate("/home");
            toast.success("Đăng nhập thành công")
        }else {
            toast.error("Đăng nhập thất bại")
        }

        // const acountInfo = await checkLogin(username,password);
        // if (acountInfo!=null){
        //     console.log("----------login thành công ------------")
        //     dispatch(login(acountInfo));
        //     console.log(acountInfo)
        //     navigate("/students");
        // }else {
        //     console.log("-------login không thành công------------")
        // }
    }

    return (
        <>
            <form>
                <h3>Login {(userInfo!=null)?(userInfo.username):''}</h3>
                <div>
                    <label>Username</label>
                    <input ref={usernameRef} name={'username'}/>
                </div>
                <div>
                    <label>Password</label>
                    <input ref={passwordRef} name={'password'}/>
                </div>
                <button type={'button'} onClick={handleLogin}>Login</button>
            </form>
        </>
    )

}
export default LoginComponent ;