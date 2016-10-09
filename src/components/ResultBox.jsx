'use strict';

import React from 'react';
import Error from './Error.js';
import Success from './Success.js';

import './../styles/ResultBox.less';

export default class ResultBox extends React.Component{
    static propTypes = {
        responseObj: React.PropTypes.object
    };

    render () {
        return (
            <nav className="ResultBox">
                {this.props.responseObj.list[0] ? <Success responseObj={this.props.responseObj}/> : <Error/>}
            </nav>
        )
    }
}
