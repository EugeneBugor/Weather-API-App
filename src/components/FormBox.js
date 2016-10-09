'use strict';

import { Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import React from 'react';

import './../styles/FormBox.less';

export default class FormBox extends React.Component {
    constructor() {
        super();
        this.state = {
            city: ''
        }
    }

    static propTypes = {
        submit: React.PropTypes.func
    };

    handleText = (e) => {
        const city = e.target.value;
        this.setState({
            city: city
        });
    };

    handleDataSubmit = (e) => {
        e.preventDefault();

        let img = document.createElement('img');
        img.src = '/pics/loading.gif';
        img.classList.add('loading-img');

        const city = this.state.city.trim().toLowerCase();
        if (!city) return;

        document.getElementsByClassName('result-box')[0] ? document.getElementsByClassName('result-box')[0].style.display = 'none' : null;
        document.getElementById('container').appendChild(img);

        this.props.submit(city);
        this.setState({city: ''});
    };

    render() {
        return (
            <form className="FormBox" onSubmit={this.handleDataSubmit}>
                <FormGroup className="form-group" bsSize="large">
                    <InputGroup>
                        <FormControl className="form-group input" type="text" placeholder="Your city.."
                                     onChange={this.handleText}
                                     value={this.state.city}/>
                        <InputGroup.Button>
                            <Button className="form-group button" bsStyle="primary" bsSize="large" type="submit">Get
                                it!</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </form>
        )
    }
}