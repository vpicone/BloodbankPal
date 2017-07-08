import React from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TitleBar from './TitleBar';
import HospitalContainer from './HospitalContainer';
import hospitaljson from './hospitaljson.js';
import Footer from './Footer';


injectTapEventPlugin();


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
      showEntireSchedule: false,
    };
    this.showSchedule = this.showSchedule.bind(this);
  }

  showSchedule() {
    this.setState((prevState, props) => ({ showEntireSchedule: !prevState.showEntireSchedule }));
  }

  dayString(day) {
    let str;
    switch(day) {
        case 0:
            str = 'Sunday';
            break;
        case 1:
            str = 'Monday';
            break;
        case 2:
            str = 'Tuesday';
            break;
        case 3:
            str = 'Wednesday';
            break;
        case 4:
            str = 'Thursday';
            break;
        case 5:
            str = 'Friday';
            break;
        case 6:
            str = 'Saturday';
            break;
        default:
            str = 'No date'
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
        const dayOfWeekString = this.dayString(this.state.currentTime.getDay()).toLowerCase();
        //push all pickup times to a single array
        Object.keys(hospitaljson.dsmc.destinations).forEach( destination => {
          const destinationTimes =
            hospitaljson
             .dsmc
             .destinations[destination]
             .times[dayOfWeekString];

          destinationTimes.forEach( time => {
            times.push(time.pickup);
          });

        })


        const finished = times.every(time => {
          return time < this.state.currentTime.toTimeString('en-US', { hour12: false }).replace(/:/g,'').slice(0,4);
        })

        return (finished);
  }

  tick() {
    this.setState({
      currentTime: new Date(),
    });
  }

  render() {

    const currentTimeString = this.state.currentTime.toTimeString('en-US', { hour12: false }).replace(/:/g,'');
    const dayOfWeekString = this.dayString(this.state.currentTime.getDay());

    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
            <TitleBar
              currentTime={this.state.currentTime}
              dayOfWeek={dayOfWeekString}
            />
            <HospitalContainer
              className="HospitalContainer"
              currentTimeString={currentTimeString}
              showEntireSchedule={this.state.showEntireSchedule}
              complete={this.allRoutesDone(currentTimeString)}
              dayOfWeek={dayOfWeekString}
            />
            <Footer showEntireSchedule={this.state.showEntireSchedule} showSchedule={this.showSchedule} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
