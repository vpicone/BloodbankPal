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
    padding: '10px',
    marginTop: '20px',
  };

  return (
    <Paper zDepth={3} style={style}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3>Which hospital are you at?</h3>
        <DropDownMenu value={props.baseHospital} openImmediately={!props.baseHospital}>
          <MenuItem value="dsmc" primaryText="Dell Seton" containerElement={<Link to="dsmc" />} />
          <MenuItem value="smca" primaryText="Main" containerElement={<Link to="smca" />} />
          <MenuItem value="dcmc" primaryText="Dell Children's" containerElement={<Link to="dcmc" />} />
          <MenuItem value="smcw" primaryText="Williamson" containerElement={<Link to="smcw" />} />
          <MenuItem value="snw" primaryText="North West" containerElement={<Link to="snw" />} />
          <MenuItem value="smch" primaryText="Hays" containerElement={<Link to="smch" />} />
        </DropDownMenu>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>Pickup&nbsp;</p> <ArrowForward /> <p>&nbsp;Dropoff</p></div>
    </Paper>
  );
};

export default BaseHospitalSelector;
