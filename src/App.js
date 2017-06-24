import React from 'react';
import './App.css';
import Route from './Route';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routeData from './routeData';
import TitleBar from './TitleBar';
import OrderButton from './OrderButton';
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

  tick() {
    this.setState({
      currentTime: new Date(),
    });
  }
  
  render() {
    
    const currentTimeString = this.state.currentTime.toLocaleTimeString('en-US', { hour12: false }).replace(/:/g,'');
    const isWeekend = (this.state.currentTime.getDay() === 0 || this.state.currentTime.getDay() === 6);
    
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <TitleBar currentTime = {this.state.currentTime} isWeekend = {isWeekend} />
            <OrderButton />
            {/*This Should be it's own component*/}
            {routeData.map( (route, index) => (
              <Route currentTimeString={currentTimeString} 
                     route={route} 
                     key={index}
                     isWeekend={isWeekend}
              />
            ))}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
