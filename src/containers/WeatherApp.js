'use strict';

import React from 'react';

import FormBox from './../components/FormBox.js';
import ResultBox from './../components/ResultBox.jsx';

import './../styles/WeatherApp.less';

export default class WeatherApp extends React.Component{
    constructor () {
        super();
        this.appId = 'a5c1fe6a20c1bf651547de778f43b750';
        this.state = {
            weatherObj: {}
        }
    }

    loadDataFromAPI = city => {
        status = response => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            } else {
                return Promise.reject(new Error(response.statusText));
            }
        };

        fetch(`http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${this.appId}`, {
            method: 'GET'
        })
            .then(status)
            .then(res => res.json())
            .then(response => {
                document.getElementById('container').removeChild(document.getElementsByClassName('loading-img')[0]);
                document.getElementsByClassName('result-box')[0] ? document.getElementsByClassName('result-box')[0].style.display = 'block' : null;
                this.setState({
                    weatherObj: response
                })
            })
            .catch(error => console.log(error))
    };

    render() {
        return (
            <nav className="WeatherApp">
                <FormBox submit={this.loadDataFromAPI}/>
                {this.state.weatherObj.list ? <ResultBox responseObj={this.state.weatherObj}/> : null}
            </nav>
        )
    }
}