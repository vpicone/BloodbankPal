import React from 'react';
import './RouteContainer.css'
import Route from './Route';
import routeData from './routeData';



const RouteContainer = (props) => {
    return (
        <div className="RouteContainer">
            {routeData.map( (route, index) => (
              <Route currentTimeString={props.currentTimeString} 
                isWeekend={props.isWeekend}
                route={route} 
                key={index}
              />
            ))}
        </div>
    );
}

export default RouteContainer;