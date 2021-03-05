import React from 'react'
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

function Welcome(props) {

    const onClickHandler = (e) => {
        axios.get('/user/signout')
            .then(response => {
                if(response.data.success ) {
                    props.history.push('/login')
                } else{
                    alert('Failed to sign Out')
                }
            })
    }

    return (
        <div>
            Welcome
            <Link to='/login'>
                <button> 로그인 </button>
            </Link>
            <Link to='/signup'>
                <button> 회원가입 </button>
            </Link>
            <button onClick={onClickHandler}>
                Sign Out
            </button>
        </div>
    )
}

export default withRouter(Welcome)