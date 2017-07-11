import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { cyan800, white } from 'material-ui/styles/colors';

const style = {
  width: '50%',
  marginBottom: '40px',
  textDecoration: 'none',
};

const OrderButton = () => (
  <RaisedButton labelColor={white} target="_blank" rel="noopener noreferrer" backgroundColor={cyan800} label="Medspeed Order Form" style={style} href="https://seton.medspeed.com/order/start" />
    );

export default OrderButton;
