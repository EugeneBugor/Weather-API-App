'use strict';

import { Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import React from 'react';

export default class FormBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { city: '' }
    }

    static propTypes = {
        submit: React.PropTypes.func
    };

    handleText = (e) => {
        const city = e.target.value;
        this.setState({ city: city });
    };

    handleDataSubmit = (e) => {
        e.preventDefault();

        const city = this.state.city.trim().toLowerCase();
        if (city) {
            this.props.submit(city);
            this.setState({ city: '' });
        }
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