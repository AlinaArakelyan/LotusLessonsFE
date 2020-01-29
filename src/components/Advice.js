import React from 'react';

const Advice = ({ advice }) => (

    <div>
        <div>Chakra: {advice.chakra.name} {advice.chakra.symbol} Advice: {advice.advice}</div>
    </div>

)

export default Advice