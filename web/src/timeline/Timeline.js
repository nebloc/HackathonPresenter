import React from 'react';
import './Timeline.css'

export default class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // TODO: Remove place holder data
            // Need to understand the data structure coming
            // from google sheets
            events: [
                {
                    name: "Intro",
                    time: "09:00"

                },
                {
                    name: "Hacking starts",
                    time: "10:00"
                },
                {
                    name: "Lunch",
                    time: "12:00"
                },
                {
                    name: "Presentation",
                    time: "17:00"
                },
            ]
        }
    }

    componentDidMount() {
        // TODO: listen to serverless function for the
        // data from GS
    }

    formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes;
        return strTime;
    }

    render() {
        return (
            <ul className="timeline">
                {
                    // Loop and render events in the list
                    this.state.events.map((event, i) => {
                        // TODO: set current to true if time is correct
                        let current = false;
                        return <Event
                            key={i}
                            data={event}
                            current={current}
                        ></Event>
                    })
                }
            </ul>
        );
    }

}

class Event extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'white' // background of the event
        }
    }

    // Should be called if time is after event time, and before
    // next event.
    setBackground() {
        if (this.props.current) {
            this.setState({ color: 'lightgrey' });
        }
    }

    // TODO: set this based on current time and
    // event time
    componentDidMount() {
        this.setBackground()
    }

    render() {
        return (
            <li
                style={{ backgroundColor: this.state.color }}
            >
                {this.props.data.time} | {this.props.data.name}
            </li>
        );
    }
}