import React from 'react';
import Paper from 'material-ui/Paper';
import OrderButton from './OrderButton';



  

const TitleBar = (props) => {
    
    function dayString(day) {
        let str;
        switch(day) {
            case 0:
                str = 'Sunday';
                break;
            case 1:
                str = 'Moday';
                break;
            case 2:
                str = 'Tuesday';
                break;
            case 3:
                str = 'Wednesday';
                break;
            case 4:
                str = 'Thursday';
                break;
            case 5:
                str = 'Friday';
                break;
            case 6:
                str = 'Saturday';
                break;
            default:
                str = 'No date'
                break;
        }
        
        return str;
    }
    
    const style = {
        width: "600px",
        margin: "auto",
    };
    
    const textStyle = {
        padding: "20px",
    };
    
    return (
        <div>
            <Paper zDepth={2} style={style}>
                <h1 style={textStyle}> {dayString(props.dayOfWeek)} Mespeed Routes
                    <br />
                    Current Time: {props.currentTime.toLocaleTimeString('en-US', { hour12: false })}
                    
                </h1>
                <OrderButton />
            </Paper>
        </div>
    )
}

export default TitleBar;