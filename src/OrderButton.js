import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    width: '500px',
    marginBottom: '40px',
    textDecoration: 'none',
}

const OrderButton = () => {
    return (
        <RaisedButton label="Medspeed Order Form" primary="true" style={style} href='https://seton.medspeed.com/order/start' />
    )
}

export default OrderButton
