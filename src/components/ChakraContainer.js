import React from 'react';
import Chakra from './Chakra';
import { connect } from 'react-redux';
import { getAllChakras } from "../redux/actions"
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router'


class ChakraContainer extends React.Component{

    componentDidMount() {
        this.props.getAllChakras()
    }
    
    render() {
        return (
        <div className="chakra">
            <h1>All Chakras</h1>
            <div>
                {this.props.chakras.map(chakra => <Chakra chakra={chakra} key={chakra.id} />)}
            </div>
        </div>
        )}
}

const getInfo = (state) => {
    return {
        chakras: state.allChakras.chakras,
        poses: state.allPoses.poses
    }
}


export default connect(getInfo, { getAllChakras })(ChakraContainer)