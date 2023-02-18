import React, { Component } from 'react';

// React Class Component
export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ seconds: this.state.seconds + 1 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>Seconds: {this.state.seconds}</h1>
            </div>
        )
    }
}
