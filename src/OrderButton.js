import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    width: '500px',
    margin: '10px',
    textDecoration: 'none',
}

const OrderButton = () => {
    return (
        <RaisedButton label="Medspeed Order Form" primary="true" buttonStyle={style} style={style} href='https://seton.medspeed.com/order/start' />
    )
}

export default OrderButton