import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

//Components
import Post from './components/post';
import Profile from './components/profile';
import PostDetails from './components/postDetail';
class App extends Component{
    render(){
        return(
            <div className = "panel panel-danger">
                <div className = "panel-heading">Home Page Content</div>
            </div>
        )
    }
}

ReactDom.render(
<BrowserRouter>
    <div>
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span> 
            </button>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
                <li><Link to = "/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/profile">Profile</Link></li> 
            </ul>
            </div>
        </div>
        </nav>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/post" component={Post}></Route>
        <Route exact path="/post/:id" component={PostDetails}></Route>
        <Route path="/profile" component={Profile}></Route>
    </div>
</BrowserRouter>, document.getElementById('root'));