import React, {Component} from 'react';

class PostsDetail extends Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log(this.props);
        return(
            <div className = "panel panel-danger">
            <div className = "panel-heading">Post Detail Page Content for article {this.props.match.params.id}</div>
        </div>
        )
    }
}

export default PostsDetail;