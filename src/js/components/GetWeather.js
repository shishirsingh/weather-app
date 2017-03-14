import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import GetCityInfo from './GetCityInfo';
import GetForecast from './GetForecast';

export default class GetWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
           dataLoaded: false,
           cityName: 'San Francisco',
           countryName: 'US',
           weatherData: [],
           posts: [],
           days: {
                day1: [],
                day2: [],
                day3: [],
                day4: [],
                day5: []
           }
        };
    }

    handleFormSubmit(cityName) {
        this.setState({cityName: cityName}, function(){
            this.getUserData();
        });
    }

    getUserData() {
        axios.get('//api.openweathermap.org/data/2.5/forecast?q='+this.state.cityName+'&APPID='+this.props.appId)
        .then(res => {
            // console.log(res.data.city.name);
            var myArr=res.data;
            var weather = [], tmp = {}, counter = -1;
            if(!myArr.list) {
                alert('City "'+this.state.cityName+'" not found');
                this.setState({dataLoaded: 'invalid'});
                return;
            } else {
                myArr.list.map((item, i) => {
                    var dts = item.dt_txt.split(' ')[0];
                    if(tmp.hasOwnProperty(dts)) {
                        weather[tmp[dts]].push(item);
                    } else {
                        tmp[dts] = ++counter;
                        weather[tmp[dts]] = [];
                        weather[tmp[dts]].push(item);
                    }
                });
            
                this.state.cityName = res.data.city.name;
                this.state.countryName = res.data.city.country;
                this.state.dataLoaded = true;
                this.state.days = {
                    day1: weather[0],
                    day2: weather[1],
                    day3: weather[2],
                    day4: weather[3],
                    day5: weather[4]
                };
                this.setState({weatherData: res.data});
            }
        });
    }
    
    componentDidMount() {
      this.getUserData();
    }
        
    render() {
        var getDataMarkup, getCityMarkup = '';
        if(this.state.dataLoaded === false) {
            getDataMarkup = <div style={{'color': 'orange'}}>Loading...</div>;
        } else if(this.state.dataLoaded === true) {
            getDataMarkup = <GetForecast {...this.state} />;
            getCityMarkup = <GetCityInfo cityName={this.state.cityName} countryName={this.state.countryName}/>
        } else {
            getDataMarkup = <div style={{'color': 'red'}}>Invalid City, try again!</div>;
        }
        
        return (
            <div className="resultsContainer">
                <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
                {getCityMarkup}
                 <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
                <ul className="allDays">
                    {getDataMarkup}
                </ul>
            </div>        
        )
    }
}

GetWeather.propTypes = {
    appId: React.PropTypes.string
};

GetWeather.defaultProps = {
    appId: '0fca75ff363ed8796e35909a36765e49'
}