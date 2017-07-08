import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import {deepOrange800, cyan800, white} from 'material-ui/styles/colors';


const SelectorButton = (props) => {
  const style = {
      width: '14.66667%',
      margin: '1%',
      textDecoration: 'none',
  };

  return (
      <RaisedButton
        labelColor={white}
        backgroundColor={ props.hospitalName === props.baseHospital ? deepOrange800 : cyan800}
        label={props.hospitalName}
        style={style}
        containerElement={<Link to={props.hospitalName} />}
      />
  );
}

const BaseHospitalSelector = (props) => {
    const style = {
		margin: "auto",
		width: "700px",
		padding: "10px",
		marginTop: "20px",
    };

    return (
		<Paper zDepth={3} style={style}>
			<h3>Select your base hospital.</h3>
      <SelectorButton baseHospital = {props.baseHospital} hospitalName = 'DSM' />
      <SelectorButton baseHospital = {props.baseHospital} hospitalName = 'SMCA' />
      <SelectorButton baseHospital = {props.baseHospital} hospitalName = 'DCMC' />
      <SelectorButton baseHospital = {props.baseHospital} hospitalName = 'SMCW' />
      <SelectorButton baseHospital = {props.baseHospital} hospitalName = 'SNW' />
      <SelectorButton baseHospital = {props.baseHospital} hospitalName = 'SMCH' />
		</Paper>
    )
}

export default BaseHospitalSelector;
