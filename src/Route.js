import React from 'react';
import './Route.css'
import {List, ListItem} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const liststyle = {
    display: "block",
    float: 'left',
    marginLeft: '60px',
    marginTop: '60px',
    padding: '10px',
    textAlign: 'center'
}

const listitemstyle = {
    padding: '5px',
    margin: '5px',
    borderRadius: '5px'
}

function routeComplete(stops, time){
        let completed = [];
        completed = stops.map(element => {
            if (element.arrivalTime > time)
                return false;
            else
                return true;
        });
        
        return (completed.indexOf(false) !== -1)
    }


class Route extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    componentDidMount() {
        Array.from(document.getElementsByClassName('SMCA')).forEach( element => {element.style.backgroundColor = 'PaleVioletRed';});
        Array.from(document.getElementsByClassName('DSM')).forEach( element => {element.style.backgroundColor = 'ForestGreen';});
        Array.from(document.getElementsByClassName('DCMC')).forEach( element => {element.style.backgroundColor = 'Chartreuse';});
        Array.from(document.getElementsByClassName('SMCH')).forEach( element => {element.style.backgroundColor = 'Gold';});
        Array.from(document.getElementsByClassName('SSW')).forEach( element => {element.style.backgroundColor = 'FireBrick';});
        Array.from(document.getElementsByClassName('SNW')).forEach( element => {element.style.backgroundColor = 'DodgerBlue';});
        Array.from(document.getElementsByClassName('SMCW')).forEach( element => {element.style.backgroundColor = 'OrangeRed';});
    }
    
    
    
    
    render() {
        return (
            <div className='Route'>
                 {routeComplete(this.props.route.destinations, this.props.currentTimeString.slice(0,4)) ?
                    <Card style = {liststyle}>
                        <List>
                            <ListItem><h3>Route #{this.props.route.routeNumber}</h3></ListItem>
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
                    </Card> : ''}
            </div>
        );
    }
}

export default Route;