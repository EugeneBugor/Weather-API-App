import React from 'react';

export default class Success extends React.Component {
    static propTypes = {
        weather_obj: React.PropTypes.object
    };

    options = () => {
        const {
            weather_obj: {
                name,
                sys,
                weather,
                main,
                coord
            }
        } = this.props;

        return {
            'city': name,
            'country': sys && sys.country,
            'icon': weather && weather[0].icon,
            'details_weather': weather && weather[0].description,
            'main_weather': weather && weather[0].main,
            'temp': main && main.temp,

        }
    };

    getWeatherImage = options => {
        return <img className="img-weather"
                    src={`http://openweathermap.org/img/w/${options.icon}.png`}
                    alt={options.main_weather}/>
    };

    render() {
        const options = this.options();

        return (
            <div className="success">
                <div className="header">
                    <span className="city">{options.city}</span>
                    <span className="country">{options.country}</span>
                </div>
                <div className="weather">
                    <span className="weather-img">{this.getWeatherImage(options)}</span>
                    <span className="weather-temp">{`${options.temp} °C`}</span>
                </div>
            </div>
        )
    }
};