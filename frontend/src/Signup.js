import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup(props) {
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
        axios.post('/user/signup', body)
            .then(response => {
                if(response.data.registerSuccess ) {
                    props.history.push('/login');
                } else {
                    alert('failed to sign up');
                }
            })
    }

    return (
        <div className="signup">
            <h2>회원가입</h2>
            <form class="signup-form" onSubmit={onSubmitHandler}>
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

export default withRouter(Signup)