import React from 'react';

const Chakra = ({ chakra }) => (
    
    <div>
        <h4>Chakra: {chakra.name} </h4> <img src={chakra.symbol} className="symbol"></img> {chakra.description}
    </div>
)

export default Chakra

