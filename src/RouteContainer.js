import React from 'react';
import './RouteContainer.css'
import Hospital from './Hospital'
import hospitalpickups from './hospitalpickups';
import EndOfRoutes from './EndOfRoutes'



class RouteContainer extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            zig: 'sag',
        }
    }
    
    getRemaingTimes(times) {
        return times.filter(time => {
            return time > this.props.currentTimeString;
        });
    }
    
    allRoutesDone() {
        let times = [];
        
        //push all pickup times to a single array
        hospitalpickups.forEach( hospital => {
            times.push(hospital.times[this.props.dayOfWeek])
        })
        
        
        const flattenedTimes = times.reduce( (a, b) => {
            return a.concat(b);
        });
        
        //find any times that have yet to be met
        const allRemainingTimes = flattenedTimes.filter(time => {
            return time > this.props.currentTimeString;
        })
        
        //return true if no more times remaining
        return(allRemainingTimes.length === 0);
    }
   
    displayHospitals() {
        return hospitalpickups.map( (hospital, index) => (
          <Hospital currentTimeString={this.props.currentTimeString} 
            dayOfWeek={this.props.dayOfWeek}
            name={hospital.name}
            times={hospital.times[this.props.dayOfWeek]}
            key={index}
          />
        ))
    }
    
    render () {
        return (
            <div className="RouteContainer">
                {this.allRoutesDone() ? <EndOfRoutes /> : this.displayHospitals() }
            </div>
        );
    }
}

export default RouteContainer;