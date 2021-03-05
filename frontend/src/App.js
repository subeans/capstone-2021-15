import './App.css';
import React from "react";
import Carousel from "./components/CardCarousel";
import Recommand from "./components/Recommand";
import Main from "./Main";
import Category from "./Category";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Auth from "./hoc/auth";
import {Link, Route, BrowserRouter as Router} from "react-router-dom"

function App() {
    const cardMargin = {
        marginBottom: "60px"
    }

    return (
        <Router>
            <div className="App">
                <Route exact path="/main" component={Main}/>
                {/*<Route path="/product" component={Product}/>*/}
                {/*<Route path="/mypage" component={Mypage}/>*/}
                <Route path="/category" component={Category}/>
                <Route exact path="/" component={Auth(Welcome, null)}/>
                <Route exact path="/login" component={Auth(Login, false)}/>
                <Route exact path="/signup" component={Auth(Signup, false)}/>
            </div>
        </Router>
    );
}

export default App;
