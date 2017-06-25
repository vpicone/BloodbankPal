import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    width: '500px',
    margin: 'auto',
    textDecoration: 'none',
}

const OrderButton = () => {
    return (
        <RaisedButton buttonStyle={style} style={style} href='https://seton.medspeed.com/order/start'>Medspeed Order Form</RaisedButton>
    )
}

export default OrderButton