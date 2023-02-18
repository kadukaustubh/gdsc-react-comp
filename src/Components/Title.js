import React from 'react';

// React Functional Component
export default function Title(props) {
    return (
        <div>
            <h1>{props.header}</h1>
            <p>{props.children}</p>
        </div>
    )
}
