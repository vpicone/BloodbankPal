import React from 'react';
import Paper from 'material-ui/Paper'



const TitleBar = (props) => {
    
    const style = {
        width: "600px",
        margin: "auto",
    }
    
    const textStyle = {
        padding: "20px",
    }
    
    
    return (
        <div>
            <Paper style={style}>
                <h1 style={textStyle}>MedSpeed Courier Route Times
                    <br />
                    {props.currentTime.toLocaleTimeString('en-US', { hour12: false })}
                    {props.isWeekend ? ' - Weekend Routes' : ' - Weekday Routes'}
                </h1>
            </Paper>
        </div>
    )
}

export default TitleBar;