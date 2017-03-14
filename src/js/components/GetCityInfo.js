import React, { Component } from 'react';

export default class GetCityInfo extends Component {
    render() {
        return (
            <div className="weatherData">
                <h1 style={{"textAlign":"center"}}>5 Days Weather Forecast of <span className="hightlight"><span className="cityCode">{this.props.cityName}</span><span className="counteryCode">, {this.props.countryName}</span></span></h1>
            </div>
        )
    }
}


