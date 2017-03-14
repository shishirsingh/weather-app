import React, { Component } from 'react';
import GetWeather from '../components/GetWeather';

export default class App extends Component {
    render() {
        return(
            <div className="wrapper">
                <GetWeather />
            </div>
        )
    }
}