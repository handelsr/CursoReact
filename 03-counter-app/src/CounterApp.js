import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState( value );

    // handleAdd
    const handleAdd = () => {
        // setCounter( counter + 1);
        setCounter( (c) => c + 1 );
    }

    // handleSubstact
    const handleSubstact = () => {
        // setCounter( counter - 1);
        setCounter( (c) => c - 1 );
    }

    // handleReset
    const handleReset = () => {
        // setCounter( value );
        setCounter( (c) => value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleSubstact }>-1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleAdd }>+1</button>
        </>

    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;