import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import History from 'material-ui/svg-icons/action/history';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import { deepOrange900, cyan800, white } from 'material-ui/styles/colors';


const Footer = (props) => {
  const style = {
    flex: '1',
    alignItems: 'center',
    margin: '12px',
    position: 'relative',
    bottom: '0',
  };

  const textStyle = {
    padding: '5px',
    display: 'inline-block',
  };

  return (
    <div style={{ display: 'flex', marginLeft: '15%', marginRight: '15%' }}>
      <Paper zDepth={3} style={style}>
        <h3 style={textStyle}>Schedule incorrect?&nbsp;&nbsp;&nbsp;
          <span>
            <RaisedButton
              label="Email me"
              labelColor={white}
              backgroundColor={cyan800}
              // primary='true'
              icon={<EmailIcon />}
              href={'mailto:vppicone@ascension.org?subject=Medspeed%20Route%20Issue&body=Hospital:%0ATime:%0A'}
            />
          </span>
        </h3>
      </Paper>
      <Paper zDepth={3} style={style}>
        <h3 style={textStyle}>{props.showEntireSchedule ? 'Showing full schedule' : 'Show full schedule'}.&nbsp;&nbsp;&nbsp;
          <span>
            <RaisedButton
              label={props.showEntireSchedule ? 'Hide' : 'Show'}
              labelColor={white}
              backgroundColor={props.showEntireSchedule ? deepOrange900 : cyan800}
                // primary='true'
              icon={props.showEntireSchedule ? <History /> : <AccessTime />}
              onClick={props.showSchedule}
            />
          </span>
        </h3>
      </Paper>
    </div>
  );
};

export default Footer;
