import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
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
