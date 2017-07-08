import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import OrderButton from './OrderButton';


const TitleBar = (props) => {
  const style = {
    margin: 'auto',
    width: '600px',
    padding: '5px',
    marginTop: '20px',
  };
  TitleBar.propTypes = {
    currentTime: PropTypes.string.isRequired,
    dayOfWeek: PropTypes.string.isRequired,
  };

  return (
    <Paper zDepth={3} style={style}>
      <h1>{props.dayOfWeek} Mespeed Routes
        <br />
        Current Time: {props.currentTime.toLocaleTimeString('en-US', { hour12: false })}
      </h1>
      <OrderButton />
    </Paper>
  );
};

export default TitleBar;
