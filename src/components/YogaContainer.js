import React from 'react';
import { connect } from 'react-redux';
import { getAllPoses } from "../redux/actions";
import Yoga from "./Yoga"

class YogaContainer extends React.Component{

    componentDidMount() {
        this.props.getAllPoses()
    }
    

    render() {
        console.log(this.props.poses)
        return (
        <div className="poses">
            <h1>Yoga Poses To Help Balance Chakras</h1>
            <div>
                    {this.props.poses.map(pose => <Yoga pose={pose} key={pose.id} />)}
            </div>
        </div>
        )}

}

const getInfo = (state) => {
    return {
        poses: state.allPoses.poses
    }
}

export default connect(getInfo, { getAllPoses })(YogaContainer)