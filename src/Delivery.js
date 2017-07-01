import React from 'react';
import {ListItem} from 'material-ui/List';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

const Delivery = (props) => {
    
    function formatTime(time) {
        return (`${time.slice(0,2)}:${time.slice(2,4)}`);
    }
    
    return (
        <ListItem disabled={true} style={{display: 'flex', justifyContent: 'center'}} innerDivStyle = {{display: 'flex', alignItems: 'center'}}>
            <span>{formatTime(props.pickup)}&nbsp;</span>
            <ArrowForward  />
            <span>&nbsp;{formatTime(props.dropoff)}</span>
        </ListItem>
    )
}

export default Delivery;