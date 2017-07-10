import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import { deepOrange900, cyan800, white } from 'material-ui/styles/colors';


const SelectorButton = (props) => {
  const style = {
    width: '14.66667%',
    margin: '1%',
    textDecoration: 'none',
  };

  return (
    <RaisedButton
      labelColor={white}
      backgroundColor={props.hospitalName === props.baseHospital ? deepOrange900 : cyan800}
      label={props.hospitalName}
      style={style}
      containerElement={<Link to={props.hospitalName} />}
    />
  );
};

const BaseHospitalSelector = (props) => {
  const style = {
    margin: 'auto',
    width: '700px',
    padding: '10px',
    marginTop: '20px',
  };

  return (
    <Paper zDepth={3} style={style}>
      {/* to do: enable closing the hospital selector*/}
      <h2>Which hospital are you at?</h2>
      <SelectorButton baseHospital={props.baseHospital} hospitalName="dsmc" />
      <SelectorButton baseHospital={props.baseHospital} hospitalName="smca" />
      <SelectorButton baseHospital={props.baseHospital} hospitalName="dcmc" />
      <SelectorButton baseHospital={props.baseHospital} hospitalName="smcw" />
      <SelectorButton baseHospital={props.baseHospital} hospitalName="snw" />
      <SelectorButton baseHospital={props.baseHospital} hospitalName="smch" />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p>Pickup&nbsp;</p> <ArrowForward /> <p>&nbsp;Dropoff</p></div>
    </Paper>
  );
};

export default BaseHospitalSelector;
