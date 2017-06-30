import React from 'react';
import {ListItem} from 'material-ui/List';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

const Delivery = (props) => {
    return (
        <ListItem disabled={true} style={{display: 'flex', justifyContent: 'center'}} innerDivStyle = {{display: 'flex', alignItems: 'center'}}>
            <span>{props.pickup}&nbsp;</span>
            <ArrowForward  />
            <span>&nbsp;{props.dropoff}</span>
        </ListItem>
    )
}

export default Delivery;