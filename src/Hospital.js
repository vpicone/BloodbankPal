import React from 'react';
import './Hospital.css';
import { List, ListItem } from 'material-ui/List';
import { Card } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Delivery from './Delivery';

const liststyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '170px',
  marginLeft: '5px',
  marginRight: '5px',
};

const listitemstyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  padding: '5px',
  margin: '5px',
  textAlign: 'center',
};

const dividerstyle = {
  marginLeft: '12px',
  marginRight: '12px',
};

class Hospital extends React.Component {


  formatTime(time) {
    return (`${time.slice(0, 2)}:${time.slice(2, 4)}`);
  }

  getRemainingTimes() {
    if (this.props.remainingTimes.length === 0) {
      return (<ListItem style={listitemstyle} disabled>All pickups completed.</ListItem>);
    }

    return this.props.remainingTimes.map((time, index) => (
      <div key={index}>

        <Delivery pickup={time.pickup} dropoff={time.dropoff} />

        {index < this.props.remainingTimes.length - 1 ? <Divider style={dividerstyle} /> : ''}
      </div>
						));
  }


  render() {
    return (
      <div key={this.props.index} className="Hospital">
        <Card style={liststyle}>
          <List>
            <ListItem
              disabled
              style={{ display: 'flex', justifyContent: 'center' }}
              innerDivStyle={{ display: 'flex', alignItems: 'center' }}
            ><h2>{this.props.name}</h2></ListItem>
            <Divider style={dividerstyle} />
            {this.getRemainingTimes()}
          </List>
        </Card>
      </div>
    );
  }
}


export default Hospital;
