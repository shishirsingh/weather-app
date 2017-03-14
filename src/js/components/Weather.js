import React, { Component } from 'react';

export default class Weather extends Component {
    addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    getDate(dateStamp, dateType) {
        const a = new Date(dateStamp);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        const hour = this.addZero(a.getHours());
        const min = this.addZero(a.getMinutes());
        const sec = this.addZero(a.getSeconds());
        const dateOnly = month + ' ' + date + ' ' + year ;
        const timeOnly = hour + ':' + min ;
        return dateType == 'date' ? dateOnly : timeOnly;
    }

    getTemp(temp, unit) {
        var tempOnly = '';
        if(unit == 'c') {
            tempOnly = (temp - 273.5).toFixed(1);
            return tempOnly + ' \xB0C';
        } else if(unit == 'f') {
            tempOnly = (temp - 459.67).toFixed(1);
            return tempOnly + ' \xB0C';
        }
    }

    render() {
        const unit = 'c';
        const temp = this.getTemp(this.props.main.temp, unit);
        const minTemp = this.getTemp(this.props.main.temp_min, unit);
        const maxTemp = this.getTemp(this.props.main.temp_max, unit);
        const weatherDate = this.getDate(this.props.dt_txt, 'date');
        const weatherTime = this.getDate(this.props.dt_txt, 'time');
        const weatherSummary = this.props.weather[0].description;
    //   console.log(this.props);
        return (
           <li className="weatherCard">
                <div className="time">{weatherTime}</div>
                <div className="temp">{temp}</div>
               <div className="summary">{weatherSummary}</div>
            </li>
        )
    }
}