'use strict';

import React, { Component } from 'react';
import { Error, Success } from '../components';

export default class Result extends Component {
    static propTypes = {
        weather_obj: React.PropTypes.object
    };

    render () {
        const { weather_obj } = this.props;

        return (
            <nav className="ResultBox">
                {weather_obj && weather_obj.count ? <Success weather_obj={ weather_obj.list[0] }/>
                                                  : <Error/>}
            </nav>
        )
    }
};
