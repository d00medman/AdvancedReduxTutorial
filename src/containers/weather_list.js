import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name

    return(
      <tr key={name}>
        <td>
          {name}
        </td>
      </tr>
    )
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// es6 magic
function mapStateToProps({weather}) { // ({weather}) === (state.weather)
  return { weather } // {weather} === {weather: weather}
}

// Export statement needs two properties to connect, the mapping of state and the component being mapped to.
export default connect(mapStateToProps)(WeatherList)
