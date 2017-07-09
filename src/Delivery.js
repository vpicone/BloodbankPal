import React from 'react';
import { ListItem } from 'material-ui/List';
import { TweenMax } from 'gsap';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

class Delivery extends React.Component {

  componentWillEnter(callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, { y: 100, opacity: 0 }, { y: 0, opacity: 1, onComplete: callback });
  }

  componentWillLeave(callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, { y: 0, opacity: 1 }, { y: -100, opacity: 0, onComplete: callback });
  }

  formatTime(time) {
    return (`${time.slice(0, 2)}:${time.slice(2, 4)}`);
  }

  render() {
    if (this.props.pickup === "2359") {
      return (
        <ListItem disabled style={{ display: 'flex', justifyContent: 'center' }} innerDivStyle={{ display: 'flex', alignItems: 'center' }}>
          <span>No routes for today.</span>
        </ListItem>
      )
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
