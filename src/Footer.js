import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

  

const Footer = (props) => {
    
    const style = {
        width: "350px",
        margin: "auto",
        position: "relative",
        bottom: '0',
    };
    
    const textStyle = {
        padding: "5px",
        display: "inline-block",
    };
    
    const buttonStyle = {
        padding: "5px",
        margin: "5px",
    }
    
    const body = "Hospital:%0ATime:%0A";
    
    
    return (
        <div>
            <Paper zDepth={2} style={style}>
                <h3 style={textStyle}>Schedule incorrect?&nbsp;&nbsp;&nbsp;
                    <span>
                        <RaisedButton label="Email me" style={buttonStyle} href={`mailto:vppicone@ascension.org?subject=Medspeed%20Route%20Issue&body=${body}`} />
                    </span>
                </h3>
            </Paper>
        </div>
    )
}

export default Footer;