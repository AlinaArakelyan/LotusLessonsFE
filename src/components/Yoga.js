import React from 'react';


class Yoga extends React.Component{
    
    render() {
        return (
            <div>
                <h3 style={{color: "black"}}> Name: {this.props.pose.name} | {this.props.pose.sanskrit_name} ✨ </h3>
                <div> <img className="pic" src={this.props.pose.image} alt="bye"></img></div>
            </div>
        )
    }
}

export default Yoga