import React from 'react';
const DisplayComponent = ({displayValue}) => {

    return (
        <div className="calculator-display">
            <h1>{displayValue}</h1>
        </div>
    );
};

export default DisplayComponent;