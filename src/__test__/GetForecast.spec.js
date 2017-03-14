import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import GetWeather from '../js/components/GetWeather';
import GetForecast from '../js/components/GetForecast';
import {spy} from 'sinon';

describe('<GetForecast />', () => {
    const wrapper = shallow(<GetWeather />);
    wrapper.setState({dataLoaded: true});
    const mainView = wrapper.find('ul');
    const forecast = mainView.find('GetForecast');

    it('Data should get loaded for Forecast', () => {
        expect(forecast.props().dataLoaded).to.equal(true);
    });
});