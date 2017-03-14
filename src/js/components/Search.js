import React, { Component } from 'react';

export default class Search extends Component {

    onRequest(e) {
        e.preventDefault();
        let cityname = this.refs.cityname.value.trim();
        if(!cityname) {
            alert('Please Enter City name');
            return;
        }
        this.props.onFormSubmit(cityname);
        this.refs.cityname.value = '';
    }

    render() {
        return( 
            <div className="citySearch">
                <form onSubmit={this.onRequest.bind(this)}>
                    <div className="input-group">
                        <input type="text" ref="cityname" placeholder="Type City name..."/>
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}