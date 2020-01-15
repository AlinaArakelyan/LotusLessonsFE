import React from 'react';
import Chakra from './Chakra';
import { connect } from 'react-redux';
import { getAllChakras } from "../redux/actions"


class ChakraContainer extends React.Component{

    componentDidMount() {
        this.props.getAllChakras()
    }
    
    render() {
        return (
        <div>
            <h1>All Chakras</h1>
            <div>
                {this.props.chakras.map(chakra => <Chakra chakra={chakra} key={chakra.id} />)}
            </div>
        </div>
        )}
}

const getInfo = (state) => {
    return {
        chakras: state.allChakras.chakras
    }
}


export default connect(getInfo, { getAllChakras })(ChakraContainer)