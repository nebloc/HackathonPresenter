import React, { Component } from 'react';
import Countdown from './countdown/Countdown';
import Timeline from './timeline/Timeline';

class App extends Component {
    constructor() {
        super();
        this.state = {
            endTime: "02 Dec 2018 00:00:00"
        }
    }

    render() {
        return (
            <div>
                <h1>R U Hacking!</h1>
                <Countdown endTime={Date.parse(this.state.endTime)} />
                <Timeline/>
            </div>
        );
    }
}

export default App;