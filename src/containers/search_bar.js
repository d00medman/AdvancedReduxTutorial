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
    console.log(event.target.value)
    this.setState({term:event.target.value})
  }

  render() {
    return(
      <form className="input-group">
        <input
          placeholder="Get a Five Day Forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
