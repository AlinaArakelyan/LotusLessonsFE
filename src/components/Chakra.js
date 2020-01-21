import React from 'react';

const Chakra = ({ chakra }) => (
    
    // <div className="App" >
    <div>
        <h4>Chakra: {chakra.name} </h4> <img src={chakra.symbol} className="App-logo"></img> {chakra.description}
    </div>
)

export default Chakra

