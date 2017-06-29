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
    const isWeekend = (this.state.currentTime.getDay() === 0 || this.state.currentTime.getDay() === 6);
    const dayOfWeek = this.state.currentTime.getDay();

    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
            <TitleBar currentTime = {this.state.currentTime} isWeekend = {isWeekend} dayOfWeek={dayOfWeek} />
            <HospitalContainer className = 'HospitalContainer' currentTimeString={currentTimeString} complete = {this.allRoutesDone(currentTimeString)} dayOfWeek = {dayOfWeek} />
            <Footer />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
