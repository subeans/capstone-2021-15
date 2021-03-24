import React, { useState } from 'react'
import './Login.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


function Login(props) {

    const [nickName, setNickName] = useState("")
    const [password, setPassword] = useState("")

    const onNickNameHandler = (e) => {
        setNickName(e.currentTarget.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            nickName: nickName,
            password: password
        }
        axios.post('/api/user/login', body)
            .then(response => {
                if(response.data.loginSuccess ) {
                        props.history.push('/main'); 
                    } else {
                        alert('error');
                    }
                })
    }

    return (
        <div className="signin">
            <h2>로그인</h2>
            <form className="signin-form" onSubmit={onSubmitHandler}>
                <label>NickName</label>
                <input type="text" value={nickName} onChange={onNickNameHandler} />
                <label>Password</label> 
                <input type="password" value={password} onChange={onPasswordHandler} /> 
                <button type="submit">
                    Sign In
                </button>
            
            </form>
        </div>
    )
}

export default withRouter(Login)
