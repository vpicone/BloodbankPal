import React from "react";
import TitleBar from "./MedspeedComponents/TitleBar";
import HospitalContainer from "./MedspeedComponents/HospitalContainer";
import hospitaljson from "./MedspeedComponents/hospitaljson.js";
import Footer from "./MedspeedComponents/Footer";
import BaseHospitalSelector from "./MedspeedComponents/BaseHospitalSelector";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
      showEntireSchedule: false,
      overRideDay: null
    };
    this.showSchedule = this.showSchedule.bind(this);
    this.pickDay = this.pickDay.bind(this);
    this.reset = this.reset.bind(this);
  }
  

  showSchedule() {
    this.setState((prevState, props) => ({
      showEntireSchedule: !prevState.showEntireSchedule
    }));
  }
  
  pickDay(newDay) {
    this.setState((prevState, props) => ({
      showEntireSchedule: true,
      overRideDay: newDay,
    }));
  }
  
  reset() {
    this.setState((prevState, props) => ({
      showEntireSchedule: false,
      overRideDay: null,
    }));
  }

  dayString(day) {
    let str;
    switch (day) {
      case 0:
        str = "Sunday";
        break;
      case 1:
        str = "Monday";
        break;
      case 2:
        str = "Tuesday";
        break;
      case 3:
        str = "Wednesday";
        break;
      case 4:
        str = "Thursday";
        break;
      case 5:
        str = "Friday";
        break;
      case 6:
        str = "Saturday";
        break;
      default:
        str = "No date";
        break;
    }
    return str;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  allRoutesDone(currentTimeString) {
    let times = [];
    const currentHospital = this.props.match.params.id || "dsmc";
    const dayOfWeekString = this.dayString(
      this.state.currentTime.getDay()
    ).toLowerCase();
    const comparator = this.state.currentTime
      .toTimeString("en-US", { hour12: false })
      .replace(/:/g, "")
      .slice(0, 4);

    //push all pickup times to a single array
    Object.keys(
      hospitaljson[currentHospital].destinations
    ).forEach(destination => {
      const destinationTimes =
        hospitaljson[currentHospital].destinations[destination].times[
          dayOfWeekString
        ];

      destinationTimes.forEach(time => {
        times.push(time.pickup);
      });
    });

    const finished = times.every(time => {
      return time < comparator || time === "2359";
    });

    return finished;
  }

  tick() {
    this.setState({
      currentTime: new Date()
    });
  }

  render() {
    const currentTimeString = this.state.currentTime
      .toTimeString("en-US", { hour12: false })
      .replace(/:/g, "");
    const dayOfWeekString = this.dayString(this.state.currentTime.getDay());

    return (
      <div style={{flex: '1'}}>
          <TitleBar
            currentTime={this.state.currentTime}
            dayOfWeek={dayOfWeekString}
          />
          <BaseHospitalSelector 
            dayOfWeek={this.state.overRideDay || dayOfWeekString} 
            pickDay={this.pickDay} 
            baseHospital={this.props.match.params.id}
            reset={this.reset} />
          {this.props.match.params.id
            ? <HospitalContainer
                baseHospital={this.props.match.params.id}
                className="HospitalContainer"
                currentTimeString={currentTimeString}
                showEntireSchedule={this.state.showEntireSchedule}
                complete={this.allRoutesDone(currentTimeString)}
                dayOfWeek={this.state.overRideDay || dayOfWeekString}
              />
            : ""}
          <Footer
            showEntireSchedule={this.state.showEntireSchedule}
            showSchedule={this.showSchedule}
          />
      </div>
    );
  }
}

export default App;
