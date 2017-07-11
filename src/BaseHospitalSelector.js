import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


const BaseHospitalSelector = (props) => {
  const style = {
    // display: 'flex',
    flex: 'column',
    margin: 'auto',
    width: '700px',
    padding: '5px',
    marginTop: '20px',
  };

  return (
    <Paper zDepth={3} style={style}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
        <span style={{'fontSize': '25px', 'fontFamily':'Roboto'}}>Which hospital are you at?</span>
        <DropDownMenu
          labelStyle={{'fontSize': '25px'}}
          value={props.baseHospital}
          openImmediately={!props.baseHospital}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <MenuItem value="dsmc" label="DSM" primaryText= "Dell Seton Medical Center" containerElement={<Link to="dsmc" />} />
          <MenuItem value="smca" label="SMCA" primaryText="Seton Medical Center Austin" containerElement={<Link to="smca" />} />
          <MenuItem value="dcmc" label="DCMC" primaryText= "Dell Children's Medical Center" containerElement={<Link to="dcmc" />} />
          <MenuItem value="smcw" label="SMCW" primaryText= "Seton Medical Center Williamson" containerElement={<Link to="smcw" />} />
          <MenuItem value="snw" label="SNW" primaryText="Seton North West" containerElement={<Link to="snw" />} />
          <MenuItem value="smch" label="SMCH" primaryText="Seton Medical Center Hays" containerElement={<Link to="smch" />} />
        </DropDownMenu>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>Pickup&nbsp;</p> <ArrowForward /> <p>&nbsp;Dropoff</p></div>
    </Paper>
  );
};

export default BaseHospitalSelector;
