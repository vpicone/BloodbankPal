import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    width: '500px',
    margin: 'auto',
}

const OrderButton = () => {
    return (
        <RaisedButton style={style} href='https://seton.medspeed.com/order/start'>Medspeed Order Form</RaisedButton>
    )
}

export default OrderButton