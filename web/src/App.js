import React, { Component } from 'react';
import Countdown from './countdown/Countdown';
import Timeline from './timeline/Timeline';
import Message from './message/Message';
import { HubConnectionBuilder, DefaultHttpClient, TransportType, ConsoleLogger, LogLevel } from '@aspnet/signalr';
import CustomHttpClient from './CustomHttpClient';

class App extends Component {
    constructor() {
        super();
        const apiBaseUrl = 'https://runotify.azurewebsites.net'
        let connection = new HubConnectionBuilder()
            .withUrl(apiBaseUrl, {
                httpClient: new CustomHttpClient() // this took far too long to work out
            })
            .build();

        connection.start()
            .then(function() { fetch("https://runotify.azurewebsites.net/api/GetIntial?code=0Hf7L8lhKB7UP8GalvtE9IZ9Pmy6jV59Aa4vcD0iCzAdkMOs4UNC1g==") })
            .catch(function(err) {
              console.error(err)
            });

        this.state = {
            endTime: "02 Dec 2018 00:00:00",
            connection: connection,
        }
    }

    render() {
        return (
            <div>
                <h1>R U Hacking!</h1>
                <Countdown endTime={Date.parse(this.state.endTime)} />
                <Message />
                <Timeline connection={this.state.connection} />
            </div>
        );
    }
}

export default App;