import React from 'react';

import './../styles/Success.less'

export default class Success extends React.Component {
    static propTypes = {
        responseObj: React.PropTypes.object
    };

    options = () => {
        return {
            'city': this.props.responseObj.list[0].name,
            'country': this.props.responseObj.list[0].sys.country,
            'icon': this.props.responseObj.list[0].weather[0].icon,
            'mainWeather': this.props.responseObj.list[0].weather[0].main,
            'detailsWeather': this.props.responseObj.list[0].weather[0].description,
            'temp': this.props.responseObj.list[0].main.temp,
            'coords': this.props.responseObj.list[0].coord
        }
    };

    render() {
        const options = this.options();

        let img = <img className="img-weather"
                       src={`http://openweathermap.org/img/w/${options.icon}.png`}
                       alt={options.mainWeather}/>,
            time = <p>{new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()}
                :<span>{new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}</span>
            </p>;


        return (
            <table className="Success">

                <tbody>
                <tr>
                    <th>{options.city}</th>
                    <th>{time}</th>
                </tr>
                <tr>
                    <td>{options.country}</td>
                </tr>
                <tr>
                    <td>{img}{`${options.temp} °C`} </td>
                </tr>
                <tr>
                    <td>{options.detailsWeather} </td>
                </tr>
                </tbody>
            </table>
        )
    }
};