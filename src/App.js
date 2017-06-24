import React from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './TitleBar';
import OrderButton from './OrderButton';
import RouteContainer from './RouteContainer';
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
            <RouteContainer className = 'RouteContainer' currentTimeString={currentTimeString} isWeekend={isWeekend} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
