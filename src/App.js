import React from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TitleBar from './TitleBar';
import HospitalContainer from './HospitalContainer';
import hospitalpickups from './hospitalpickups';
import Footer from './Footer';
injectTapEventPlugin();


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
    };
  }
  
  dayString(day) {
    let str;
    switch(day) {
        case 0:
            str = 'Sunday';
            break;
        case 1:
            str = 'Moday';
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
        //push all pickup times to a single array
        hospitalpickups.forEach( hospital => {
            times.push(hospital.times[this.state.currentTime.getDay()])
        })


        const flattenedTimes = times.reduce( (a, b) => {
            return a.concat(b);
        });


        //find any times that have yet to be met
        const allRemainingTimes = flattenedTimes.filter(time => {
            return time > currentTimeString;
        })
        //return true if no more times remaining
        return(allRemainingTimes.length === 0);
  }

  tick() {
    this.setState({
      currentTime: new Date(),
    });
  }

  render() {

    const currentTimeString = this.state.currentTime.toLocaleTimeString('en-US', { hour12: false }).replace(/:/g,'');
    const dayOfWeekString = this.dayString(this.state.currentTime.getDay());

    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
            <TitleBar currentTime = {this.state.currentTime} 
                      dayOfWeek={dayOfWeekString} />
            <HospitalContainer className = 'HospitalContainer' 
                               currentTimeString={currentTimeString} 
                               complete = {this.allRoutesDone(currentTimeString)} 
                               dayOfWeek = {dayOfWeekString} />
            <Footer />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
