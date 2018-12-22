import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Post extends Component{
    render(){
        return(
            <div className = "panel panel-primary">
                <div className = "panel-heading">Post Page Content</div>
                <div className = "panel-body">
                    <li><Link to="/post/1">Article 1</Link></li>
                    <li><Link to="/post/2">Article 2</Link></li>
                </div>
            </div>
        )
    }
}

export default Post;