'use strict';

import React from 'react';
import { FormBox } from '../components';
import { Result } from '../containers';

import '../styles/index.less';

export default class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        //registered weather API id
        this.appId = 'a5c1fe6a20c1bf651547de778f43b750';
        this.state = {
            weather_obj: {}
        }
    }

    loadDataFromAPI = city => {
        //status handler
        const status = response => {
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
                this.setState({ weather_obj: response })
            })
            .catch(err => console.error(err))
    };

    render() {
        const { weather_obj } = this.state;
        return (
            <nav className="weather-main">
                <FormBox submit={this.loadDataFromAPI}/>
                {weather_obj.list ? <Result weather_obj={ weather_obj }/> : null}
            </nav>
        )
    }
}
