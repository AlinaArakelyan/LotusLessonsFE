import React from 'react';
import { connect } from 'react-redux';
import { getSingleChakra } from "../redux/actions"

const Chakra = ({ chakra }) => (
    
    // componentDidMount(){

    // }

    <div>
        <h4>Chakra: {chakra.name} </h4> <img src={chakra.symbol} className="App-logo"></img> {chakra.description}
    </div>
)


export default connect(null, {getSingleChakra})(Chakra)
