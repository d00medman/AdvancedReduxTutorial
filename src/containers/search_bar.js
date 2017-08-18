import React, { Component } from 'react'
// These seem to be the go to actions needed in the action binding process
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = { term: '' }

    // This line is needed in the constructor to bind the component level this to the onInputChange method
    // Context almost alwyas needs to be bound if you are passing callbacks
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({term:event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault()
    // whenever user calls this action, the fetchWeather event we defined will be called with the
    // term set in the state
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render() {
    // pressing enter on a form element causes the browser to try and make a post request to the server
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a Five Day Forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// This is the method which allows our container to communicate with the broader redux
function mapDispatchToProps(dispatch) {
  // this line enables the action to be dispatched to the middleware, then reducers, etc.
  return bindActionCreators({ fetchWeather }, dispatch)
}

// passing null here because mapDispatchToProps always goes in as the second argument, usually state would go into null
export default connect(null, mapDispatchToProps)(SearchBar)
