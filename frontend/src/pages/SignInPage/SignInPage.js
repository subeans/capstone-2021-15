import React, { useState } from 'react'
import './SignInPage.css';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../_actions/user_action';
import { withRouter } from 'react-router-dom';


function SignInPage(props) {
    const dispatch = useDispatch();

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
        dispatch(signInUser(body))
            .then(response => {

            if(response.payload.loginSuccess ) {
                    props.history.push('/'); // 나중에 /main으로 바꿔줄것
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

export default withRouter(SignInPage)
