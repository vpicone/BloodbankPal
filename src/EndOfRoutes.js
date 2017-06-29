import React from 'react';
import Paper from 'material-ui/Paper'



const EndofRoutes = (props) => {
    
    const style = {
        width: "600px",
        margin: "auto",
    }
    
    const textStyle = {
        padding: "20px",
    }
    
    
    return (
        <div>
            <Paper zDepth="2" style={style}>
                <h1 style={textStyle}>All routes completed.
                </h1>
            </Paper>
        </div>
    )
}

export default EndofRoutes;