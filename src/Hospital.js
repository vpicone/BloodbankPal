import React from 'react';
import './Hospital.css'
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

class Hospital extends React.Component {
    
    constructor(props)
    {
        super(props);
        this.remainingTimes = this.props.times.filter( time => {
            return time > this.props.currentTimeString;
        });
        this.pickupsPending = this.remainingTimes.length !== 0; 
        
    }
    
    formatTime(time){
        return (time.slice(0,2) + ':' + time.slice(2,4));
    }
    
    getRemainingTimes() {
        if (this.remainingTimes.length === 0) {
            return (<ListItem style={listitemstyle} disabled='true'>All routes completed.</ListItem>)
        }
        else{
            return this.remainingTimes.map( time => {
                return ( <div>
                            <ListItem style={listitemstyle} disabled='true'>{this.formatTime(time)}</ListItem>
                            <Divider />
                         </div>)
                })
        }
    }
    
    render() {
        
        return (
            <div className='Hospital'>
                <Card style = {liststyle}>
                    <List>
                        <ListItem style={listitemstyle} disabled='true'><h3>{this.props.name}</h3></ListItem>
                        <Divider />
                        {this.getRemainingTimes()}
                    </List>
                </Card>
            </div>
        );
    }
}

export default Hospital;