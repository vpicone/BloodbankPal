import React from "react";
import Hospital from "./Hospital";
import EndOfRoutes from "./EndOfRoutes";
import hospitaljson from "./hospitaljson";
import { Collapse } from "react-collapse";

const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "15px"
}

class HospitalContainer extends React.Component {
  getRemaingTimes(destination) {
    const times =
      hospitaljson[this.props.baseHospital].destinations[destination].times;
    const remainingTimes = times[this.props.dayOfWeek.toLowerCase()].filter(
      time => time.pickup > this.props.currentTimeString
    );

    // checks if the schedule is hidden. If it isn't return all the times to show.
    const returnTimes = this.props.showEntireSchedule
      ? times[this.props.dayOfWeek.toLowerCase()]
      : remainingTimes;
    return returnTimes;
  }

  displayHospitals() {
    return Object.keys(
      hospitaljson[this.props.baseHospital].destinations
    ).map((destination, index) =>
      <Collapse key={destination} forceInitialAnimation isOpened>
        <Hospital
          currentTimeString={this.props.currentTimeString}
          name={destination.toUpperCase()}
          remainingTimes={this.getRemaingTimes(destination)}
          key={destination}
          index={index}
        />
      </Collapse>
    );
  }

  render() {
    if (this.props.showEntireSchedule) {
      return (
        <div style={style}>
          {this.displayHospitals()}
        </div>
      );
    }
    return (
      <div style={style}>
        {this.props.complete ? <EndOfRoutes /> : this.displayHospitals()}
      </div>
    );
  }
}

export default HospitalContainer;
