import React from 'react';
import './HospitalContainer.css'
import Hospital from './Hospital'
import hospitalpickups from './hospitalpickups';
import EndOfRoutes from './EndOfRoutes'



class HospitalContainer extends React.Component {
  
    getRemaingTimes(times) {
        return times.filter(time => {
            return time > this.props.currentTimeString;
        });
    }
    
   
    displayHospitals() {
        return hospitalpickups.map( (hospital, index) => (
          <Hospital currentTimeString={this.props.currentTimeString} 
            name={hospital.name}
            remainingTimes={this.getRemaingTimes(hospital.times[this.props.dayOfWeek])}
            key={index}
            index={index}
          />
        ))
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