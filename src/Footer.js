import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import EmailIcon from 'material-ui/svg-icons/communication/email';



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
    return (
        <div>
					<Paper zDepth={2} style={style}>
						<h3 style={textStyle}>Schedule incorrect?&nbsp;&nbsp;&nbsp;
							<span>
								<RaisedButton label="Email me"
									primary='true'
									icon={<EmailIcon />}
									href={'mailto:vppicone@ascension.org?subject=Medspeed%20Route%20Issue&body=Hospital:%0ATime:%0A'}
								/>
							</span>
						</h3>
					</Paper>
        </div>
    )
}

export default Footer;
