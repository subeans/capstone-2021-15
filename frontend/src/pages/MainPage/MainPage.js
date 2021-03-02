import React from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';


function MainPage(props) {

    const onClickHandler = (e) => {
        axios.get('/user/signOut')
            .then(response => {
                if(response.data.success ) {
                    props.history.push('/signIn')
                } else{
                    alert('Failed to sign Out')
                }
            })
    }

    return (
        <div>
            MainPage

            <button onClick={onClickHandler}>
                Sign Out
            </button>
        </div>
    )
}

export default withRouter(MainPage)