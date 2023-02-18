import React, { Component } from 'react';

// React Class Component
export default class Greetings extends Component {
    render() {
        return (
            <div>Hello, {this.props.name}</div>
        )
    }
}
