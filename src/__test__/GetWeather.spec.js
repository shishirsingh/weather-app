import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../js/components/App';
import GetWeather from '../js/components/GetWeather';
import Weather from '../js/components/Weather';
import GetCityInfo from '../js/components/GetCityInfo';
import sinon, {spy} from 'sinon';

describe('<GetWeather/> state and props', function () {
    let wrapper = mount(<GetWeather/>);
    it('Default cityName should be `San Francisco` and countryName should be `US`', function () {
        
        expect(wrapper.state('cityName')).to.equal('San Francisco');
        expect(wrapper.state('countryName')).to.equal('US');
    });

    it('Default appId should be `"0fca75ff363ed8796e35909a36765e49"`', function () {
        expect(wrapper.props().appId).to.equal('0fca75ff363ed8796e35909a36765e49');
    });
});

describe('Get Weather Data', () => {
    let sandbox;
    let server;
    let wrapper = mount(<GetWeather/>);
    const componentDidMountSpy = spy(GetWeather.prototype, 'getUserData');
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        server = sandbox.useFakeServer();
    });
    afterEach(() => {
        server.restore();
        sandbox.restore();
    });

    it('Simulate Server call', () => {         
        expect(wrapper.instance().componentDidMountSpy).to.have.been.called;
    });
});