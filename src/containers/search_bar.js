import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = { term: '' }

    // This line is needed in the constructor to bind the component level this to the onInputChange method
    // Context almost alwyas needs to be bound if you are passing callbacks
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    this.setState({term:event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault()
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
