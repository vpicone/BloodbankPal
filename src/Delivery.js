import React from 'react';
import { ListItem } from 'material-ui/List';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

class Delivery extends React.Component {

  formatTime(time) {
    return (`${time.slice(0, 2)}:${time.slice(2, 4)}`);
  }

  render() {
    if (this.props.pickup === '2359') {
      return (
        <ListItem disabled style={{ display: 'flex', justifyContent: 'center' }} innerDivStyle={{ display: 'flex', alignItems: 'center' }}>
          <span>No routes for today.</span>
        </ListItem>
      );
    }
	  return (
  <ListItem disabled style={{ display: 'flex', justifyContent: 'center' }} innerDivStyle={{ display: 'flex', alignItems: 'center' }}>
    <span>{this.formatTime(this.props.pickup)}&nbsp;</span>
    <ArrowForward />
    <span>&nbsp;{this.formatTime(this.props.dropoff)}</span>
  </ListItem>
	  );
  }
}

export default Delivery;
