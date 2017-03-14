import React, { Component } from 'react';
import Weather from './Weather';

export default class GetForecast extends Component {
    
    render() {
        const {day1, day2, day3, day4, day5} = this.props.days;
        function getdayWise(getDateVal) {
            const a = new Date(getDateVal);
            const year = a.getFullYear();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            const month = months[a.getMonth()];
            const date = a.getDate();
            const day = days[a.getDay()];
            const currDate = day +', '+ month +' '+ date +' ' + year;
            return currDate;
        }

        function getDayTimeVal(dayNum) {
            let weatherDataVal = dayNum.map((item, i) => {
                return(
                    <Weather key={i} {...item} />
                );
            });
            return weatherDataVal;
        }

        return (
            <li className="eachDay">
                <div className="dayWeather">
                    <h2>{getdayWise(day1[0].dt_txt)}</h2>
                    <ul>{getDayTimeVal(day1)}</ul>
                </div>
                <div className="dayWeather">
                    <h2>{getdayWise(day2[0].dt_txt)}</h2>
                    <ul>{getDayTimeVal(day2)}</ul>
                </div>
                <div className="dayWeather">
                    <h2>{getdayWise(day3[0].dt_txt)}</h2>
                    <ul>{getDayTimeVal(day3)}</ul>
                </div>
                <div className="dayWeather">
                    <h2>{getdayWise(day4[0].dt_txt)}</h2>
                    <ul>{getDayTimeVal(day4)}</ul>
                </div>
                <div className="dayWeather">
                    <h2>{getdayWise(day5[0].dt_txt)}</h2>
                    <ul>{getDayTimeVal(day5)}</ul>
                </div>
           </li>
        )
    }
}