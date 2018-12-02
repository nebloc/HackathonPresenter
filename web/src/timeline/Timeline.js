import React from 'react';
import './Timeline.css'

export default class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props,
            events: [],
            eventHeadings: [],
        }

        this.state.connection.on("updatedInfo", data => {
            let sheetsData = JSON.parse(data).data;
            let headings = sheetsData.shift();
            sheetsData = sheetsData.map(val => {
                const reduced = val.reduce((acc, val, i) => {
                    const curHeading = headings[i].toLowerCase();
                    acc[curHeading] = val;
                    return acc;
                }, {});
                return reduced;
            });
            this.setState({
                events: sheetsData,
                eventHeadings: headings,
            });
        });
    }

    componentDidMount() {

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
                <li>{this.state.eventHeadings.join("|")}</li>
                {
                    // Loop and render events in the list
                    this.state.events.map((event, i) => {
                        // TODO: set current to true if time is correct
                        let current = false;
                        console.log(event)
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
                {Object.values(this.props.data).join("|")}
            </li>
        );
    }
}