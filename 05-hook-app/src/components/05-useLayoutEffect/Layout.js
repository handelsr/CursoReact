import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import './Layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(state);

    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setboxSize] = useState({})

    useLayoutEffect(() => {
        setboxSize( pTag.current.getBoundingClientRect() );
    },[quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>

        {
            
                <blockquote className="blockquote text-right">
                    <p 
                        className="mb-0" 
                        ref={ pTag }
                    > 
                        { quote } 
                    </p>
                </blockquote>

        }

        <pre>
            {
                JSON.stringify( boxSize, null, 3 )
            }
        </pre>
        <button className="btn btn-primary" onClick={increment}>Siguiente quote</button>
            

            
        </div>
    )
}
