import React from 'react';
import './Route.css'
import {List, ListItem} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const liststyle = {
    display: "inline-block",
    float: "none",
    width: "125px",
    margin: "20px",
    padding: '10px',
    textAlign: 'center'
}

const listitemstyle = {
    padding: '5px',
    margin: '5px',
    borderRadius: '5px',
    textAlign:'center'
}

function routeIncomplete(stops, time){
        let completed = [];
        completed = stops.map(element => {
            if (element.arrivalTime > time)
                return false;
            else
                return true;
        });
        
        return (completed.includes(false))
    }


class Route extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            destinations: this.props.route.destinations,
            completed: false,
        }
    }
    
    
    
    render() {
        
        return (
            <div className='Route'>
                 {routeIncomplete(this.props.route.destinations, this.props.currentTimeString.slice(0,4)) && (this.props.route.weekendRoute === this.props.isWeekend) ?
                    <Card style = {liststyle}>
                        <List>
                            <ListItem disabled='true'><h3>Route<br/><br/>{this.props.route.routeNumber}</h3></ListItem>
                            <Divider />
                                {this.props.route.destinations.map( (destination, index) => (
                                    <div>
                                        {destination.arrivalTime > this.props.currentTimeString.slice(0,4) ? 
                                            <ListItem
                                                disabled='true'
                                                style={listitemstyle}
                                                primaryText={destination.hospital}
                                                className={destination.hospital}
                                                secondaryText={destination.arrivalTime.slice(0,2) + ":" + destination.arrivalTime.slice(2,4)} 
                                                key={index} 
                                            /> : ''}
                                        {index !== this.props.route.destinations.length - 1 ? <Divider /> : ''}
                                    </div>
                                ))}
                        </List>
                    </Card>
                 : ''}
            </div>
        );
    }
}

export default Route;