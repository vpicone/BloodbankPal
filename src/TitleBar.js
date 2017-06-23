import React from 'react';

const TitleBar = (props) => {
    return (
        <div>
            <h1>MedSpeed Courier Route Times</h1>
            <h1>Current Time: {props.currentTime.toLocaleTimeString('en-US', { hour12: false })}</h1>
        </div>
    )
}

export default TitleBar;