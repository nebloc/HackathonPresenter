import React, { Component } from 'react';
import Countdown from './countdown/Countdown';
import Timeline from './timeline/Timeline';
import Message from './message/Message';
import { HubConnectionBuilder, DefaultHttpClient, TransportType, ConsoleLogger, LogLevel } from '@aspnet/signalr';
import CustomHttpClient from './CustomHttpClient';

class App extends Component {
    constructor() {
        super();
        this.state = {
            endTime: "02 Dec 2018 00:00:00"
        }

        const apiBaseUrl = 'https://runotify.azurewebsites.net'
        let connection = new HubConnectionBuilder()
            .withUrl(apiBaseUrl, {
                httpClient: new CustomHttpClient()
            })
            .build();
        
        // fetch("https://runotify.azurewebsites.net/negotiate", ).then(d=>{d.json().then((body) => {console.log(body)})})

        connection.start()
            .then(function() { console.log('connected!') })
            .catch(function(err) {
              console.error(err)
            })
        
        connection.on("updatedInfo", data => {
            console.log(data);
        });
 
    }

    render() {
        return (
            <div>
                <h1>R U Hacking!</h1>
                <Countdown endTime={Date.parse(this.state.endTime)} />
                <Message />
                <Timeline />
            </div>
        );
    }
}

export default App;