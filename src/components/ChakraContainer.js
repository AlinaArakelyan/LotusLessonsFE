import React from 'react';
import Chakra from './Chakra';
import { connect } from 'react-redux';
import { setChakras } from "../redux/actions"


class ChakraContainer extends React.Component{

    componentDidMount() {
        fetch(`http://localhost:3000/chakras`)
        .then(resp => resp.json())
            .then(arrayOfChakras => {
            this.props.setChakras(arrayOfChakras)
        })
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
    console.log(state)
    return {
        chakras: state.allChakras.chakras
    }
}


export default connect(getInfo, { setChakras })(ChakraContainer)