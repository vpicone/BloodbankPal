import React from 'react';
import './Hospital.css'
import {List, ListItem} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Delivery from './Delivery'

const liststyle = {
    display: "flex",
    flexDirection: "column",
    width: "170px",
    margin: "5px",
    padding: '10px',
}

const listitemstyle = {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: '5px',
    margin: '5px',
    textAlign:'center'
}

class Hospital extends React.Component {



    formatTime(time){
        return (time.slice(0,2) + ':' + time.slice(2,4));
    }

    getRemainingTimes() {
        if (this.props.remainingTimes.length === 0) {
            return (<ListItem style={listitemstyle} disabled={true}>All pickups completed.</ListItem>)
        }
        else{
            return this.props.remainingTimes.map( (time, index) => {
                return ( 
                        <div key={index}>
							<Delivery pickup={time.pickup} dropoff={time.dropoff} />
							{index < this.props.remainingTimes.length - 1 ? <Divider /> : ''}
						</div>
						)
                })
        }
    }



    render() {
        return (
            <div style={liststyle} key={this.props.index} className='Hospital'>
                <Card style={liststyle}>
    				<List>
    				    <ListItem disabled={true} 
    				              style={{display: 'flex', justifyContent: 'center'}} 
    				              innerDivStyle = {{display: 'flex', alignItems: 'center'}}>{this.props.name}</ListItem>
 						<Divider />
    				    {this.getRemainingTimes()}
    				</List>
				</Card>
            </div>
        );
    }
}

// //<ListItem primaryText={this.props.name} disabled={true} />
// 						<Divider />
// 						{this.getRemainingTimes()}
export default Hospital;
