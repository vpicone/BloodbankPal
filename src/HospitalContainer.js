import React from 'react';
import './HospitalContainer.css'
import Hospital from './Hospital'
import EndOfRoutes from './EndOfRoutes';
import hospitaljson from './hospitaljson';



class HospitalContainer extends React.Component {
  
    getRemaingTimes(destination) {
        
        const times = hospitaljson.dsmc.destinations[destination].times;
        const remainingTimes = times[this.props.dayOfWeek.toLowerCase()].filter( time => {
            return time.pickup > this.props.currentTimeString
        });
        
        return(remainingTimes);
        
    }
    
    
    
    
    
   
    displayHospitals() {
        return Object.keys(hospitaljson.dsmc.destinations).map( (destination, index) => (

          <Hospital currentTimeString={this.props.currentTimeString} 
            name={destination.toUpperCase()}
            remainingTimes={this.getRemaingTimes(destination)}
            key={index}
            index={index}
          />
         
        )
        
        )
    }
    
    
    render () {
        return (
            <div className="HospitalContainer">
                {this.props.complete ? <EndOfRoutes /> : this.displayHospitals() }
            </div>
        );
    }
}

export default HospitalContainer;