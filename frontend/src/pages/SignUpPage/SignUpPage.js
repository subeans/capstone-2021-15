import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../_actions/user_action';
import { withRouter } from 'react-router-dom';


function SignUpPage(props) {
    const dispatch = useDispatch();

    const [nickName, setNickName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setComfirmPassword] = useState("")
    const [age, setAge] = useState("")
    const [personalColor, setPersonalColor] = useState("")

    const onNickNameHandler = (e) => {
        setNickName(e.currentTarget.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onConfirmPasswordHandler = (e) => {
        setComfirmPassword(e.currentTarget.value)
    }

    const onAgeHandler = (e) => {
        setAge(e.currentTarget.value)
    }

    const onPersonalColorHandler = (e) => {
        setPersonalColor(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            return alert('confirm password not matched.')
        }
        let body = {
            nickName: nickName,
            password: password,
            age: age,
            personalColor: personalColor
        }
        dispatch(signUpUser(body))
            .then(response => {
                if(response.payload.registerSuccess ) {
                    props.history.push('/signIn'); // 나중에 /main으로 바꿔줄것
                } else {
                    alert('failed to sign up');
                }
            })

    }

    return (
        <div className="signin">
            <h2>로그인</h2>
            <form class="signin-form" onSubmit={onSubmitHandler}>
                <label>NickName</label>
                <input type="text" value={nickName} onChange={onNickNameHandler} />
                
                <label>Password</label> 
                <input type="password" value={password} onChange={onPasswordHandler} /> 
                
                <label>Confirm Password</label> 
                <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler} /> 

                <label>Age</label>
                <input type="number" value={age} onChange={onAgeHandler} />

                <label>PersonalColor</label>
                <input type="text" value={personalColor} onChange={onPersonalColorHandler} />

                <button type="submit">
                    Sign Up
                </button>
            
            </form>
        </div>
    )
}

export default withRouter(SignUpPage)