import React from 'react';

const TitleBar = (props) => {
    return (
        <div>
            <h1>MedSpeed Courier Route Times</h1>
            <h1>{props.currentTime.toLocaleTimeString('en-US', { hour12: false })}
                {props.isWeekend ? ' - Weekend Routes' : ' - Weekday Routes'}
            </h1>
            
        </div>
    )
}

export default TitleBar;