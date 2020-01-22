import React from 'react';

class Yoga extends React.Component{
    
    render() {
        console.log(this.props)
        return (
            <div>
                <h3> Name: {this.props.pose.name} | {this.props.pose.sanskrit_name}</h3>
                <div> <img className="pic" src={this.props.pose.image}></img></div>
            </div>
        )
    }
}

export default Yoga