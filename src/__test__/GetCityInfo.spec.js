import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../js/components/App';
import GetWeather from '../js/components/GetWeather';
import Weather from '../js/components/Weather';
import GetCityInfo from '../js/components/GetCityInfo';
import {spy} from 'sinon';

describe('<GetCityInfo />', () => {

    const wrapper = shallow(<GetWeather />);
    wrapper.setState({dataLoaded: true});
    const mainView = wrapper.find('GetCityInfo');

    it('cityName in GetCityInfo component', () => {
        expect(mainView.props().countryName).to.equal('US');
    });

    it('countryName in GetCityInfo component', () => {
        expect(mainView.props().countryName).to.equal('US');
    });
});